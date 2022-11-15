import './meta-bnb.styles.scss';
import Hero from '../hero/hero.component';
import FeaturedIn from '../featured-in/featured-in.component';
import NFTCards from '../nft-cards/nft-cards.component';
import Discovery from '../discovery/discovery.component';
import ConnectWallet from '../connect-wallet/connect-wallet.component';

const MetaBnb = () => {
  return (
    <div>
      <Hero />
      <FeaturedIn />
      <NFTCards />
      <Discovery />
      <ConnectWallet />
    </div>
  );
};

export default MetaBnb;
