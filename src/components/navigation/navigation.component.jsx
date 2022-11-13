import './navigation.styles.scss';

import { Link } from 'react-router-dom';

import { ReactComponent as MetaHouseIcon } from '../../assets/meta-house-icon-gradient.svg';
import { ReactComponent as MetaLogo } from '../../assets/metabnb-logo-gradient.svg';

const Navigation = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <Link to="/">
          <div className="icon-logo-container">
            <MetaHouseIcon /> <MetaLogo />
          </div>
        </Link>

        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link className="nav-link">Place to stay</Link>
          <span className="nav-link">NFTs</span>
          <span className="nav-link">Community</span>
        </div>

        <button className=" btn connect-wallet">Connect Wallet</button>
      </nav>
    </div>
  );
};

export default Navigation;
