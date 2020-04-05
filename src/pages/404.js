import React, { Component } from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";
import config from "../../data/SiteConfig";

import Layout from "../layout";
import SEO from "../components/SEO";
import SocialMediaAbout from "../components/SocialMedia/about-social.js";

// import ImageHero from "../components/ImageHero";
// import TopicList from "../components/TopicList";
import "./about.scss";

class NotFound extends Component {
  render() {

    return (
      <Layout>
        <Container id="about-main">
          <h4>
            Page not found :(
          </h4>
        </Container>
      </Layout>
    );
  }
}

export default NotFound;
