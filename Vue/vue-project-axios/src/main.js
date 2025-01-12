import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
// TODO: bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// TODO: 全局引入 compoment
// import FriendCard from "./components/FriendCard.vue";

const app = createApp(App);
app.use(createPinia());
// app.component("friend-card", FriendCard);
app.mount("#app");
