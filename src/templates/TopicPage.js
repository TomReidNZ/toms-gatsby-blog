import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";
import kebabCase from 'lodash/kebabCase';

import config from "../../data/SiteConfig";
import {
  getArticlesFromPostEdges,
  getPaginationDataFromPageContext
} from "../utility/articles";

import Layout from "../layout";
import SEO from "../components/SEO";
import ImageHero from "../components/ImageHero";
import ArticleList from "../components/ArticleList";

export default class TopicTemplate extends React.Component {
  render() {
    const {
      pageContext: { topic, title, description, cover },
      pageContext,
      data: {
        allMarkdownRemark: { edges: postEdges }
      }
    } = this.props;
    const articles = getArticlesFromPostEdges(postEdges);
    const articlePagination = getPaginationDataFromPageContext(pageContext, `/topics/${kebabCase(topic)}`);
    const pageMeta = {
      title: `Articles with topic '${topic}' - ${articlePagination.currentPageTitle}`,
      description,
      cover,
      path: `topics/${topic}`
    };
    return (
      <Layout>
        <Helmet>
          <title>{`${topic.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO pageMeta={pageMeta} />
        <ImageHero
          title={title}
          subtitle={description}
          image="https://spaceholder.cc/400x300"
          imageAlt={title}
        />
        <Container>
          <ArticleList articles={articles} pagination={articlePagination} />
        </Container>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TopicsPage($topic: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { topics: { in: [$topic] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
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
