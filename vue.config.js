module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
  css: {
    loaderOptions: {
      sass: {
        data: `@import '@/styles/base/_variables.sass'`
      }
    }
  }
};
