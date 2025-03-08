import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/Robin.webp";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img className="Robin" src={Logo} alt="LogoRobin"/>
          <h1 className="navbar-logo">AZDev</h1>
        </div>
        <div className="menu-desktop">
          <Link to="a-propos" smooth={true} duration={500} className="nav-link" href="#a-propos">À propos</Link>
          <Link to="Projets" smooth={true} duration={500} className="nav-link" href="#Projets">Projets</Link>
          <Link to="Skills" smooth={true} duration={500} className="nav-link" href="#Skills">Compétences</Link>
          <Link to="Contact" smooth={true} duration={500} className="nav-link" href="#Contact">Contact</Link>
        </div>
        <div className="menu-mobile">
          <button className={`menu-button ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} strokeWidth={3}/> : <Menu size={24} strokeWidth={3}/>}
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <Link to="a-propos" smooth={true} duration={500} className="nav-link" href="#a-propos" onClick={() => setIsOpen(!isOpen)}>À propos</Link>
        <Link to="Projets" smooth={true} duration={500} className="nav-link" href="#Projets" onClick={() => setIsOpen(!isOpen)}>Projets</Link>
        <Link to="Skills" smooth={true} duration={500} className="nav-link" href="#Skills" onClick={() => setIsOpen(!isOpen)}>Compétences</Link>
        <Link to="Contact" smooth={true} duration={500} className="nav-link" href="#Contact" onClick={() => setIsOpen(!isOpen)}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;