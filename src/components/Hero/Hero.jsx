import image from "../../assets/chihiro-hero.jpeg";
import "./Hero.scss";

function Hero() {
  return (
    <main className="hero">
      <div className="hero__itin">
        <div className="hero__itin-container">
          <p className="hero__itin-title">Location</p>
          <p className="hero__itin-text">Where are you going?</p>
        </div>
        <div className="hero__itin-divider"></div>
        <div className="hero__itin-container">
          <p className="hero__itin-title">Check in</p>
          <p className="hero__itin-text">Where are you going?</p>
        </div>
        <div className="hero__itin-divider"></div>
        <div className="hero__itin-container">
          <p className="hero__itin-title">Check out</p>
          <p className="hero__itin-text">Add dates</p>
        </div>
        <div className="hero__itin-divider"></div>
        <div className="hero__itin-container">
          <p className="hero__itin-title">Guests</p>
          <p className="hero__itin-text">Add Guests</p>
        </div>
        <div className="hero__itin-divider"></div>
        <div className="hero__itin-container">
          <div className="hero__itin-search"></div>
        </div>
      </div>
      <div className="hero__title-wrapper">
        <div className="hero__title-container">
          <h1 className="hero__title">Magic and Adventure Await You</h1>
          <div className="hero__cta">
            <p className="hero__cta-text">Explore Now</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
