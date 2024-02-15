/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Thành - Hiên 's Wedding`,
    description: `Mời mọi người đến dự lễ cưới của chúng tôi`,
    twitterUsername: `@gatsbyjs`,
    image: `src/images/meta-bg.png`,
    siteUrl: `http://www.thanhhien.lovestoblog.com`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/favicon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }]
};