import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Projets from "./components/Projets/Projets";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import './App.css'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Header/>
      <Projets/>
      <Skills/>
      <Contact/>  
      <Footer/>
    </div>
  )
}

export default App;
