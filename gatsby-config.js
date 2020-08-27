module.exports = {
  siteMetadata: {
    siteTitle: `SUPISTA-Docs`,
    defaultTitle: `SUPISTA-Docs`,
    siteTitleShort: `SUPISTA-Docs`,
    siteDescription: `SUPISTA-Docs`,
    siteUrl: `https://rocketdocs.netlify.com`,
    siteAuthor: `SUPISTA`,
    siteImage: `static/logo.png`,
    siteLanguage: `en`,
    themeColor: `#7159c1`,
    basePath: `/`,
    footer: `SUPISTA`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/SUPISTA/docs`,
        baseDir: ``,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SUPISTA-Docs`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/logo.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
