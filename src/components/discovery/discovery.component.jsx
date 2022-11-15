import './discovery.styles.scss';
import DiscoveryPhoto from '../../assets/discovery-photo.png';

const Discovery = () => {
  return (
    <div className="container discovery-container">
      <div className="discovery">
        <div className="discovery-details">
          <h3 className="discovery-heading">Metabnb NFTs</h3>
          <p className="discovery-text">
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button className="btn learn-more">Learn more</button>
        </div>
        <img
          src={DiscoveryPhoto}
          alt="discovery photos of metaverse NFTs"
          className="discovery-photo"
        />
      </div>
    </div>
  );
};

export default Discovery;
