const config = {
  siteTitle: "Tom Reid", // Site title.
  siteTitleShort: "Tom Reid", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Tom Reid", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://tomreid.ai", // Domain of your website without pathPrefix.
  siteGithub: "https://github.com/tomreidnz/tomreid-website",
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Tom Reid", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-141660058-1", // GA tracking ID.
  disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  postDefaultTopicID: "artificial-intelligence", // Default topic for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Tom Reid", // Username to display in the author segment.P
  userEmail: "tom@tomreid.ai", // Email used for RSS feed's author segment
  userTwitter: "TomReidNZ", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Wellington, New Zealand", // User location to display in the author segment.
  userAvatar: "https://spaceholder.cc/200x100", // User avatar to display in the author segment.
  userDescription:
    "Nibh nisl condimentum id venenatis a condimentum. At erat pellentesque adipiscing commodo elit. In ante metus dictum at tempor commodo ullamcorper a. Suspendisse sed nisi lacus sed. Eget dolor morbi non arcu risus quis varius quam quisque. Suspendisse ultrices gravida dictum fusce.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/tomreidnz/",
      iconClassName: "fa fa-linkedin-in",
      image: "linkedin"
    },
    {
      label: "GitHub",
      url: "https://github.com/tomreidnz",
      iconClassName: "fa fa-github",
      image: "github"
      // image: "githubIcon"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/tomreidnz",
      iconClassName: "fa fa-twitter",
      // image: "'./ic_twitter.svg'"
      image: "twitter"
    },
    {
      label: "Email",
      url: "mailto:tom@tomreid.ai",
      iconClassName: "fa fa-envelope",
      image: "email"
    }
  ],
  topics: [
    {
      title: "Artificial Intelligence",
      slug: "artificial-intelligence",
      description: "aculis at erat pellentesque adipiscing commodo elit at imperdiet. Pulvinar etiam non quam lacus suspendisse faucibus. Sit amet nisl purus in mollis nunc. Mollis aliquam ut porttitor leo a diam sollicitudin tempor.",
      cover: "https://spaceholder.cc/400x300"
    },
    {
      title: "Cloud",
      slug: "cloud",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus at urna condimentum mattis pellentesque id nibh. Sed turpis tincidunt id aliquet.",
      cover: "https://spaceholder.cc/400x300"
    },
    {
      title: "Devops",
      slug: "devops",
      description: "Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Aenean sed adipiscing diam donec adipiscing tristique. Nunc consequat interdum varius sit amet mattis vulputate enim nulla.",
      cover: "https://spaceholder.cc/400x300"
    },
    {
      title: "Audio",
      slug: "audio",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus at urna condimentum mattis pellentesque id nibh. Sed turpis tincidunt id aliquet.",
      cover: "https://spaceholder.cc/400x300"
    },
    {
      title: "Philosophy",
      slug: "philosphy",
      description: "Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Aenean sed adipiscing diam donec adipiscing tristique. Nunc consequat interdum varius sit amet mattis vulputate enim nulla.",
      cover: "https://spaceholder.cc/400x300"
    },
    {
      title: "Deep Learning",
      slug: "deep-learning",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus at urna condimentum mattis pellentesque id nibh. Sed turpis tincidunt id aliquet.",
      cover: "https://spaceholder.cc/400x300"
    },
    {
      title: "Ethics",
      slug: "ethics",
      description: "Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Aenean sed adipiscing diam donec adipiscing tristique. Nunc consequat interdum varius sit amet mattis vulputate enim nulla.",
      cover: "https://spaceholder.cc/400x300"
    },
    {
      title: "Technology",
      slug: "technology",
      description: "Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Aenean sed adipiscing diam donec adipiscing tristique. Nunc consequat interdum varius sit amet mattis vulputate enim nulla.",
      cover: "https://spaceholder.cc/400x300"
    },
    {
      title: "Travel",
      slug: "travel",
      description: "Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Aenean sed adipiscing diam donec adipiscing tristique. Nunc consequat interdum varius sit amet mattis vulputate enim nulla.",
      cover: "https://spaceholder.cc/400x300"
    },
    {
      title: "Business",
      slug: "business",
      description: "Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Aenean sed adipiscing diam donec adipiscing tristique. Nunc consequat interdum varius sit amet mattis vulputate enim nulla.",
      cover: "https://spaceholder.cc/400x300"
    }
  ],
  copyright: "Copyright © 2019. Tom Reid", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
