import React from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";

import { getArticleGithubLink } from "../utility/articles";
import kebabCase from "lodash/kebabCase";
import PillLinkList from "../components/PillLinkList";

import Layout from "../layout";
import ArticleTags from "../components/ArticleTags";
import SEO from "../components/SEO";
import "./Article.scss";
const dateToLoad = (dateToSplit, dateUsed) => {
  let newSubstring1 = 0;
  let newSubstring2 = 0;
  var followingChars = "";
  var newDate = "";
  if (dateUsed === "day") {
    newSubstring1 = 10;
    newSubstring2 = 8;
    newDate = dateToSplit.substring(newSubstring1, newSubstring2);
    if (newDate[1] == 1) {
      followingChars = "st ";
    } else if (newDate[1] == 2) {
      followingChars = "nd ";
    } else {
      followingChars = "th ";
    }
  } else if (dateUsed === "month") {
    newSubstring1 = 7;
    newSubstring2 = 5;
  } else if (dateUsed === "year") {
    newSubstring1 = 0;
    newSubstring2 = 4;
  }
  newDate =
    dateToSplit.substring(newSubstring1, newSubstring2) + followingChars;
  if (dateUsed === "month") {
    switch (newDate) {
      case "01":
        newDate = "January ";
        break;

      case "02":
        newDate = "February ";
        break;

      case "03":
        newDate = "March ";
        break;
      case "04":
        newDate = "April ";
        break;

      case "05":
        newDate = "May ";
        break;

      case "06":
        newDate = "June ";
        break;
      case "07":
        newDate = "July ";
        break;

      case "08":
        newDate = "August ";
        break;
      case "09":
        newDate = "September ";
        break;
      case "10":
        newDate = "October ";
        break;
      case "11":
        newDate = "November ";
        break;
      case "12":
        newDate = "December ";
        break;

      default:
        console.log("value of i is not equal to any given values");
        break;
    }
  }
  return newDate;
};
const ArticleTemplate = ({
  data: { markdownRemark: postNode },
  pageContext: { slug, filePath }
}) => {
  const article = postNode.frontmatter;
  return (
    <Layout>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Container id="blog-container">
      <div className="blog-title-desktop">
        <h1 id="blog-title">{article.title}</h1>
        <p id="blog-date">
          {dateToLoad(article.date, "day")}
          {dateToLoad(article.date, "month")}
          {dateToLoad(article.date, "year")}
        </p>
        </div>
        <PillLinkList
          items={article.topics}
          getItemRoute={item => `topics/${item}`}
        />
        <div
          id="blog-main"
          dangerouslySetInnerHTML={{ __html: postNode.html }}
        />
        {/* <div>
          <a className="btn btn-primary" href={getArticleGithubLink(filePath)} target="_blank" rel="noopener noreferrer">Edit on Github</a>
        </div> */}
      </Container>
    </Layout>
  );
};

export default ArticleTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        tags
        topics
        cover
        date
      }
      fields {
        slug
        filePath
        date
      }
    }
  }
`;
