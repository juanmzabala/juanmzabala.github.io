import '../stylesheets/lightMode.css'
import { useContext,useEffect } from 'react';
import {LightModeContext} from '../context/ContextProvider'
import { FiSun,FiMoon } from "react-icons/fi";


function LightMode(){
   

    //Import state for handle Button Light Mode
    const {isLight,setIsLight} = useContext(LightModeContext);

  useEffect(()=>{
    
    if (localStorage.getItem('theme')){
        if(localStorage.getItem('theme')==='true'){
            setIsLight(true)
        }else{
            setIsLight(false)
        }
    }else{
        localStorage.setItem('theme',isLight);
    }
    console.log(localStorage.getItem('theme'));
  },[]);



    //Function handler for state Button
    const handleLightButton = ()=>{
        isLight ? setIsLight(false) : setIsLight(true);
        localStorage.setItem('theme',!isLight);

    }

  
    if(!isLight){
        return(
            <button className='lightButton light'
                    onClick={handleLightButton}>
                        <div>
                        <FiSun size="1.7em"/>
                        </div>
                    
            </button>
        )  
    }
    if(isLight){
        return(
            <button className='lightButton night'
                    onClick={handleLightButton}>
                        <FiMoon size="1.7em" color='#fff'/>
            </button>
        )
    }
    
}

export default LightMode;