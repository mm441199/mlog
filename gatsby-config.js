require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `MLOG`,
    description: `技術記事とときどき旅行記`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.spaceId,
        accessToken: process.env.accessToken,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve:"gatsby-transformer-remark",
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              ordered: false,
              fromHeading: 1,
              toHeading: 3,
              className: "table-of-contents"
            },
          },
          // {
          //   resolve: `gatsby-remark-code-titles`,
          //   options: {
          //     className: 'gatsby-remark-code-title',
          //   },
          // },
          'gatsby-remark-prismjs-title',
          "gatsby-remark-prismjs",
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 980,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-text-decoration',
            options: {
              addTags : {
                "mytag" : "style='border-bottom: solid 4px rgba(252, 174, 5, 0.5);'"
              }
            }
          },
        ],
      },
    },
  ],
}
