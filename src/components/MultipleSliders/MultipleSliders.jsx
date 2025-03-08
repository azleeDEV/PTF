import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./MultipleSliders.css";

import booki1 from "../../assets/booki1.webp";
import booki2 from "../../assets/booki2.webp";
import booki3 from "../../assets/booki3.webp";
import kasa1 from "../../assets/Kasa1.jpg";
import kasa2 from "../../assets/Kasa2.webp";
import kasa3 from "../../assets/Kasa3.webp";
import Sophi1 from "../../assets/Sophi1.webp";
import Sophi2 from "../../assets/Sophi2.webp";
import Sophi3 from "../../assets/Sophi3.webp";
import Spider1 from "../../assets/Spider1.png";
import wallet2 from "../../assets/envoi.png";
import wallet3 from "../../assets/succenvoi.png";
import wallet4 from "../../assets/retrait.png";
import wallet5 from "../../assets/succretrait.png";
import music1 from "../../assets/music.png";

const Slider = ({ images }) => (
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={30}
    slidesPerView={1}
    watchOverflow={true}
    navigation={images.length > 1}
    pagination={{ clickable: true }}
    loop={images.length > 1}
    className="slider slider-one"
  >
    {images.map((image, index) => (
      <SwiperSlide key={index}>
        <img src={image} alt={`Slide ${index + 1}`} />
      </SwiperSlide>
    ))}
  </Swiper>
);

const projects = [
  {
    title: "🎨 Sophie Bluel | Architecte d'Intérieur",
    tech: "🛠 HTML, CSS, JavaScript",
    desc: "➡️ Un portfolio immersif mettant en avant des créations élégantes",
    images: [Sophi1, Sophi2, Sophi3],
  },
  {
    title: "🏡 Kasa | App Web Location Immobilier",
    tech: "⚛️ ReactJS",
    desc: "➡️ Une plateforme moderne pour la location de logements",
    images: [kasa1, kasa2, kasa3],
  },
  {
    title: "🏖 Booki | Site de Location de Vacances",
    tech: "🛠 HTML, CSS",
    desc: "➡️ Facilite la recherche d’hébergements et d’activités",
    images: [booki1, booki2, booki3],
  },
  {
    title: "🧮 SpiderCAL | Calculatrice Web",
    tech: "🛠 HTML, CSS, JavaScript",
    desc: "➡️ Une calculatrice simple et ergonomique",
    images: [Spider1],
  },
  {
    title: "🎵 AZMusic | Application de Musique",
    tech: "🛠 HTML, CSS, JavaScript",
    desc: "➡️ Un lecteur de musique interactif et responsive",
    images: [music1],
  },
  {
    title: "🔗 EthWallet | Portefeuille Crypto ETH",
    tech: "🛠 Solidity, Hardhat, EtherJS, ReactJS, MetaMask",
    desc: "➡️ Un wallet sécurisé pour Ethereum avec MetaMask",
    images: [wallet2, wallet3, wallet4, wallet5],
  },
];

const MultipleSliders = () => (
  <div className="multiple-sliders">
    {projects.map((project, index) => (
      <div className="slider-container" key={index}>
        <Slider images={project.images} />
        <div className="caption">
          <h3>{project.title}</h3>
          <p>{project.tech}</p>
          <p>{project.desc}</p>
        </div>
      </div>
    ))}
  </div>
);

export default MultipleSliders;
