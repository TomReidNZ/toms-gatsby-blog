import siteConfig from "../../data/SiteConfig";

const getDefinedTopicsFromSlugs = (topicSlugs) => {
  const definedTopics = siteConfig.topics;
  return topicSlugs.map(slug => definedTopics.filter(t => t.slug === slug)[0]);
}

export const getArticleFromPostEdge = postEdge => ({
  path: `articles/${postEdge.node.fields.slug}`,
  tags: postEdge.node.frontmatter.tags,
  topics: getDefinedTopicsFromSlugs(postEdge.node.frontmatter.topics),
  cover: postEdge.node.frontmatter.cover,
  title: postEdge.node.frontmatter.title,
  date: postEdge.node.fields.date,
  excerpt: postEdge.node.excerpt,
  timeToRead: postEdge.node.timeToRead
});

export const getArticlesFromPostEdges = postEdges =>
  postEdges.map(postEdge => getArticleFromPostEdge(postEdge));

export const getPaginationDataFromPageContext = (
  pageContext,
  paginationPath
) => ({
  resultsPerPage: pageContext.limit,
  currentPage: pageContext.currentPage,
  currentPageTitle: `page ${pageContext.currentPage}`, 
  numPages: pageContext.numPages,
  paginationPath
});

export const getArticleGithubLink = (filePath) => `${siteConfig.siteGithub}/blob/master/${filePath}`;
