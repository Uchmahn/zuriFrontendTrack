import linkInfo from '../../json-files/links.json';
import './links.styles.scss';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <div className="links-container">
      {linkInfo.map(({ href, text, id, subtext }) => (
        <a
          href={href}
          key={id}
          target="_blank"
          rel="noreferrer"
          className="btn"
          id={id}
          title={subtext}
        >
          {text}
        </a>
      ))}

      <Link
        to="contact"
        key="contact"
        rel="noreferrer"
        className="btn"
        id="contact"
        title="Contact us now"
      >
        Contact Me
      </Link>
    </div>
  );
};
export default Links;
