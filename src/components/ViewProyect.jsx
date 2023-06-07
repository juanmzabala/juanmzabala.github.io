import '../stylesheets/viewProyect.css';
import { CgCloseO,CgArrowLeftO,CgArrowRightO } from "react-icons/cg";
import { useState,useContext } from 'react';
import text from '../assets/text.json';
import { LightModeContext,LanguageContext } from '../context/ContextProvider';

function ViewProyect ({open,proyect}){

    const {isLight} = useContext(LightModeContext);
    const {isSpa} = useContext(LanguageContext);

    const [numImage,setNumImage] = useState(1);
    const changeRight = ()=>{
        if(numImage===1){
            setNumImage(2);
        }else if(numImage===2){
            setNumImage(3);
        }else if(numImage===3){
            setNumImage(1);
        }
    }
    const changeLeft = ()=>{
        if(numImage===1){
            setNumImage(3);
        }else if(numImage===2){
            setNumImage(1);
        }else if(numImage===3){
            setNumImage(2);
        }
    }



    return(
        <div className="viewProyectContainer">
            <div className={isLight ? 'proyectContainerGrey' : 'proyectContainerGrey backgroundContainerProyect'}>
                <div className="buttonCloseProyect" onClick={open} id="0">
                    <CgCloseO color='#fff' size="2.3em"/>
                </div>
                <div className="infoProyect">
                   <h3 className={isLight ? 'titleProyectView': 'titleProyectView textViewProyectColor'}>{text[isSpa].proyects.proyectsInfo[proyect].title}</h3>
                   <p className='descriptionProyectView'>{text[isSpa].proyects.proyectsInfo[proyect].info}</p>
                    <div className="linksProyectView">
                        <a href={text[isSpa].proyects.proyectsInfo[proyect].linkGit} target="_blank" className="buttonProyect link buttonCode">
                            {text[isSpa].proyects.seeCode}           
                        </a>
                        <a href={text[isSpa].proyects.proyectsInfo[proyect].linkLive} target="_blank" className="buttonProyect link buttonLiveView ">
                        {text[isSpa].proyects.liveView} 
                        </a>
                    </div>
                </div>
                <div className="photoProyect">
                    <div className="buttonLeft">
                    <button onClick={changeLeft}> <CgArrowLeftO size="2em"/> </button>
                    </div>
                    
                    <div className="photoDesktop">
                        <img src={`./img/proyecto1-desktop-foto${numImage}.png`} alt="" />
                    </div>
                    <div className="buttonRight">
                        <button onClick={changeRight}> <CgArrowRightO size="2em"/> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProyect;

