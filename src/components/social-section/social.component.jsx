import './social.styles.scss';

const Icons = () => {
  return (
    <div className="social-section">
      <a
        href="https://app.slack.com/client/T042F7V19Q8/C041EKJTF9V/rimeto_profile/U048KUV6AGK"
        target="_blank"
        rel="noreferrer"
      >
        <div className="icon slack-icon">
          <div className="blue small"></div>
          <div className="blue big"></div>
          <div className="green small"></div>
          <div className="green big"></div>
          <div className="red small"></div>
          <div className="red big"></div>
          <div className="yellow small"></div>
          <div className="yellow big"></div>
        </div>
      </a>

      <a href="https://github.com/Uchmahn/" target="_blank" rel="noreferrer">
        <div className="icon github-icon">
          <ion-icon name="logo-github"></ion-icon>
        </div>
      </a>
    </div>
  );
};

export default Icons;
