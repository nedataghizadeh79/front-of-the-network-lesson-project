import {useEffect, useState} from "react";
import welcomeImg from '../../assets/welcome.jpg'
import './welcome.css'
import Landing from "../landing/landing";

const Welcome=()=>{
    const [showWelcome , setShowWelcome] = useState(true)

    useEffect(()=>{
            const time = setTimeout(()=>{
                setShowWelcome(false)
            },2000)
        return ()=>clearTimeout(time)
    },[])


    if(showWelcome){
        return  <div className='welcomeContainer'>
            <img src={welcomeImg} alt='welcome img' />
        </div>
    }else {
        return <Landing/>
    }
}

export default Welcome