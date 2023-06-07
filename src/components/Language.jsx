import '../stylesheets/language.css'
import { useContext } from 'react';
import { LanguageContext } from '../context/ContextProvider';


function Language (){
    //State for Language
    const {isSpa,setIsSpa} = useContext(LanguageContext);
    
    //Function handler for Language Button
    const handleLanguage = ()=>{
        isSpa==="spa" ? setIsSpa("eng"):setIsSpa("spa");
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