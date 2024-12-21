import { createApp } from "vue";
import App from "./App.vue";
// TODO: bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// TODO: 全局引入 compoment
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

const app = createApp(App);
// TODO: 全局註冊元件
app.component("ActiveGoals", ActiveGoals);
app.component("ManageGoals", ManageGoals);

// 全局註冊標籤
// app.component("active-goals", ActiveGoals);
// app.component("manage-goals", ManageGoals);
app.mount("#app");
