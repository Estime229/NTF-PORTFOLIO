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
      faviconSVG: "img/icons/favicon.png",
      favicon32: "img/icons/favicon.png",
      favicon16: "img/icons/favicon.png",
      appleTouchIcon: "img/icons/favicon.png",
      maskIcon: "img/icons/favicon.png",
      msTileImage: "img/icons/favicon.png",
    },
  },
});
