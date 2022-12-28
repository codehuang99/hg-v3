import { createApp } from "vue";
import App from "./App.vue";
import "./assets/fonts/iconfont.css";
import comp from "../packages/index.js";

const app = createApp(App);

app.use(comp);
app.mount("#app");
