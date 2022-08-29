module.exports = {
  i18n: {
    // providing the locales supported by your application
    locales: ["az", "en", "ru"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "az" ,
    localeDetection: false
  },
  images: {
    domains: ['www.dekorstore.net'],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `codewithmurad`
      }
    },
  ]
};