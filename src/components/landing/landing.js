import './landing.css'
import {useEffect, useState} from "react";
import Inputs from "../inputs/inputs";
import Buttons from "../buttons/buttons";
import axios from "axios";


const LandingPage = () => {

    const [allInformation, setAllInformation] = useState({"xserver": {}, "verbosity": "", "udp_tunnels": []})
    const [xserver, setXserver] = useState({ip: "", port: ""})
    const [verbosity, setVerbosity] = useState("")
    const [udp_tunnels, setUdp_tunnels] = useState([])


    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setXserver(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const sendData = async () => {
        // اگر همه المنت های state پر شده‌اند
        if (Object.values(allInformation).every((value) => Boolean(value))) {
            try {
                // ارسال درخواست با استفاده از axios
                const response = await axios.post('http://localhost:1880/start_client/', allInformation);
                console.log(response.data); // نمایش پاسخ دریافتی از سرور
            } catch (error) {
                console.error(error); // نمایش خطا در صورت وجود خطا
            }
        }
    };

    useEffect(() => {
        setAllInformation({"xserver": xserver, "verbosity": verbosity, "udp_tunnels": udp_tunnels});
        sendData()
    }, [xserver, verbosity, udp_tunnels]);


    console.log(allInformation)


    return (
        <div className='body'>
            <section className='container'>
                <p className='x'>X Server</p>
                <section className='xserver'>

                    <br/>


                    <label>
                        IP:
                        <input type="text" name="ip" placeholder='XServer ip' value={xserver.ip}
                               onChange={handleInputChange}/>
                    </label>
                    <label>
                        Port:
                        <input type="text" name="port" placeholder='XServer port' value={xserver.port}
                               onChange={handleInputChange}/>
                    </label>

                </section>

                <br/>
                <br/>


                <section className='verbosity_buttons'>
                    <p className='x'>Verbosity</p>
                    <Buttons setVerbosity={setVerbosity}/>
                </section>


                <br/>
                <br/>


                <Inputs setUdp_tunnels={setUdp_tunnels}/>


            </section>

        </div>
    )
}

export default LandingPage