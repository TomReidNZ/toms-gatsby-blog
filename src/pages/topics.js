import React from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";

import Layout from "../layout";
import SEO from "../components/SEO";
import ImageHero from "../components/ImageHero";
import TopicList from "../components/TopicList";

class Topics extends React.Component {
  render() {
    const {
      data: {
        site: {
          siteMetadata: { topics }
        }
      },
      location: { pathname }
    } = this.props;
    const pageMeta = {
      title: "Topics",
      description: "Lorum ipsum",
      cover: "https://spaceholder.cc/400x300",
      path: `${pathname}`
    };
    return (
      <Layout>
        <SEO pageMeta={pageMeta} />
        <ImageHero
          title="Topics"
          subtitle="I like to talk about these topics"
          image="https://spaceholder.cc/350x300"
          imageAlt="Topics"
        />
        <Container>
          <TopicList topics={topics} />
        </Container>
      </Layout>
    );
  }
}

export default Topics;

export const pageQuery = graphql`
  query TopicsQuery {
    site {
      siteMetadata {
        topics {
          title
          cover
          slug
          description
        }
      }
    }
  }
`;
