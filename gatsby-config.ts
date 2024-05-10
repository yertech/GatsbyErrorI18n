import type { GatsbyConfig } from "gatsby";
import { defaultLanguage, languages } from "./languages";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "bali-glamping",
    siteUrl: "https://www.yourdomain.tld",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["GA-TRACKING_ID"],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/favicon.ico",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: ["https://fonts.googleapis.com", "https://fonts.gstatic.com"],
        web: [
          {
            name: "DM Sans",
            file: "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700",
          },
          {
            name: "Dancing Script",
            file: "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400&display=swap",
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        languages,
        defaultLanguage,
        siteUrl: "https://www.yoursite.com/",
        i18nextOptions: {
          fallbackLng: defaultLanguage,
          supportedLngs: languages,
          defaultNS: "common",
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
      },
    },
  ],
};

export default config;
