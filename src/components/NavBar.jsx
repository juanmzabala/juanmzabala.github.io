import { ImMenu } from "react-icons/im";
import '../stylesheets/NavBar.css';
function NavBar (){
    return(
        <nav className="navBar">
            <div className="mobile">
                <div className="logo">
                    <img src="bigLogoJuanZabala.svg" alt="logo" />
                </div>
                <div className="options">
                    <ImMenu size="2em"/>
                </div>
            </div>
            <div className="desktop">

            </div>
            
        </nav>
    )
}


export default NavBar;