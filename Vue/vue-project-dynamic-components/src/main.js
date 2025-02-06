import { createApp } from "vue";
import App from "./App.vue";

// TODO: 全局引入 compoment
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

const app = createApp(App);
// TODO: 全局註冊元件
app.component("ActiveGoals", ActiveGoals);
app.component("ManageGoals", ManageGoals);
app.mount("#app");
