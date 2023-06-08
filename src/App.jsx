import './App.css'
import { ContextProvider } from './context/ContextProvider';
import NavBar from './components/Navbar';
import Hello from './components/Hello';
import About from './components/About';
import Proyects from './components/Proyects';
import Contact from './components/Contact';
function App() {
 
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
