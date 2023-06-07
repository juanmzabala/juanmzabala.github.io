import './App.css'
import { ContextProvider } from './context/ContextProvider';
import NavBar from './components/Navbar';
import Hello from './components/Hello';
import About from './components/About';
import Proyects from './components/Proyects';
import Contact from './components/Contact';
function App() {
  let language = navigator.language || navigator.userLanguage;
  if(language.includes("es")){
    console.log("Español");
  }else{
    console.log("Ke?");
  }
  console.log(language);
  return (
    <div className='appContainer'>
    <ContextProvider>
      <NavBar/>
          <Hello/>
          <Proyects/>
          <About/>
          <Contact/>
      </ContextProvider>
    </div>
  )
}

export default App;
