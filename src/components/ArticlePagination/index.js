import React from "react";
import { Link } from "gatsby";
import { Pagination } from "react-bootstrap";
import classNames from "classnames";

const getPaginationItems = (numPages, paginationPath) => {
  const items = [];
  for (let index = 1; index <= numPages; index++) {
    items.push({
      index,
      path: index === 1 ? paginationPath : `${paginationPath}/${index}`
    });
  }
  return items;
};

const ArticlePagination = ({
  data: { currentPage, numPages, paginationPath }
}) => {
  if (numPages < 2) return "";
  const paginationItems = getPaginationItems(numPages, paginationPath);
  return (
    <Pagination>
      {paginationItems.map(item => (
        <li
          key={item.index}
          className={classNames({
            "page-item": true,
            "active": currentPage === item.index
          })}
        >
          <Link to={`/${item.path}`} className="page-link">
            {item.index}
          </Link>
        </li>
      ))}
    </Pagination>
  );
};

export default ArticlePagination;
