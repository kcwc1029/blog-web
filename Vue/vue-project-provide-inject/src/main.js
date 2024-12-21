import { createApp } from "vue";
import App from "./App.vue";
// TODO: bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import ChildA from "./components/ChildA.vue";
import ChildB from "./components/ChildB.vue";

const app = createApp(App);
app.component("child-a", ChildA);
app.component("child-b", ChildB);
app.mount("#app");
