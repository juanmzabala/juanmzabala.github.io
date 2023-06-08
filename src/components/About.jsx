//Import CSS
import '../stylesheets/about.css'

//Import Context
import { useContext } from 'react';
import { LightModeContext,LanguageContext } from '../context/ContextProvider';

//Import text from .json
import text from '../assets/text.json'

function About(){
    //Define context LightMode
    const {isLight} = useContext(LightModeContext);
    const {isSpa} = useContext(LanguageContext);

 isLight? "containerAbout" :  "containerAbout containerNight"
    return(
        <div className= {isLight? "containerAbout" :  "containerAbout containerNight"} id='about'>
            <div className="topAbout">
                <div className="line5"></div>
            </div>
            <div className="middleAbout">
                <div className="photoAbout">
                    <img src="https://avatars.githubusercontent.com/u/124633559?s=400&u=afbd951320ca772f894c572acf7077c764768a06&v=4" alt="Foto Juan Zabala" />
                </div>
                <div className="textAbout">
                    <p className={isLight?'soy': 'soy textContactNight'}>{text[isSpa].about.iam}</p>
                    <p className={isLight?'juanZabala': 'juanZabala textContactNight'}>Juan Zabala</p>
                    <p className=
                        {isLight?'subtitleOcupation subtitle1': 'subtitleOcupation subtitle1 textContactNight'}>
                            {text[isSpa].about.sub1}
                    </p>
                    <p className=
                        {isLight?'subtitleOcupation subtitle2': 'subtitleOcupation subtitle2 textContactNight'}>
                            {text[isSpa].about.sub2}
                    </p>
                </div>
                <div className="descriptionAbout">
                    <div className="key1">
                        <img src="key.svg" alt="keyLogo" />
                    </div>
                    <div className={isLight?'textDescription': 'textDescription textContactNight'}>
                        <p>“{text[isSpa].about.description}”</p>
                    </div>
                    <div className="key2">
                        <img src="keyRight.svg" alt="keyLogo" />
                    </div>
                </div>
                <div className={isLight?'technologies': 'technologies textContactNight'}>
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