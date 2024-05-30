const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    i18n: {
      locale: "fr",
      fallbackLocale: "en",
      localeDir: "locales",
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true,
    },
  },

  pwa: {
    iconPaths: {
      faviconSVG: "img/icons/favicon.ico",
      favicon32: "img/icons/favicon.ico",
      favicon16: "img/icons/favicon.ico",
      appleTouchIcon: "img/icons/favicon.ico",
      maskIcon: "img/icons/favicon.ico",
      msTileImage: "img/icons/favicon.ico",
    },
  },
});
