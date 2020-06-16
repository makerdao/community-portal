const path = require("path");
const remark = require("remark");
const visit = require("unist-util-visit");
const { TitleConverter, UrlConverter } = require("./src/build-utils");
require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `MakerDAO Community Portal`,
    description: `Gatsby DaiUI Starter`,
    author: `Réjon Taylor-Foster (@Maximum_Crash)`,
    copyright: "",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `imgs`,
        path: `./src/imgs`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve("./src/modules/layouts/default_layout.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: "none",
              disableBgImage: true,
              showCaptions: ["Title"],
            },
          },
          {
            resolve: "gatsby-remark-code-titles",
            options: {
              className: "prism-code-title",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby + Dai-Ui Starter`,
        short_name: `Gatsby + Dai-Ui`,
        start_url: `/`,
        display: `minimal-ui`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-theme-ui",
      options: {
        prismPreset: "night-owl",
        preset: "@makerdao/dai-ui-theme-maker",
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: "Roboto Mono",
            variants: ["400"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/modules/layouts/site_layout.js`),
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/content`,
        ignore: {
          patterns: [`**/header.mdx`, `**/**.js`, `**/**.json`, `**/404.mdx`, `**/example.mdx`],
          options: { nocase: true },
        },
      },
    },

    {
      //NOTE(Rejon): This is what allows us to do aliased imports like "@modules/ect..."
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@modules": path.resolve(__dirname, "src/modules"),
          "@src": path.resolve(__dirname, "src"),
          "@utils": path.resolve(__dirname, "src/utils.js"),
          "@pages": path.resolve(__dirname, "src/pages"),
          "@images": path.resolve(__dirname, "public/images"),
          "@content": path.resolve(__dirname, "content"),
        },
        extensions: [
          //NOTE(Rejon): You don't have to write .js at the end of js files now.
          "js",
        ],
      },
    },
    {
      //NOTE(Rejon): Your search will have to be manually updated for ever new locale that's added.
      resolve: "gatsby-plugin-lunr",
      options: {
        languages: [
          {
            name: "en",
            filterNodes: (node) =>
              node.frontmatter !== undefined &&
              node.fileAbsolutePath &&
              node.fileAbsolutePath.match(
                /\/en\/(?!header.mdx|index.mdx|404.mdx|.js|.json)/
              ) !== null,
          },
          {
            name: "es",
            filterNodes: (node) =>
              node.frontmatter !== undefined &&
              node.fileAbsolutePath &&
              node.fileAbsolutePath.match(
                /\/es\/(?!header.mdx|index.mdx|404.mdx|.js|.json)/
              ) !== null,
          },
        ],
        fields: [
          { name: "title", store: true, attributes: { boost: 20 } },
          { name: "keywords", attributes: { boost: 15 } },
          { name: "url", store: true },
          { name: "excerpt", store: true, attributes: { boost: 5 } },
        ],

        resolvers: {
          Mdx: {
            title: TitleConverter,
            url: UrlConverter,
            excerpt: (node) => {
              //NOTE(Rejon): We have to do excerpt this way because excerpt isn't available at the level that the lunr resolver is tapping Graphql.
              // TLDR: The excerpt node is undefined so we have to parse it ourselves.
              const excerptLength = 136; // Hard coded excerpt length
              let excerpt = "";
              const tree = remark().parse(node.rawBody);
              visit(tree, "text", (node) => {
                excerpt += node.value;
              });
              return `${excerpt.slice(0, excerptLength)}${
                excerpt.length > excerptLength ? "..." : ""
              }`;
            },
            keywords: (node) => node.frontmatter.keywords,
          },
        },
        filename: "search_index.json",
        fetchOptions: {
          credentials: "same-origin",
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
