import './place-to-stay.styles.scss';
import { ReactComponent as LocationFilter } from '../../assets/location-filter-icon.svg';
import { placetostayNftImages } from '../../components/nft-cards/nft-cards.component';
import { ReactComponent as FiveStarIcon } from '../../assets/NFT/five-star-icon.svg';

const PlaceToStay = () => {
  return (
    <div className="container place-to-stay--container">
      <div className="place-to-stay">
        <div className="category-bar">
          <span className="category-text">Restaurant</span>
          <span className="category-text">Cottage</span>
          <span className="category-text">Castle</span>
          <span className="category-text">fantastic city</span>
          <span className="category-text">beach</span>
          <span className="category-text">Carbins</span>
          <span className="category-text">Off-grid</span>
          <span className="category-text">Farm</span>
          <div className="location-box">
            <span>Location</span>
            <LocationFilter className="location-icon" />
          </div>
        </div>
        <div className="cards-container">
          {placetostayNftImages.map(img => {
            return (
              <div className="card" key={img}>
                <img src={img} alt="metaverse nft " />
                <div className="card-details-box">
                  <div className="section">
                    <p className="nft-name">Desert king</p>
                    <p className="distance">2345km away</p>
                    <FiveStarIcon />
                  </div>
                  <div className="section section--2">
                    <strong className="price">1MBT per night</strong>
                    <p className="vacancy">available for 2weeks stay</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlaceToStay;
