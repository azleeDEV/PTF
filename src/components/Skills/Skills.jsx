import ExpressImg from "../../assets/express.png";
import Tsx from "../../assets/typescript.png";
import "./Skills.css";

const Skills = () => {
  return (
    <div id="Skills" className="skills-container">
       <h1 className="title">Compétences</h1>
            <div className="Competences-container">
                <div className="content">
                    <h2>Programmation</h2>
                    <p>
                        <i style={{ color: "yellow" }} className="fa-brands fa-js" alt="JavaScript"></i>JavaScript<br />
                        <img src={Tsx} alt="Typescript"/>Typescript<br />
                        <img src="https://icon.icepanel.io/Technology/png-shadow-512/Solidity.png" alt="Solidity"/>Solidity<br />
                    </p>
                </div>
                <div className="content">
                    <h2>FrontEnd</h2>
                    <p>
                        <i style={{ color: "#ff5100" }} className="fa-brands fa-html5" alt="HTML"></i>HTML<br />
                        <i style={{ color: "#0f5298" }} className="fa-brands fa-css3-alt" alt="CSS"></i> CSS<br />
                        <i style={{ color: "#61dbfb" }} className="fa-brands fa-react" alt="ReactJS"></i> ReactJS<br />
                    </p>
                </div>
                <div className="content">
                    <h2>BackEnd</h2>
                    <p>
                        <i style={{ color: "green" }} className="fa-brands fa-node-js" alt="NodeJS"></i>NodeJS<br />
                        <img src={ExpressImg} alt="ExpressJS"/>ExpressJS<br />
                        <img src="https://icon.icepanel.io/Technology/svg/Hardhat.svg" alt="Hardhat"/>Hardhat<br />
                    </p>
                    <p>
                        <i style={{ color: "whitesmoke" }} className="fa-brands fa-github" alt="Github"></i>Github<br />
                        <i style={{ color: "#c20903" }} className="fa-brands fa-square-git" alt="Git"></i>Git<br />
                    </p>
                </div>
            </div>
    </div>
  );
}

export default Skills;