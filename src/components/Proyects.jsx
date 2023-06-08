//Import CSS
import '../stylesheets/proyects.css';

//Import Context and State
import { useContext, useState } from 'react';
import { LightModeContext,LanguageContext } from '../context/ContextProvider';

//Import text from .json
import text from '../assets/text.json';

//Import Components for use
import Proyect from './Proyect';
import ViewProyect from './ViewProyect';

function Proyects(){

    //Define variable context for NightMode and Language
    const {isLight} = useContext(LightModeContext);
    const {isSpa} = useContext(LanguageContext);
    //State for Proyect Big Window
    const [isProyectOpen,setIsProyectOpen] = useState(false);

    //State for indicate who proyect window was clicked
    const [proyect,setProyect] = useState("")

    //Function handle for Proyects Big window
    const handleProyectWindow = (e)=>{
        isProyectOpen?setIsProyectOpen(false):setIsProyectOpen(true);
        const idProyect = e.target.id;
        if(idProyect!=""){
            setProyect(idProyect);
        }
    }
    
    if (isProyectOpen){
        return(
            <div className={isLight ? 'containerProyects' : 'containerProyects containerNight'}
                id='proyects'>
                <ViewProyect proyect={proyect} open={handleProyectWindow}/>
                <div className="topProyects">
                    <div className="titleProyects">
                        <h2>{text[isSpa].proyects.title}</h2>
                    </div>
                    <div className="circle"></div>
                    <div className="line3"></div>
                </div>
                <div className="bottomProyects">
                    <div className="line4"></div>
                </div>
            </div>
        
        )
    }else{
        return(
        <div className={isLight ? 'containerProyects' : 'containerProyects containerNight'}
            id='proyects'>
            <div className="topProyects">
                <div className="titleProyects">
                    <h2>{text[isSpa].proyects.title}</h2>
                </div>
                <div className="circle"></div>
                <div className="line3"></div>
            </div>
            <div className="middleProyects">
                <Proyect title={text[isSpa].proyects.proyectsInfo[1].title}
                        open={handleProyectWindow}
                        id="1"
                        description={text[isSpa].proyects.proyectsInfo[1].shortInfo}
                        linkGit={text[isSpa].proyects.proyectsInfo[1].linkGit}
                        linkLive={text[isSpa].proyects.proyectsInfo[1].linkLive}/>

                <Proyect title={text[isSpa].proyects.proyectsInfo[2].title}
                        open={handleProyectWindow}
                        id="2"
                        description={text[isSpa].proyects.proyectsInfo[2].shortInfo}
                        linkGit={text[isSpa].proyects.proyectsInfo[2].linkGit}
                        linkLive={text[isSpa].proyects.proyectsInfo[2].linkLive}/>

                <Proyect title={text[isSpa].proyects.proyectsInfo[3].title}
                        open={handleProyectWindow}
                        id="3"
                        description={text[isSpa].proyects.proyectsInfo[3].shortInfo}
                        linkGit={text[isSpa].proyects.proyectsInfo[3].linkGit}
                        linkLive={text[isSpa].proyects.proyectsInfo[3].linkLive}/>

                <Proyect title={text[isSpa].proyects.proyectsInfo[4].title}
                        open={handleProyectWindow}
                        id="4"
                        description={text[isSpa].proyects.proyectsInfo[4].shortInfo}
                        linkGit={text[isSpa].proyects.proyectsInfo[4].linkGit}
                        linkLive={text[isSpa].proyects.proyectsInfo[4].linkLive}/>
            </div>
            <div className="middle2Proyects">
            <div className="buttonLink">
                    <a href="https://github.com/juanmzabala"
                    className="buttonLink"
                    target='_blank'>{text[isSpa].proyects.seeMore}</a>
                </div>
            </div>
            <div className="bottomProyects">
                <div className="line4"></div>
            </div>
        </div>

)}}

export default Proyects;