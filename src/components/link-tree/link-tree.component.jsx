import Links from '../links/links.component';
import ProfileSection from '../profile-section/profile.component';
import Icons from '../social-section/social.component';

import './link-tree.styles.scss';

const LinkTree = () => {
  return (
    <div className="link-tree-container">
      <ProfileSection />
      <Links />
      <Icons />
    </div>
  );
};

export default LinkTree;
