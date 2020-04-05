import React from "react";
import Helmet from "react-helmet";
import urljoin from "url-join";
import config from "../../../data/SiteConfig";

const SEO = ({ postNode, postPath, postSEO, pageMeta }) => {
  let title;
  let description;
  let image;
  let seoUrl;
  if (postSEO) {
    const postMeta = postNode.frontmatter;
    ({ title } = postMeta);
    description = postMeta.description
      ? postMeta.description
      : postNode.excerpt;
    seoUrl = urljoin(config.siteUrl, config.pathPrefix, postPath);
    image = urljoin(config.siteUrl, config.pathPrefix, postMeta.cover);
  } else if (pageMeta) {
    title = pageMeta.title;
    description = pageMeta.description;
    image = pageMeta.cover;
    seoUrl = urljoin(config.siteUrl, config.pathPrefix, pageMeta.path);
  } else {
    title = config.siteTitle;
    description = config.siteDescription;
    image = urljoin(config.siteUrl, config.pathPrefix, config.siteLogo);
  }

  const blogURL = urljoin(config.siteUrl, config.pathPrefix);
  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : ""
    }
  ];
  if (postSEO) {
    schemaOrgJSONLD.push(
      {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": seoUrl,
              name: title,
              image
            }
          }
        ]
      },
      {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
        headline: title,
        image: {
          "@type": "ImageObject",
          url: image
        },
        description
      }
    );
  }

  return (
    <Helmet>
      {/* General tags */}
      <title>{`${title} | ${config.siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={seoUrl} />
      {postSEO ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta
        property="fb:app_id"
        content={config.siteFBAppID ? config.siteFBAppID : ""}
      />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={config.userTwitter ? config.userTwitter : ""}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
