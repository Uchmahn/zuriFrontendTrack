import './featured-in.styles.scss';
import { ReactComponent as MbTokenLogo } from '../../assets/mbtoken-logo.svg';
import { ReactComponent as MetamaskLogo } from '../../assets/metamask-logo.svg';
import { ReactComponent as OpenSeaLogo } from '../../assets/opensea-logo.svg';

const FeaturedIn = () => {
  return (
    <div className="container featured-in-container">
      <div className="featured-in">
        <MbTokenLogo className="featured-logos" />
        <MetamaskLogo className="featured-logos" />
        <OpenSeaLogo className="featured-logos" />
      </div>
    </div>
  );
};

export default FeaturedIn;
