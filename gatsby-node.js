const path = require("path");
const _ = require("lodash");
const moment = require("moment");
const siteConfig = require("./data/SiteConfig");

const resultsPerPage = 10;
const articleNodes = [];

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "date")
    ) {
      const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
      if (!date.isValid) {
        console.warn(`WARNING: Invalid date.`, node.frontmatter);
      }
      createNodeField({
        node,
        name: "date",
        value: date.toISOString()
      });
    }
    createNodeField({
      node,
      name: "filePath",
      value: `content/${fileNode.relativePath}`
    });
    articleNodes.push(node);
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const articlePage = path.resolve("src/templates/Article.js");
    const tagPage = path.resolve("src/templates/TagPage.js");
    const topicPage = path.resolve("src/templates/TopicPage.js");
    resolve(
      graphql(
        `
          {
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
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    tags
                    topics
                  }
                  fields {
                    slug
                    filePath
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors);
          reject(result.errors);
        }

        const articleEdges = result.data.allMarkdownRemark.edges;
        const tagSet = new Set();
        const topicSet = new Set();
        const definedTopics = result.data.site.siteMetadata.topics;

        // loop through all the markdown content
        articleEdges.forEach(edge => {
          // store tags in the tagSet
          if (edge.node.frontmatter.tags) {
            edge.node.frontmatter.tags.forEach(tag => {
              tagSet.add(tag);
            });
          }

          // store topics in the topicSet
          if (edge.node.frontmatter.topics) {
            edge.node.frontmatter.topics.forEach(topics => {
              topicSet.add(topics);
            });
          }

          // create article pages
          createPage({
            path: `/articles${edge.node.fields.slug}`,
            component: articlePage,
            context: {
              slug: edge.node.fields.slug,
              filePath: edge.node.fields.filePath,
              topicIds: edge.node.frontmatter.topics
            }
          });
        });

        // create the post listing pages
        const numberOfPages = Math.ceil(articleEdges.length / resultsPerPage);
        Array.from({ length: numberOfPages }).forEach((v, i) => {
          createPage({
            path: i === 0 ? `/articles` : `/articles/${i + 1}`,
            component: path.resolve("./src/templates/ArticleListPage.js"),
            context: {
              limit: resultsPerPage,
              skip: i * resultsPerPage,
              numPages: numberOfPages,
              currentPage: i + 1
            }
          });
        });

        const tagList = Array.from(tagSet);
        tagList.forEach(tag => {
          // get the articles that have the topic
          const articlesWithTag = [];
          articleEdges.forEach(edge => {
            if (edge.node.frontmatter.tags.includes(tag)) {
              articlesWithTag.push(edge);
            }
          });

          // create the topic listing pages with pagination
          const numberOfPagesWithTag = Math.ceil(
            articlesWithTag.length / resultsPerPage
          );
          Array.from({ length: numberOfPagesWithTag }).forEach((v, i) => {
            createPage({
              path:
                i === 0
                  ? `/tags/${_.kebabCase(tag)}`
                  : `/tags/${_.kebabCase(tag)}/${i + 1}`,
              component: tagPage,
              context: {
                limit: resultsPerPage,
                skip: i * resultsPerPage,
                numPages: numberOfPagesWithTag,
                currentPage: i + 1,
                tag
              }
            });
          });
        });

        const topicList = Array.from(topicSet);
        topicList.forEach(topic => {
          // get the defined topic that relates to the topic
          const topics = definedTopics.filter(t => t.slug === topic);
          const definedTopic = topics.length > 0 ? topics[0] : null;
          if (definedTopic) {
            // if there is a defined topic create a page for it

            // get the articles that have the topic
            const articlesInTopic = [];
            articleEdges.forEach(edge => {
              if (edge.node.frontmatter.topics.includes(topic)) {
                articlesInTopic.push(edge);
              }
            });

            // create the topic listing pages with pagination
            const numberOfPagesInTopic = Math.ceil(
              articlesInTopic.length / resultsPerPage
            );
            Array.from({ length: numberOfPagesInTopic }).forEach((v, i) => {
              createPage({
                path:
                  i === 0
                    ? `/topics/${_.kebabCase(topic)}`
                    : `/topics/${_.kebabCase(topic)}/${i + 1}`,
                component: topicPage,
                context: {
                  limit: resultsPerPage,
                  skip: i * resultsPerPage,
                  numPages: numberOfPagesInTopic,
                  currentPage: i + 1,
                  title: definedTopic.title,
                  topic: definedTopic.slug,
                  description: definedTopic.description,
                  cover: definedTopic.cover
                }
              });
            });
          }
        });
      })
    );
  });
};
