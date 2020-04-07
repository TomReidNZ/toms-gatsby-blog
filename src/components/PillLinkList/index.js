import React from "react";
import { Link } from "gatsby";
import { Badge } from "react-bootstrap";

const PillLinkList = ({ items, getItemRoute}) => {
  if (!items || items.length === 0) return "";
  return (
    <ul className="tag-list topics-tags-list">
      {items.map(item => (
        <li className="topic-tag-button" key={Math.random()}>
          <Link
            className="article-badge-link"
            to={`/${getItemRoute(item)}`}
            // aria-pressed="true"
          >
            <div
              className={`badge badge-pill badge-light article-list-button ${item.slug}`}
              // id="article-list-button" key={item.slug}
            >
              {item.title}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PillLinkList;
