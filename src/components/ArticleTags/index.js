import React from "react";
import _ from "lodash";
import { Link } from "gatsby";

const ArticleTags = ({ tags }) => (
  <div className="article-tag-container">
    {tags &&
      tags.map(tag => (
        <Link
          key={tag}
          style={{ textDecoration: "none" }}
          to={`/tags/${_.kebabCase(tag)}`}
        >
          {tag}
        </Link>
      ))}
  </div>
);

export default ArticleTags;
