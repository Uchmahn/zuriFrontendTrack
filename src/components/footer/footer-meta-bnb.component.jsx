import FooterDetails from '../../json-files/footer-details.json';

import './footer-meta-bnb.styles.scss';
import { Outlet } from 'react-router-dom';

import { ReactComponent as MetaLogo } from '../../assets/metabnb-logo.svg';
import Navigation from '../navigation/navigation.component';

const FooterMeta = () => {
  const copyright = String.fromCodePoint(0x00a9);

  return (
    <div className="app-container">
      <Navigation />
      <Outlet />
      <footer className="container footer-meta-container">
        <div className="footer-meta">
          <div className="footer-meta-item logo-col">
            <MetaLogo />

            <div className="social-copyright--container">
              <div className="social-container">
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="logo-instagram"></ion-icon>
                <ion-icon name="logo-twitter"></ion-icon>
              </div>

              <span className="copyright"> {`${copyright} 2022 Metabnb`}</span>
            </div>
          </div>
          <div
            className="footer-meta-item additional-info-col"
            id="additional-info-col"
          >
            {FooterDetails.map(
              ({
                heading,
                headingcl,
                textOne,
                textTwo,
                textThree,
                textFour,
              }) => (
                <div className={`${headingcl}`} key={headingcl}>
                  <span className="heading">{heading}</span>
                  <span className="link-text">{textOne}</span>
                  <span className="link-text">{textTwo}</span>
                  <span className="link-text">{textThree}</span>
                  <span className="link-text">{textFour}</span>
                </div>
              )
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterMeta;
