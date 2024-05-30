import "./assets/styles/css/tailwind.css";
import "./assets/styles/sass/main.scss";
import "./assets/styles/sass/mixin.scss";
import Toaster from "@incuca/vue3-toaster";
export default {
  install(app) {
    app.use(Toaster);
  },
};
