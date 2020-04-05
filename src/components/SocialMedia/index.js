import React from "react";
import "./SocialMedia.scss";

const SocialMedia = ({ userLinks }) => (
  <div className="SEO-Container">
  <div className="SEO-center-container">
  <ul className="SEO-Bar">
    {userLinks.map(userLink => (
      <li className="footer-list-items" key={userLink.label}>
        <a className="footer-button" href={userLink.url} id={userLink.image}>
          <div className={userLink.image} id="social-button" />
        </a>
      </li>
    ))}
  </ul>
  </div>
  </div>
);

export default SocialMedia;
