import { createApp } from "vue";
import App from "./App.vue";
import ProductView from "./views/ProductView.vue";
import ProductList from "./components/ProductList.vue";

const app = createApp(App);
app.component("product-view", ProductView);
app.component("product-list", ProductList);
app.mount("#app");
