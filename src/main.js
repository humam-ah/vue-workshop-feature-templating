import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Local Css
import "./assets/main.css";

// Bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap";

const app = createApp(App);

app.use(router);

app.mount("#app");
