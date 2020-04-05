import React from "react";
import { graphql, Link } from "gatsby";
import { Container } from "react-bootstrap";

import Layout from "../layout";
import SEO from "../components/SEO";
import { getArticlesFromPostEdges } from "../utility/articles";
import ArticleList from "../components/ArticleList";
import ImageHero from "../components/ImageHero";
import TopicList from "../components/TopicList";

class Index extends React.Component {
  render() {
    const pageMeta = {
      title: "Home",
      description: "Lorem Ipsum",
      cover: "https://spaceholder.cc/400x300",
      path: "/"
    };
    const {
      data: {
        site: {
          siteMetadata: { topics }
        },
        allMarkdownRemark: { edges: postEdges }
      }
    } = this.props;
    const articles = getArticlesFromPostEdges(postEdges);
    return (
      <Layout>
        <SEO pageMeta={pageMeta} />
        <ImageHero
          title="Hi, I'm Tom! 👋"
          subtitle="And you've found this as I'm working on it. I'll get around to polishing this up eventually, and putting my content on here, but I'm currently enjoying myself in South America :) For reference this site is made with Gatsby, and I'm an AI practitioner based out of Wellington, New Zealand. I am passionate about applying technology for social good, deep learning, and philosophy. I currently spend my work hours on machine learning, ethics, education, and business strategy."
        />
        <Container className="main-page-body">
          <ArticleList title="" articles={articles} />
          <div className="button-container">
            <Link
              to="/articles"
              className="btn btn-primary see-all-articles"
              role="button"
              aria-pressed="true"
            >
              See all articles
            </Link>
          </div>
          <hr />
        </Container>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        topics {
          title
          slug
          description
          cover
        }
      }
    }
    allMarkdownRemark(
      limit: 3
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(pruneLength: 580)
          timeToRead
          frontmatter {
            title
            tags
            topics
            cover
            date
          }
        }
      }
    }
  }
`;
