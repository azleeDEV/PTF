import Logo from '../../assets/Robin.webp';
import './Header.css';

const Header = () => {
  return (
    <div id="a-propos" className="header-wrapper">
      <div className="a-propos-container">
          <p><span className="span-p">Salut, moi c’est AZ !</span><br/>
          Développeur passionné, 
          je crée des interfaces web et blockchain dynamiques, 
          performantes et optimisées. Mon objectif ? 
          Offrir une expérience utilisateur fluide et intuitive en alliant design, 
          performance et code de qualité.</p>
          <img src={Logo} alt="header" />
      </div>
      <div className="tags-wrapper">
        <ul className="tags">
          <li><button>Développeur 💻</button></li>
          <li><button>Web & Blockchain 🌐🔗</button></li>
          <li><button>Smart Contracts & Web3 🔒🚀</button></li>
          <li><button>Expérience Utilisateur & Performance ⚡📱</button></li>
          <li><button>SEO 🔍</button></li>
        </ul>
      </div>  
    </div>
  )
}

export default Header;
