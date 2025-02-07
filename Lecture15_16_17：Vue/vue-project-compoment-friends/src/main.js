import { createApp } from "vue";
import App from "./App.vue";
// TODO: bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// TODO: 全局引入 compoment
import FriendCard from "./components/FriendCard.vue";

const app = createApp(App);
// TODO: 在app上面掛component
app.component("friend-card", FriendCard);
app.mount("#app");
