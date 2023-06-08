//Import Components for Context and State
import { createContext,useState } from "react";

//Create Context
export const LightModeContext = createContext();
export const LanguageContext = createContext();

//Component for Context Provider
export function ContextProvider (props){
    const [isSpa,setIsSpa] = useState("spa");
    const languageState = {isSpa,setIsSpa};


    const [isLight,setIsLight] = useState(true);
    const lightModeState = {isLight,setIsLight};
    
    return(
        <LightModeContext.Provider value={lightModeState}>
            <LanguageContext.Provider value={languageState}>
                {props.children}
            </LanguageContext.Provider>
        </LightModeContext.Provider>
    );
}
