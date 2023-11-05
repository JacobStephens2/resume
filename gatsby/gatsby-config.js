/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Jacob Stephens Resume`,
    titleTemplate: `Jacob Stephens Resume`,
    author: {
      name: `Jacob Stephens`,
      summary: `A board game player trying their hand at being a web developer.`,
    },
    description: `An opinionated starter for Gatsby`,
    url: `https://resume.jacobstephens.net`,
    logo: `static/stewardgoods-icon.png`,
    twitter: `JacobSt73263669`,
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jacob Stephens' Resume`,
        short_name: `Stephens Resume`,
        start_url: `/`,
        background_color: `#F9AC00`, // Orange comb
        theme_color: `#F8B429`, // Yellow bee
        display: `standalone`,
        icon: `static/stewardgoods-icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-90JQWVG3TL", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
}
