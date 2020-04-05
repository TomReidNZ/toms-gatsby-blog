import React from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";

import {
  getArticlesFromPostEdges,
  getPaginationDataFromPageContext
} from "../utility/articles";

import Layout from "../layout";
import SEO from "../components/SEO";
import ArticleList from "../components/ArticleList";

export default class ArticleListPage extends React.Component {
  render() {
    const {
      data: {
        allMarkdownRemark: { edges: postEdges }
      },
      pageContext
    } = this.props;
    const articlePagination = getPaginationDataFromPageContext(pageContext, "/articles");
    const pageMeta = {
      title: `Articles - ${articlePagination.currentPageTitle}`,
      description: "Lorem Ipsum",
      cover: "https://spaceholder.cc/400x300",
      path: "/"
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

export const articleListQuery = graphql`
  query articleListPageQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
