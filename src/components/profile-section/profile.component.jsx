import './profile.styles.scss';
import Image from './ucheZuri.png';

const ProfileSection = () => {
  return (
    <div className="profile-section">
      <div className="profile-photo">
        <img src={Image} alt="profile" id="profile_img" />
        <div className="picture-overlay">
          <ion-icon name="camera-outline"></ion-icon>
        </div>
      </div>
      <div className="twitter">
        <span className="twitter-username" id="twitter">
          AzubuineU
        </span>
      </div>

      <div id="slack">
        MemberID: HNG004441JGE Display Name: uchechukwuazubuine
      </div>

      <div className="share-icon query">
        <ion-icon name="arrow-redo-outline"></ion-icon>
      </div>
      <div className="share-icon query2">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
};

export default ProfileSection;
