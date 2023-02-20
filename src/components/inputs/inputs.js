import React, {useState} from "react";
import './inputs.css'

const Inputs=({setUdp_tunnels, sendData})=>{
    const [inputs, setInputs] = useState([{ listening_ip: '', listening_port: '', remote_ip: '', remote_port: '' }]);

    const handleAddInput = () => {
        setInputs([...inputs, { listening_ip: '', listening_port: '', remote_ip: '', remote_port: '' }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendData();
        // console.log(inputs);
    };

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const newInputs = [...inputs];
        newInputs[index][name] = value;
        setInputs(newInputs);
        setUdp_tunnels(newInputs)
    };



    return (
        <div>
            <form onSubmit={handleSubmit}>
                {inputs.map((input, index) => (
                    <div key={index}>
                        <input type="text" name="listening_ip" placeholder="listening_ip" value={input.listening_ip} onChange={(e) => handleInputChange(e, index)} />
                        <input type="text" name="listening_port" placeholder="listening_port" value={input.listening_port} onChange={(e) => handleInputChange(e, index)} />
                        <input type="text" name="remote_ip" placeholder="remote_ip" value={input.remote_ip} onChange={(e) => handleInputChange(e, index)} />
                        <input type="text" name="remote_port" placeholder="remote_port" value={input.remote_port} onChange={(e) => handleInputChange(e, index)} />
                    </div>
                ))}
                <button type="button" onClick={handleAddInput} className='plus'>+</button>
                <button type="submit" className='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Inputs