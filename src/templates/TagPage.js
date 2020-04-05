import React from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";
import kebabCase from 'lodash/kebabCase';

import {
  getArticlesFromPostEdges,
  getPaginationDataFromPageContext
} from "../utility/articles";

import Layout from "../layout";
import SEO from "../components/SEO";
import ArticleList from "../components/ArticleList";

export default class TagTemplate extends React.Component {
  render() {
    const {
      pageContext: { tag },
      data: {
        allMarkdownRemark: { edges: postEdges }
      },
      pageContext,
      location: { pathname }
    } = this.props;
    const articlePagination = getPaginationDataFromPageContext(pageContext, `/tags/${kebabCase(tag)}`);
    const pageMeta = {
      title: `Articles with tag '${tag}' - ${articlePagination.currentPageTitle}`,
      description: "Lorum ipsum",
      cover: "https://spaceholder.cc/400x300",
      path: `${pathname}`
    };
    const articles = getArticlesFromPostEdges(postEdges);
    return (
      <Layout>
        <SEO pageMeta={pageMeta} />
        <Container>
          <ArticleList articles={articles} pagination={articlePagination} />
        </Container>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
