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
  ],
}
