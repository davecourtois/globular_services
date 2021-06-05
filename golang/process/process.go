package process

import (
	"errors"
	"os"
	"syscall"
	"os/exec"
	"strings"
	"github.com/davecourtois/Utility"
	"github.com/globulario/services/golang/config"
	"time"
	"runtime"
	"strconv"
	ps "github.com/mitchellh/go-ps"

)

/**
 * Kill a given service instance.
 */
func KillServiceProcess(s map[string]interface{}) error {

	pid := Utility.ToInt(s["Process"])
	proxyProcessPid := Utility.ToInt(s["ProxyProcess"])

	// Here I will set a variable that tell globular to not keep the service alive...
	s["State"] = "terminated"

	// also kill it proxy process if exist in that case.
	proxyProcess, err := os.FindProcess(proxyProcessPid)
	if err == nil {
		proxyProcess.Kill()
		s["ProxyProcess"] = -1
	}

	// kill it in the name of...
	process, err := os.FindProcess(pid)
	s["State"] =  "stopped"
	if err == nil {
		err := process.Kill()
		if err == nil {
			s["Process"] = -1
			
		} else {
			s["State"] =  "failed"
		}
	}

	// save the service configuration.
	return config.SaveServiceConfiguration(s)
}

// Start a service process.
func StartServiceProcess(s map[string]interface{}, portsRange string) error{
	// I will kill the process if is running...
	KillServiceProcess(s);

	// Get the next available port.
	port := Utility.ToInt(s["Port"])
	var err error
	if !config.IsPortAvailable(port, portsRange) {
		port, err = config.GetNextAvailablePort(portsRange)
		if err != nil {
			return err
		}
		s["Port"] = port
	}

	err = os.Chmod(s["Path"].(string), 0755)
	if err != nil {
		return err
	}

	p := exec.Command(s["Path"].(string), Utility.ToString(port))

	err = p.Start()
	if err != nil {
		s["State"] = "fail"
		s["Process"] = -1
		return err
	}

	// Set the process and it state.
	s["Process"] = p.Process.Pid
	s["State"] = "running"

    return config.SaveServiceConfiguration(s)
}

// Start a service process.
func StartServiceProxyProcess(s map[string]interface{}, certificateAuthorityBundle, certificate,  portsRange string) error{

	servicePort := Utility.ToInt(s["Port"]) 
	proxyPort := Utility.ToInt(s["Proxy"])

	// Test if the port is available.
	if !config.IsPortAvailable(proxyPort, portsRange) {
		port, err := config.GetNextAvailablePort(portsRange)
		if err != nil {
			return err
		}
		s["Proxy"] = port
	}

	pid := Utility.ToInt(s["ProxyProcess"])
	if pid != -1 {
		KillServiceProcess(s)
	}

	// Now I will start the proxy that will be use by javascript client.
	proxyPath := "/bin/grpcwebproxy"
	if !strings.HasSuffix(proxyPath, ".exe") && runtime.GOOS == "windows" {
		proxyPath += ".exe" // in case of windows.
	}

	proxyBackendAddress := s["Domain"].(string) + ":" + strconv.Itoa(servicePort)
	proxyAllowAllOrgins := "true"
	proxyArgs := make([]string, 0)

	// Use in a local network or in test.
	proxyArgs = append(proxyArgs, "--backend_addr="+proxyBackendAddress)
	proxyArgs = append(proxyArgs, "--allow_all_origins="+proxyAllowAllOrgins)
	hasTls := s["TLS"].(bool)
	creds := "/etc/globular/config/tls"

	if hasTls {
		certAuthorityTrust := creds + "/ca.crt"

		/* Services gRpc backend. */
		proxyArgs = append(proxyArgs, "--backend_tls=true")
		proxyArgs = append(proxyArgs, "--backend_tls_ca_files="+certAuthorityTrust)
		proxyArgs = append(proxyArgs, "--backend_client_tls_cert_file="+creds+"/client.crt")
		proxyArgs = append(proxyArgs, "--backend_client_tls_key_file="+creds+"/client.pem")

		/* http2 parameters between the browser and the proxy.*/
		proxyArgs = append(proxyArgs, "--run_http_server=false")
		proxyArgs = append(proxyArgs, "--run_tls_server=true")
		proxyArgs = append(proxyArgs, "--server_http_tls_port="+strconv.Itoa(proxyPort))

		/* in case of public domain server files **/
		proxyArgs = append(proxyArgs, "--server_tls_key_file="+creds+"/server.pem")
		proxyArgs = append(proxyArgs, "--server_tls_client_ca_files="+creds+"/"+certificateAuthorityBundle)
		proxyArgs = append(proxyArgs, "--server_tls_cert_file="+creds+"/"+certificate)

	} else {
		// Now I will save the file with those new information in it.
		proxyArgs = append(proxyArgs, "--run_http_server=true")
		proxyArgs = append(proxyArgs, "--run_tls_server=false")
		proxyArgs = append(proxyArgs, "--server_http_debug_port="+strconv.Itoa(proxyPort))
		proxyArgs = append(proxyArgs, "--backend_tls=false")
	}

	// Keep connection open for longer exchange between client/service. Event Subscribe function
	// is a good example of long lasting connection. (48 hours) seam to be more than enought for
	// browser client connection maximum life.
	proxyArgs = append(proxyArgs, "--server_http_max_read_timeout=48h")
	proxyArgs = append(proxyArgs, "--server_http_max_write_timeout=48h")

	// start the proxy service one time
	serviceDir := os.Getenv("GLOBULAR_SERVICES_ROOT")
	if len(serviceDir) > 0 {
		proxyPath = serviceDir + proxyPath
	} else {
		proxyPath = "/usr/local/share/globular" + proxyPath
	}

	proxyProcess := exec.Command(proxyPath, proxyArgs...)
	proxyProcess.SysProcAttr = &syscall.SysProcAttr{
		//CreationFlags: syscall.CREATE_NEW_PROCESS_GROUP,
	}

	err := proxyProcess.Start()

	if err != nil {
		return err
	}

	// save service configuration.
	s["ProxyProcess"] = proxyProcess.Process.Pid


	return config.SaveServiceConfiguration(s)
}


// check if the process is actually running
// However, on Unix systems, os.FindProcess always succeeds and returns
// a Process for the given pid...regardless of whether the process exists
// or not.
func GetProcessRunningStatus(pid int) (*os.Process, error) {
	proc, err := os.FindProcess(pid)
	if err != nil {
		return nil, err
	}

	//double check if process is running and alive
	//by sending a signal 0
	//NOTE : syscall.Signal is not available in Windows
	err = proc.Signal(syscall.Signal(0))
	if err == nil {
		return proc, nil
	}

	if err == syscall.ESRCH {
		return nil, errors.New("process not running")
	}

	// default
	return nil, errors.New("process running but query operation not permitted")
}

/**
 * Keep process found in configuration in line with one found on the server.
 */
 func ManageServicesProcess(exit chan bool){

	ticker := time.NewTicker(5 * time.Second)
	go func() {
		for {
			select {
			case <- exit:
				return // stop processing...
			case <-ticker.C:
				// Here I will manage the process...
				services, err := config.GetServicesConfigurations()
				if err != nil {
					return 
				}

				runingProcess := make(map[string][]int)
				proxies := make([]int, 0)

				// Fist of all I will get all services process...
				for i := 0; i < len(services); i++ {
					s := services[i]
					pid :=Utility.ToInt(s["Process"])
					state := s["State"].(string)
					p, err := ps.FindProcess(pid)
					if pid != -1 && err == nil && p != nil {
						name := p.Executable()
						if _, ok := runingProcess[name]; !ok {
							runingProcess[name] = make([]int, 0)
						}
						runingProcess[name] = append(runingProcess[name], Utility.ToInt(s["Process"]))
					} else if pid == -1 || p == nil {
						if state == "failed" || state == "stopped" || state == "running" {
							// make sure the process is no running...
							if s["KeepAlive"].(bool) {
								KillServiceProcess(s)
							}
						}
					}

					proxies = append(proxies, Utility.ToInt(s["ProxyProcess"]))
				}

				proxies_, _ := Utility.GetProcessIdsByName("grpcwebproxy")
				for i := 0; i < len(proxies_); i++ {
					proxy := proxies_[i]
					for j := 0; j < len(proxies); j++ {
						if proxy == proxies[j] {
							proxy = -1
							break
						}
					}
					if proxy != -1 {
						p, err := os.FindProcess(proxy)
						if err == nil {
							p.Kill()
						}
					}
				}

				// Now I will find process by name on the computer and kill process not found in the configuration file.
				for name, pids := range runingProcess {

					pids_, err := Utility.GetProcessIdsByName(name)
					if err == nil {
						for i := 0; i < len(pids_); i++ {
							pid := pids_[i]
							for j := 0; j < len(pids); j++ {
								if pid == pids[j] {
									pid = -1
									break
								}
							}

							if pid != -1 {
								p, err := os.FindProcess(pid)
								if err == nil {
									p.Kill()
								}
							}
						}
					}
				}
			}
		}
	}()
}