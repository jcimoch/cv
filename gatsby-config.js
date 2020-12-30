module.exports = {
  siteMetadata: {
    title: "jcimoch",
    description: "Personal page of John Doe",
    locale: "en",
    title: "Jarosław Cimoch",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        showThemeLogo: false,
        theme:{
          'back': '#222831',
          'front': '#bdc5d0',
          'lead': '#125fec',
          'lead-text': '#eeeeee',
          'line': '#29303a',
          'skill-1': '#0077b5',
          'skill-2': '#ffff0d',
          'skill-3': '#e23237',
          'skill-4': '#db0090',
          'skill-5': '#ba2bd2',
        },
        basePath: "/",
        contentPath: "content/",
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
