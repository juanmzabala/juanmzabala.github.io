
import { useState,useContext } from "react";
import text from '../assets/text.json';
import { LightModeContext,LanguageContext } from "../context/ContextProvider"; 
import { ImMenu } from "react-icons/im";
import { CgCloseO } from "react-icons/cg";
import { BsGithub,BsLinkedin } from "react-icons/bs";
import '../stylesheets/NavBar.css';

function NavBar (){
    const {isLight} = useContext(LightModeContext);
    const {isSpa}= useContext(LanguageContext);
    const [modalOpen,setModalOpen]=useState(false);

    const handleModal = ()=>{
        modalOpen?setModalOpen(false):setModalOpen(true);
    }
    if (modalOpen===true){
        return(
            <nav className="navBar">
                <div className="mobile">
                    <div className="logo">
                        <a href="#hello" onClick={handleModal}>
                        <img src={isLight ? "bigLogoJuanZabala.svg" : "bigLogoJuanZabalaWhite.svg"} alt="logo" />
                        </a>
                    </div>
                    <div className="options" onClick={handleModal}>
                        <ImMenu size="2em"/>
                    </div>
                    <div className={isLight ? 'modalOpen' : 'modalOpen modalOpenNight'}>
                        <div className="logoModal">
                            <a href="#hello" onClick={handleModal}>
                            <img src={isLight ? "bigLogoJuanZabala.svg" : "bigLogoJuanZabalaWhite.svg"} alt="logo" />
                            </a>
                        </div>
                        <div className="linksPage">
                            <a href="#proyects" className="linksModal" onClick={handleModal}>{text[isSpa].navBar.proyects}</a>
                            <a href="#about"className="linksModal" onClick={handleModal}>{text[isSpa].navBar.about}</a>
                            <a href="#contact"className="linksModal" onClick={handleModal}>{text[isSpa].navBar.contact}</a>
                        </div>
                        <div className="externalLinks">
                            <div>
                                <a href="https://www.linkedin.com/in/juanmzabala/"
                                target="_blank"
                                className="containerLink"><BsLinkedin size="2.2em"/></a>
                            </div>
                            <div>
                                <a href="https://github.com/juanmzabala"
                                target="_blank"
                                className="containerLink"><BsGithub size="2.2em"/></a>
                            </div>
                        </div>
                        <div className={isLight ? 'exit' : 'exit exitNight'}>
                            <button type="button" onClick={handleModal}><CgCloseO size="4em"/></button>
                        </div>   
                    </div>
                </div>
                <div className={isLight ? 'desktop' : 'desktop backgroundBarNight'}>
                    <div className="logoDesktop">
                                <a href="#hello">
                                <img src={isLight ? "bigLogoJuanZabala.svg" : "bigLogoJuanZabalaWhite.svg"}  alt="logo" />
                                </a>
                    </div>
                    <div className="linksPageDesktop">
                            <a href="#proyects" className={isLight ? 'linksDesktop' : 'linksDesktop textBarNight'} >{text[isSpa].navBar.proyects}</a>
                            <a href="#about"className={isLight ? 'linksDesktop' : 'linksDesktop textBarNight'} >{text[isSpa].navBar.about}</a>
                            <a href="#contact"className={isLight ? 'linksDesktop' : 'linksDesktop textBarNight'}>{text[isSpa].navBar.contact}</a>
                    </div>
                    <div className="externalLinksDesktop">
                            <div>
                                <a href="https://www.linkedin.com/in/juanmzabala/"
                                target="_blank"
                                className="containerLinkDesktop"><BsLinkedin size="2em"/></a>
                            </div>
                            <div>
                                <a href="https://github.com/juanmzabala"
                                target="_blank"
                                className="containerLinkDesktop"><BsGithub size="2em"/></a>
                            </div>
                        </div>
                </div>
                
            </nav>
        )
    }else{
        return(
            <nav className="navBar">
                <div className={isLight ? 'mobile' : 'mobile backgroundBarNight'}>
                    <a href="#hello" className="logo">
                        <img src={isLight ? "bigLogoJuanZabala.svg" : "bigLogoJuanZabalaWhite.svg"}  alt="logo" />
                    </a>
                    <div className={isLight ? 'options' : 'options optionsNight'} onClick={handleModal}>
                        <ImMenu size="2em"/>
                    </div>
                </div>
                <div className={isLight ? 'desktop' : 'desktop backgroundBarNight'}>
                    <div className="logoDesktop">
                                <a href="#hello">
                                <img src={isLight ? "bigLogoJuanZabala.svg" : "bigLogoJuanZabalaWhite.svg"}  alt="logo" />
                                </a>
                    </div>
                    <div className="linksPageDesktop">
                            <a href="#proyects" className={isLight ? 'linksDesktop' : 'linksDesktop textBarNight'} >{text[isSpa].navBar.proyects}</a>
                            <a href="#about"className={isLight ? 'linksDesktop' : 'linksDesktop textBarNight'} >{text[isSpa].navBar.about}</a>
                            <a href="#contact"className={isLight ? 'linksDesktop' : 'linksDesktop textBarNight'}>{text[isSpa].navBar.contact}</a>
                    </div>
                    <div className="externalLinksDesktop">
                            <div>
                                <a href="https://www.linkedin.com/in/juanmzabala/"
                                target="_blank"
                                className="containerLinkDesktop"><BsLinkedin size="2em"/></a>
                            </div>
                            <div>
                                <a href="https://github.com/juanmzabala"
                                target="_blank"
                                className="containerLinkDesktop"><BsGithub size="2em"/></a>
                            </div>
                        </div>
                </div>
                
            </nav>
        )
    }
    
}


export default NavBar;