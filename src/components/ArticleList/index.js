import React from "react";
import { Link } from "gatsby";
import { Card } from "react-bootstrap";
import kebabCase from "lodash/kebabCase";
import ArticlePagination from "../ArticlePagination";

import "./ArticleList.scss";

import PillLinkList from "../PillLinkList";

const NoResults = () => <div>No Results</div>;
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
    if (newDate[0] == 0) {
      newSubstring2 = 9;
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
const ArticleList = ({ title, articles, pagination }) => {
  if (!articles || articles.length === 0) return <NoResults />;
  return (
    <>
      {title ? <h2>{title}</h2> : ""}
      <ul className="post-list list-unstyled">
        {articles.map(article => (
          <li className="post-list__item" key={article.path}>
            <Card className="blog-card">
              <Card.Body>
                <div className="desktop-container">
                <Card.Title>
                  <h4>
                    <Link to={`/${article.path}`} key={article.title}>
                      <div className="title-article">{article.title}</div>
                    </Link>
                  </h4>
                </Card.Title>
                <div className="article-date">
                  {dateToLoad(article.date, "day")}
                  {dateToLoad(article.date, "month")}
                  {dateToLoad(article.date, "year")}
                </div>
                </div>
                <PillLinkList
                  items={article.topics}
                  getItemRoute={item => `topics/${item.slug}`}
                />
                <div className="article-preview">{article.excerpt}</div>
                <div className="read-more">
                  <Link
                    to={`/${article.path}`}
                    key={article.title}
                    aria-label={`Read more about ${article.title}`}
                  >
                    <div id="links">Read more</div>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
      {pagination && <ArticlePagination data={pagination} />}
    </>
  );
};

export default ArticleList;
