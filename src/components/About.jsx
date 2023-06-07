import '../stylesheets/about.css'
import { useContext,useState,useEffect } from 'react';
import { LightModeContext,LanguageContext } from '../context/ContextProvider';
import text from '../assets/text.json'

function About(){
    //Define context LightMode
    const {isLight} = useContext(LightModeContext);
    const [light,setLight] = useState("");
    const {isSpa} = useContext(LanguageContext);

    useEffect(()=>{
       isLight? setLight("") : setLight("Night");
    },[isLight])

    return(
        <div className= {`containerAbout container${light}`} id='about'>
            <div className="topAbout">
                <div className="line5"></div>
            </div>
            <div className="middleAbout">
                <div className="photoAbout">
                    <img src="https://avatars.githubusercontent.com/u/124633559?s=400&u=afbd951320ca772f894c572acf7077c764768a06&v=4" alt="Foto Juan Zabala" />
                </div>
                <div className="textAbout">
                    <p className={isLight?'soy': `soy textContact${light}`}>{text[isSpa].about.iam}</p>
                    <p className={isLight?'juanZabala': `juanZabala textContact${light}`}>Juan Zabala</p>
                    <p className={isLight?'subtitleOcupation subtitle1': `subtitleOcupation subtitle1 textContact${light}`}>Full Stack Developer and</p>
                    <p className={isLight?'subtitleOcupation subtitle2': `subtitleOcupation subtitle2 textContact${light}`}>Graphic Designer Freelancer</p>
                </div>
                <div className="descriptionAbout">
                    <div className="key1">
                        <img src="key.svg" alt="keyLogo" />
                    </div>
                    <div className={isLight?'textDescription': `textDescription textContact${light}`}>
                        <p>“{text[isSpa].about.description}”</p>
                    </div>
                    <div className="key2">
                        <img src="keyRight.svg" alt="keyLogo" />
                    </div>
                </div>
                <div className={isLight?'technologies': `technologies textContact${light}`}>
                    <h3>{text[isSpa].about.technologies}</h3>
                    <p>HTML / CSS / Javascript / ReactJS / NodeJS / Express / PHP/ MongoDB / MySQL / Git / Github / Figma / Adobe XD / Visual Studio Code / Photoshop / Illustrator / Indesign / Premiere Pro / Lightroom / Avid Media Composer</p>
                </div>
            </div>
            <div className="bottomAbout">

            </div>
        </div>
    )
}

export default About;