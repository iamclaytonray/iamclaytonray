module.exports = {
  siteMetadata: {
    title: `Clayton Ray`,
    description: `Clayton Ray's personal website.`,
    author: `@iamclaytonray`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Clayton Ray`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/icons/favicon.ico`,
      },
    },
    // 'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
  ],
};
