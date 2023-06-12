//Import CSS
import '../stylesheets/contact.css'

//Import Context, State and Effect
import { useRef,useState,useEffect,useContext } from 'react';
import { LightModeContext,LanguageContext } from '../context/ContextProvider';

//Import text from .json
import text from '../assets/text.json'

//Import Components to use
import Language from './Language';
import LightMode from './LightMode';
import BoxSendEmail from './BoxSendEmail';

//Import Complement for send Emails
import emailjs from '@emailjs/browser'

//Import Icons
import { BsArrowUpCircle,BsLinkedin,BsGithub} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";




function Contact(){
    //Define context variables for NightMode and Language State
    const {isLight} = useContext(LightModeContext);
    const {isSpa} = useContext(LanguageContext);


    //Define variable state for Form 
    const [name,setName]=useState("")
    const [message,setMessage] = useState("");
    const [email,setEmail] = useState("");
    const [telephone,setTelephone] = useState("");
    const [send,setSend] = useState(text[isSpa].contact.send);

    //Define state for Modal Window of Error/Sucess notification
    const [notificationEmail,setNotificationEmail]=useState("none");

    //UseState for tick error en Telephone Number
    const [okTelephone,setOkTelephone]=useState("");

    //UseEffect for tick error en Telephone Number
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

    //UseEffect for change Value in Send Button
    useEffect(()=>{
        if(isSpa==="spa"){
            setSend(text[isSpa].contact.send)
        }else{
            setSend(text[isSpa].contact.send)
        }
    },[isSpa])

    //Functions handlers for Form Inputs
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

    //Define UseRef for Send Emails Component
    const form = useRef();

    //Function for handle Email Send
    const sendEmail = (e)=>{
        e.preventDefault()
        
        if(name!="" && message!="" && email!="" && telephone!="" && okTelephone!="wrong"){

            //-----Send the email-----//
            setSend(text[isSpa].contact.sending);
            //Template that recive in my email
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
                //Error for Show error Window
                setNotificationEmail("incomplete");
                setTimeout(()=>{
                    setNotificationEmail("none");
                },6000)
            }
            
    }
    //Function for Handle Modal notifications
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
    //Function for clear inputs values
    const clearEmail = ()=>{
        setName("");
        setEmail("");
        setTelephone("");
        setMessage("");
        setSend(text[isSpa].contact.send);
    };

    //Function for show window of Error/Sucess notification
    const hideBox=()=>{
        setNotificationEmail("none")
    }



    return(
        <div className={isLight ? 'containerContact' : 'containerContact containerNight'}
            id='contact'>
            <BoxSendEmail
                status={notificationEmail}
                hide={hideBox}/>
            <div className="topContact">
            </div>
            <div className="middleContactBox">
                <div className="middleContact">
                    <div className="titleContact">
                        <h2>{text[isSpa].contact.contactTitle}</h2>
                    </div>
                <div className="social">
                            <a href="mailto:juanmzabala@gmail.com"
                            target='_blank'
                            className="containerLinkContact">
                                <HiOutlineMail size="2.4em"/>
                            </a>
                            <a href="https://www.linkedin.com/in/juanmzabala/"
                            target="_blank"
                            className="containerLinkContact">
                                <BsLinkedin size="2.4em"/>
                            </a>
                            <a href="https://github.com/juanmzabala"
                            target="_blank"
                            className="containerLinkContact">
                                <BsGithub size="2.4em"/>
                            </a>
                </div>
                </div>
                <div className="mailBox">
                    <div className='middleBottom'>
                            <div className="titleEscribeme"><h2>{text[isSpa].contact.emailTitle}</h2></div>
                            <form id="formMail" ref={form} onSubmit={sendEmail}>
                                    <label htmlFor="name"
                                            className={isLight ? 'labelContact' : 'labelContact labelContactNight'}>
                                                 {text[isSpa].contact.nameLastName}
                                    </label>
                                    <input  type="text"
                                                placeholder={text[isSpa].contact.placeNameLastName}
                                                name='name'
                                                onChange={handleName}
                                                value={name}/>
                                        <label htmlFor="email"
                                                className={isLight ? 'labelContact' : 'labelContact labelContactNight'}>
                                                    email
                                        </label>
                                        <input  type="email"
                                                placeholder={text[isSpa].contact.placeEmail}
                                                name='email'
                                                onChange={handleEmail}
                                                value={email}/>
                                        <label htmlFor="telephone" 
                                                className={isLight ? 'labelContact' : 'labelContact labelContactNight'}>
                                                    {text[isSpa].contact.telephone}
                                        </label>
                                        <input  type="telephone"
                                                className={`${okTelephone}`}
                                                placeholder='000 000 0000 '
                                                name='telephone'
                                                onChange={handleTelephone}
                                                value={telephone}/>
                                        <label htmlFor="message" 
                                                className={isLight ? 'labelContact' : 'labelContact labelContactNight'}>
                                                    {text[isSpa].contact.message}
                                        </label>
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
                <div className={isLight ? 'upButton' : 'upButton upNight'}>
                    <a href="#hello"> <BsArrowUpCircle size="3.2em"/></a>
                </div>
                <div className="barContent">
                    <div className="barCopy">
                        <p>Juan Zabala © 2023</p> 
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