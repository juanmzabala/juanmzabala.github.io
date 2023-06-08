//Import CSS
import '../stylesheets/boxSendEmail.css'

//Import Context
import { useContext } from 'react';
import {LightModeContext, LanguageContext} from '../context/ContextProvider';

//Import text from .json
import text from '../assets/text.json';

//Import Icons
import { BsFillSendCheckFill,BsFillSendDashFill,BsFillSendExclamationFill,BsFillXCircleFill } from "react-icons/bs";

function BoxSendEmail({status,hide}){

    //Define Context
    const {isLight} = useContext(LightModeContext);
    const {isSpa} = useContext(LanguageContext);

    //If that show/hide Window notification
    if(status==="none"){
        return(
            <div className="containerBoxAlert hide"></div>
        )
    }

    //Email was Send Window
    if(status==="success"){
        return(
            <div className={isLight ? 'containerBoxAlert' : 'containerBoxAlert containerBoxAlertNight'}
                onClick={hide}>
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

    //Email has a Server Error Window
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

    //Email has a error in some part Window
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

    //Email was incomplete Window
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