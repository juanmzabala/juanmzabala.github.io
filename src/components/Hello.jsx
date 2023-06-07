import { useContext } from 'react';
import { LightModeContext,LanguageContext } from '../context/ContextProvider';
import text from '../assets/text.json'
import '../stylesheets/hello.css';



function Hello(){
    const {isLight} = useContext(LightModeContext);
    const {isSpa} = useContext(LanguageContext);

    return(
        <div className={isLight ? 'containerHello' : 'containerHello containerNight'} id='hello'>
            <div className="topHello"></div>
            <div className="middleHello">
                <div className="key">
                    <img src="key.svg" alt="keyLogo" />
                </div>
                <div className="text">
                    <div className={isLight ? 'title' : 'title textHelloNight'}>
                        <h1>{text[isSpa].hello.hello}</h1>
                    </div>
                    <div className="block1">
                        <div className={isLight ? 'subtitle' : 'subtitle textHelloNight'}>
                            <p>{text[isSpa].hello.iam} <strong>Juan,</strong></p>
                            <p>{text[isSpa].hello.developer}</p>
                            <p>{text[isSpa].hello.designer}</p>
                        </div>
                        <div className="space">
                            <div className="tab"></div>
                            <div className="line1">
                                <div className="circle1"></div>
                            </div>
                        </div>
                    </div>
                   
                    
                    <div className={isLight ? 'invitation' : 'invitation textHelloNight'}>
                        <p className='short'>{text[isSpa].hello.sub1}</p>
                        <p className='short'> {text[isSpa].hello.sub2}</p>
                        <p className='long'>{text[isSpa].hello.sub}</p>
                    </div>
                </div>
            </div>
            <div className="bottomHello">
                <div className="line2"></div>
            </div>
        </div>
    )
}

export default Hello;