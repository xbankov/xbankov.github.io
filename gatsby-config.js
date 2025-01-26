/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `xbankov.github.io`,
    siteUrl: `https://xbankov.github.io/`,
    description: `This is a description of my awesome site.`,
    author: "Mikuláš Bankovič",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "My Awesome Site",
        short_name: "My Site",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Saira Extra Condensed", "Saira Condensed", "Saira", "Saira Stencil One"],
        display: "swap",
      },
    },
  ],
};
