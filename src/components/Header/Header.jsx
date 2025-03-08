import Logo from '../../assets/Robin.webp';
import './Header.css';

const Header = () => {
  return (
    <div id="a-propos" className="header-wrapper">
      <div className="a-propos-container">
          <p><span className="span-p">Salut, moi c’est AZ !</span><br/>
          Développeur informatique passionné,<br/> 
          je conçois des interfaces web dynamiques et optimisées, 
          avec une attention particulière à l’expérience utilisateur, 
          je développe aussi bien pour le web que pour la blockchain, 
          en alliant performance, esthétique et code soigné.</p>
          <img src={Logo} alt="header" />
      </div>
      <div className="tags-wrapper">
        <ul className="tags">
          <li><button>Développeur 💻</button></li>
          <li><button>SEO 🔍</button></li>
          <li><button>Web & Blockchain 🌐🔗</button></li>
          <li><button>Expérience Utilisateur & Performance ⚡📱</button></li>
          <li><button>Smart Contracts & Web3 🔒🚀</button></li>
        </ul>
      </div>  
    </div>
  )
}

export default Header;
