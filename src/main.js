import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import install from "./install";
import i18n from "./i18n";
import { VueSvgIconPlugin } from "@yzfe/vue3-svgicon";
import "@yzfe/svgicon/lib/svgicon.css";

createApp(App)
  .use(VueSvgIconPlugin, { tagName: "icon" })
  .use(i18n)
  .use(store)
  .use(router)
  .use(install)
  .mount("#app");
