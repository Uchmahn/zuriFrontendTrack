import './navigation.styles.scss';

import { Link } from 'react-router-dom';

import { ReactComponent as MetaLogo } from '../../assets/metabnb-logo-gradient.svg';
const removeHandler = () => {
  if (document.querySelector('.header').classList.contains('nav-open')) {
    document.querySelector('.header').classList.remove('nav-open');
  }
};

export const toggleModalHandler = () => {
  removeHandler();
  document.querySelector('.overlay').classList.toggle('hidden');
  document
    .querySelector('.add-connect-wallet-window')
    .classList.toggle('hidden');
};

const Navigation = () => {
  const toggleHandler = () => {
    document.querySelector('.header').classList.toggle('nav-open');
  };

  return (
    <div className="container nav-container">
      <header className="header ">
        <Link to="/">
          <MetaLogo />
        </Link>

        <nav className="nav">
          <div className="nav-links">
            <Link to="/" className="nav-link" onClick={removeHandler}>
              Home
            </Link>
            <Link
              to="place-to-stay"
              className="nav-link"
              onClick={removeHandler}
            >
              Place to stay
            </Link>
            <span className="nav-link" onClick={removeHandler}>
              NFTs
            </span>
            <span className="nav-link" onClick={removeHandler}>
              Community
            </span>
          </div>

          <button className="btn connect-wallet" onClick={toggleModalHandler}>
            Connect Wallet
          </button>
        </nav>
        <button className="btn-mobile-nav" onClick={toggleHandler}>
          <ion-icon name="menu-outline"></ion-icon>
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </header>
    </div>
  );
};

export default Navigation;
