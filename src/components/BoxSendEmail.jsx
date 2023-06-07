import '../stylesheets/boxSendEmail.css'
import { useContext } from 'react';
import text from '../assets/text.json'
import {LightModeContext, LanguageContext} from '../context/ContextProvider'
import { BsFillSendCheckFill,BsFillSendDashFill,BsFillSendExclamationFill,BsFillXCircleFill } from "react-icons/bs";

function BoxSendEmail({status,hide}){
    const {isLight} = useContext(LightModeContext);
    const {isSpa} = useContext(LanguageContext);

    if(status==="none"){
        return(
            <div className="containerBoxAlert hide"></div>
        )
    }
    if(status==="success"){
        return(
            <div className={isLight ? 'containerBoxAlert' : 'containerBoxAlert containerBoxAlertNight'}onClick={hide}>
                <div className="boxAlert success" >
                    <div className="iconAlert">
                        <BsFillSendCheckFill color="#fff" size="5em"/>
                    </div>
                    <div className="textAlert">
                        <p className='textWhite'>{text[isSpa].contact.sendOk}</p>
                    </div>
                </div>
                
            </div>
        )
    }
    if(status==="serverError"){
        return(
            <div className={isLight ? 'containerBoxAlert' : 'containerBoxAlert containerBoxAlertNight'}>
                <div className="boxAlert serverError" onClick={hide}>
                    <div className="iconAlert">
                        <BsFillSendDashFill color="#000" size="5em"/>
                    </div>
                    <div className="textAlert">
                        <p>{text[isSpa].contact.serverError[1]}</p>
                        <p>{text[isSpa].contact.serverError[2]}</p>
                    </div>
                </div>
                
            </div>
        )
    }
    if(status==="error"){
        return(
            <div className={isLight ? 'containerBoxAlert' : 'containerBoxAlert containerBoxAlertNight'}>
                <div className="boxAlert error" onClick={hide}>
                    <div className="iconAlert">
                        <BsFillSendExclamationFill color="#fff" size="5em"/>
                    </div>
                    <div className="textAlert">
                        <p className='textWhite'>{text[isSpa].contact.error[1]}</p>
                        <p className='textWhite'>{text[isSpa].contact.error[2]}</p>
                    </div>
                </div>
                
            </div>
        )
    }

    if(status==="incomplete"){
        return(
            <div className={isLight ? 'containerBoxAlert' : 'containerBoxAlert containerBoxAlertNight'}>
                <div className="boxAlert error" onClick={hide}>
                    <div className="iconAlert">
                        <BsFillXCircleFill color="#fff" size="5em"/>
                    </div>
                    <div className="textAlert">
                        <p className='textWhite'>{text[isSpa].contact.incomplete[1]}</p>
                        <p className='textWhite'>{text[isSpa].contact.incomplete[2]}</p>
                    </div>
                </div>
                
            </div>
        )
    }
    
};

export default BoxSendEmail;