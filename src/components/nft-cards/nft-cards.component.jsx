import './nft-cards.styles.scss';
import NftImg1 from '../../assets/NFT/nft-1.png';
import NftImg2 from '../../assets/NFT/nft-2.png';
import NftImg3 from '../../assets/NFT/nft-3.png';
import NftImg4 from '../../assets/NFT/nft-4.png';
import NftImg5 from '../../assets/NFT/nft-5.png';
import NftImg6 from '../../assets/NFT/nft-6.png';
import NftImg7 from '../../assets/NFT/nft-7.png';
import NftImg8 from '../../assets/NFT/nft-8.png';
import NftImg9 from '../../assets/NFT/nft-9.png';
import NftImg10 from '../../assets/NFT/nft-10.png';
import NftImg11 from '../../assets/NFT/nft-11.png';
import NftImg12 from '../../assets/NFT/nft-12.png';
import NftImg13 from '../../assets/NFT/nft-13.png';
import NftImg14 from '../../assets/NFT/nft-14.png';
import NftImg15 from '../../assets/NFT/nft-15.png';
import NftImg16 from '../../assets/NFT/nft-16.png';
import { ReactComponent as FiveStarIcon } from '../../assets/NFT/five-star-icon.svg';

const nftImages = [
  NftImg1,
  NftImg2,
  NftImg3,
  NftImg4,
  NftImg5,
  NftImg6,
  NftImg7,
  NftImg8,
];

export const placetostayNftImages = [
  NftImg5,
  NftImg6,
  NftImg7,
  NftImg8,
  NftImg1,
  NftImg2,
  NftImg3,
  NftImg4,
  NftImg9,
  NftImg10,
  NftImg11,
  NftImg12,
  NftImg13,
  NftImg14,
  NftImg15,
  NftImg16,
];

const NFTCards = () => {
  return (
    <div className="container nft-container">
      <div className="nft">
        <h2>Inspiration for your next adventure</h2>

        <div className="cards-container">
          {nftImages.map(img => {
            return (
              <div className="card" key={img}>
                <img src={img} alt="metaverse nft" />
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

export default NFTCards;
