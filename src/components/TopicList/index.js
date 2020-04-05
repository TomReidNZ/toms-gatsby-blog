import React from "react";
import { Link } from "gatsby";
import { Col } from "react-bootstrap";

import "./TopicList.scss";

const TopicList = ({ title, topics }) => (
  <>
    {title ? <h2>{title}</h2> : ""}
    <ul className="list-unstyled topic-list">
      {topics.map(topic => (
        <li className="row topic-list__item" key={topic.slug}>
          <Col>
            <img src={topic.cover} alt={topic.title} />
          </Col>
          <Col>
            <h3>
              <Link to={`topics/${topic.slug}`}>{topic.title}</Link>
            </h3>
            <p>{topic.description}</p>
          </Col>
        </li>
      ))}
    </ul>
  </>
);

export default TopicList;
