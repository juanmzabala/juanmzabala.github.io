//Import CSS
import '../stylesheets/proyect.css'

//Import Context
import { useContext } from 'react';
import { LightModeContext,LanguageContext } from '../context/ContextProvider';

//Import text from .json
import text from '../assets/text.json'



function Proyect({title,description,linkGit,linkLive,open,id}){

    //Define Context for Language and NightMode
    const {isLight} = useContext(LightModeContext);
    const {isSpa} = useContext(LanguageContext);

    return(
        <div className={isLight ? 'containerProyect' : 'containerProyect backgroundContainerProyect'} >
            <h3 className={isLight ? 'titleProyect' : 'titleProyect textProyectColor'}>{title}</h3>
            <p className={isLight ? 'descriptionProyect' : 'descriptionProyect textProyectColor'}>
                {description}
            </p>
            <div className="linksProyect">
                <div className="buttonProyect buttonMore"
                    onClick={open}
                    id={id}>
                     {text[isSpa].proyects.seeInfo}          
                </div>
                <a href={linkGit}
                    target='_blank'
                    className="buttonProyect link buttonCode">
                        {text[isSpa].proyects.seeCode}             
                </a>
                <a href={linkLive}
                    target='_blank'
                    className="buttonProyect link buttonLiveView">
                        {text[isSpa].proyects.liveView}  
                </a>
            </div>
        </div>
)}

export default Proyect;