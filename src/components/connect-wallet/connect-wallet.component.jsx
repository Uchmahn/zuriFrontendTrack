import './connect-wallet.styles.scss';
import { ReactComponent as MetaMaskWallet } from '../../assets/metamask.svg';
import WalletConnect from '../../assets/walletconnect.png';
import { toggleModalHandler } from '../navigation/navigation.component';

const ConnectWallet = () => {
  return (
    <div className="connect-wallet-container">
      <div className="overlay hidden" onClick={toggleModalHandler}></div>
      <div className="add-connect-wallet-window hidden">
        <div className="header">
          <h3 className="heading">Connect Wallet</h3>
          <button className="btn--close-modal" onClick={toggleModalHandler}>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <div className="preferred-wallet">
          <span className="sub-heading">Choose your preferred wallet:</span>
          <div className="metamask">
            <MetaMaskWallet />
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
          <div className="wallet-connect">
            <img src={WalletConnect} alt="wallet connect logo" />
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
