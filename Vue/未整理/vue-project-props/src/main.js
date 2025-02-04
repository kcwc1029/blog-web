import { createApp } from "vue";
import App from "./App.vue";
// TODO: bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// TODO: 全局引入 compoment
import FriendCard from "./components/FriendCard.vue";

const app = createApp(App);
app.component("friend-card", FriendCard);
app.mount("#app");
