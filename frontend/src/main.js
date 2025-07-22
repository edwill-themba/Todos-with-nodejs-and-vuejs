import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

const pinia = createPinia();
const app = createApp(App);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(router);
app.use(pinia);

router.isReady().then(() => {
  app.mount("#app");
});
