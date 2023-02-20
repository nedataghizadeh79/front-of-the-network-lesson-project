import './buttons.css'
import {useState} from "react";


function Buttons({setVerbosity}) {
    const [button1Text, setButton1Text] = useState('Debug');
    const [button2Text, setButton2Text] = useState('Info');
    const [button3Text, setButton3Text] = useState('Error');
    const [selectedButton, setSelectedButton] = useState('');

    const handleButtonClick = (buttonText) => {
        setSelectedButton(buttonText);
        setVerbosity(buttonText)
        if (buttonText === button1Text) {
            setButton1Text('Debug');
            setButton2Text('Info');
            setButton3Text('Error');
        } else if (buttonText === button2Text) {
            setButton1Text('Debug');
            setButton2Text('Info');
            setButton3Text('Error');
        } else {
            setButton1Text('Debug');
            setButton2Text('Info');
            setButton3Text('Error');
        }
    };

    return (
        <div>
            <button
                style={{ backgroundColor: selectedButton === button1Text ? '#67c5ff' : ' #9b9b9b' }}
                onClick={() => handleButtonClick(button1Text)}
            >
                <p className='clicked'>{button1Text}</p>

            </button>
            <button
                style={{ backgroundColor: selectedButton === button2Text ? '#8bffa1' : ' #9b9b9b' }}
                onClick={() => handleButtonClick(button2Text)}
            >
               <p className='clicked'>{button2Text}</p>
            </button>
            <button
                style={{ backgroundColor: selectedButton === button3Text ? '#84fff3' : ' #9b9b9b' }}
                onClick={() => handleButtonClick(button3Text)}
            >
                <p className='clicked'>{button3Text}</p>

            </button>
            <p>{selectedButton}</p>
        </div>
    );
}

export default Buttons