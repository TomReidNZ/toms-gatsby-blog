import React from "react";
import { Link } from "gatsby";
import { Container, Nav } from "react-bootstrap";
// import PillLinkList from "../../Components/PillLinkList";
import "./Footer.scss";
import { Badge } from "react-bootstrap";

import config from "../../../data/SiteConfig";
import SocialMedia from "../../components/SocialMedia";
// const items = ["azure", "react"]
var topicsToLoad = [
  { title: "Artificial Intelligence", slug: "artificial-intelligence" },
  // { title: "Audio", slug: "audio" },
  { title: "Business", slug: "business" },
  // { title: "Deep Learning", slug: "deep-learning" },
  // { title: "Ethics", slug: "ethics" },
  // { title: "Philosophy", slug: "philosophy" },
  { title: "Technology", slug: "technology" },
  // { title: "Travel", slug: "travel" }
];
const Footer = () => (
  <footer className="footer">
    <Container id="footer-container">
      <div className="tiny-footer-border" />
      <div className="footer-border-container">
        <div className="footer-tag-container">
          <ul className="tag-list topics-tags-list">
            {topicsToLoad.map(item => (
              <li className="topic-tag-button" key={item}>
                <Link
                  className="article-badge-link"
                  to={`topics/${item.slug}`}
                  aria-pressed="true"
                >
                  <div className="badge badge-pill badge-light article-list-button">
                    {item.title}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <SocialMedia userLinks={config.userLinks} className="flex-column" />
      </div>
    </Container>
  </footer>
);

export default Footer;
