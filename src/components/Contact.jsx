import { useRef,useState,useEffect,useContext } from 'react';
import { LightModeContext,LanguageContext } from '../context/ContextProvider';
import text from '../assets/text.json'
import Language from './Language';
import LightMode from './LightMode';
import emailjs from '@emailjs/browser'
import '../stylesheets/contact.css'
import { BsArrowUpCircle,BsLinkedin,BsGithub} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";


import BoxSendEmail from './BoxSendEmail';

function Contact(){
    //Define context variables for lightMode State
    const {isLight} = useContext(LightModeContext);
    const {isSpa} = useContext(LanguageContext);


    //Define variable state for form 
    const [name,setName]=useState("")
    const [message,setMessage] = useState("");
    const [email,setEmail] = useState("");
    const [telephone,setTelephone] = useState("");
    const [send,setSend] = useState(text[isSpa].contact.send);
    const [notificationEmail,setNotificationEmail]=useState("none");
    const [okTelephone,setOkTelephone]=useState("");

    useEffect(()=>{
        if(telephone!==""){
            if(isNaN(Number(telephone))){
                setOkTelephone("wrong");
            }else{
                setOkTelephone("");
            }
        }else{
            setOkTelephone("");
        } 
    },[telephone]);
    useEffect(()=>{
        if(isSpa==="spa"){
            setSend(text[isSpa].contact.send)
        }else{
            setSend(text[isSpa].contact.send)
        }
    },[isSpa])


    const handleName = (e)=>{
        setName(e.target.value);
        console.log(name);
    }
    const handleMessage = (e)=>{
        setMessage (e.target.value);
        console.log(message);
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value);
        console.log(email);
    }
    const handleTelephone = (e)=>{
        setTelephone(e.target.value);
        console.log(telephone)
    }

    const form = useRef();
    const sendEmail = (e)=>{
        e.preventDefault()
        
        if(name!="" && message!="" && email!="" && telephone!="" && okTelephone!="wrong"){
            /*const result = {status:200}
            setSend("enviando...");
            setTimeout(()=>{
                handleEmailNotification(result);
            },2500);*/
            //-----Envia el email-----//
            setSend(text[isSpa].contact.sending);
             emailjs.send("service_83wih1i","template_qu3dpi8",{
                from_name: name,
                message: `${name} ha dejado un mensaje: 
                ${message}
                Su teléfono es: ${telephone}
                Su correo es: ${email}
                Contactese a la brevedad`,
                reply_to: email,
                },"DN2hFJShlbRqJtTGv")
                .then((result)=>{
                    handleEmailNotification(result);
                    console.log(result);
                },(error)=>{
                    handleEmailNotification(error);
                    console.log(error);
                });

            }else{
                setNotificationEmail("incomplete");
                setTimeout(()=>{
                    setNotificationEmail("none");
                },6000)
            }
            
    }

    const handleEmailNotification = (result)=>{
        if(result.status===200){
            setNotificationEmail("success");
            clearEmail();
        }
        if(result.status===400){
            setNotificationEmail("error");
            setSend(text[isSpa].contact.send);
        }
        if(result.status===500){
            setNotificationEmail("serverError");
            setSend(text[isSpa].contact.send);
        }

        setTimeout(()=>{
            setNotificationEmail("none");
        },3000)
    }
    const clearEmail = ()=>{
        setName("");
        setEmail("");
        setTelephone("");
        setMessage("");
        setSend(text[isSpa].contact.send);
        
    };
    const hideBox=()=>{
        setNotificationEmail("none")
    }



    return(
        <div className={isLight ? 'containerContact' : 'containerContact containerNight'} id='contact'>
            <BoxSendEmail status={notificationEmail} hide={hideBox}/>
            <div className="topContact">
            </div>
            <div className="middleContactBox">
                <div className="middleContact">
                    <div className="titleContact"><h2>{text[isSpa].contact.contactTitle}</h2></div>
                    <div className="social">
                        <div>
                            <a href="mailto:juanmzabala@gmail.com"
                            target='_blank'
                            className="containerLinkContact"><HiOutlineMail size="2.4em"/></a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/juanmzabala/"
                            target="_blank"
                            className="containerLinkContact"><BsLinkedin size="2.4em"/></a>
                        </div>
                        <div>
                            <a href="https://github.com/juanmzabala"
                            target="_blank"
                            className="containerLinkContact"><BsGithub size="2.4em"/></a>
                        </div>
                    </div>
                </div>
                <div className="mailBox">
                    <div className='middleBottom'>
                            <div className="titleEscribeme"><h2>{text[isSpa].contact.emailTitle}</h2></div>
                            <form id="formMail" ref={form} onSubmit={sendEmail}>
                                    <label htmlFor="name" className={isLight ? 'labelContact' : 'labelContact labelContactNight'}>{text[isSpa].contact.nameLastName}</label>
                                    <input  type="text"
                                                placeholder={text[isSpa].contact.placeNameLastName}
                                                name='name'
                                                onChange={handleName}
                                                value={name}/>
                                        <label htmlFor="email" className={isLight ? 'labelContact' : 'labelContact labelContactNight'}>email</label>
                                        <input  type="email"
                                                placeholder={text[isSpa].contact.placeEmail}
                                                name='email'
                                                onChange={handleEmail}
                                                value={email}/>
                                        <label htmlFor="telephone" className={isLight ? 'labelContact' : 'labelContact labelContactNight'}>{text[isSpa].contact.telephone}</label>
                                        <input  type="telephone"
                                                className={`${okTelephone}`}
                                                placeholder='000 000 0000 '
                                                name='telephone'
                                                onChange={handleTelephone}
                                                value={telephone}/>
                                        <label htmlFor="message" className={isLight ? 'labelContact' : 'labelContact labelContactNight'}>{text[isSpa].contact.message}</label>
                                        <textarea  type="text"
                                                placeholder={text[isSpa].contact.placeMessage}
                                                name='message'
                                                onChange={handleMessage}
                                                value={message}/>
                                        <div className="containerSend">
                                            <button type="submit" 
                                                    className='sendButton'>
                                                        {send}
                                            </button>
                                        </div>
                                    
                            </form>    
                    </div>
                    <div className="key5">
                        <img src="keyRight.svg" alt="keyLogo" />
                    </div>
                </div>
            </div>
            
            <div className="bottomContact">
                <div className={isLight ? 'upButton' : 'upButton upNight'}><a href="#hello"> <BsArrowUpCircle size="3.2em"/></a></div>
                <div className="barContent">
                    <div className="barCopy">
                        Juan Zabala © 2023
                    </div>
                    <div className="optionsConfig">
                        <div className="language">
                            <Language/>
                        </div>
                        <div className="lightMode">
                            <LightMode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact;