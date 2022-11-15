import './hero.styles.scss';
import HeroImage from '../../assets/hero-group.png';

const Hero = () => {
  return (
    <div className="container hero-container">
      <div className="hero">
        <div className="hero-details">
          <h1>
            Rent a <span>Place</span> away from <span>Home</span> in the{' '}
            <span>Metaverse</span>
          </h1>
          <p className="hero-description">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="search">
            <input type="text" placeholder="Search Location" />
            <button className="btn search-button">Search</button>
          </div>
        </div>
        <div className="hero-photos-container">
          <img src={HeroImage} className="hero-photo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
