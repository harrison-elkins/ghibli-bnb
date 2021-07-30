import image from "../../assets/chihiro-hero.jpeg";
import "./Hero.scss";

function Hero() {
  return (
    <main className="hero">
      <img className="hero__image" src={image}></img>
    </main>
  );
}

export default Hero;
