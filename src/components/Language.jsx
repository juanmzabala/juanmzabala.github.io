import '../stylesheets/language.css'
import { useContext,useEffect } from 'react';
import { LanguageContext } from '../context/ContextProvider';


function Language (){
    //State for Language
    const {isSpa,setIsSpa} = useContext(LanguageContext);

    useEffect(()=>{
        if (localStorage.getItem('language')){
            if(localStorage.getItem('language')==="spa"){
                setIsSpa("spa")
            }else{
                setIsSpa("eng")
            }
        }else{
            localStorage.setItem('language',isSpa);
        }
      },[]);
    
    //Function handler for Language Button
    const handleLanguage = ()=>{
        if(isSpa==="spa"){
            setIsSpa("eng")
            localStorage.setItem('language',"eng");
        }else{
            setIsSpa("spa")
            localStorage.setItem('language',"spa");
        }
    }

    if (isSpa==="spa"){
        return(
            <button className='languageButton eng'
                    onClick={handleLanguage}>
                        ENG
            </button>
        )
    }else{
        return(
            <button className='languageButton spa'
                    onClick={handleLanguage}>
                        SPA
            </button>
        )
    }
    
}

export default Language;