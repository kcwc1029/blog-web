import { createApp } from "vue";
// TODO: bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// TODO: 增加router
import { createRouter, createWebHistory } from "vue-router";

// TODO: 增加各種套件
import App from "./App.vue";
import NavPage from "./components/NavPage.vue";
import TeamPage from "./components/TeamPage.vue";
import UserPage from "./components/UserPage.vue";
import DashboardView from "./components/DashboardView.vue";
import NotFound from "./components/NotFound.vue";

// TODO: 使用router
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", redirect: "/teampage" }, // NOTE: redirect
		{ path: "/dashboardview", component: DashboardView },
		{ path: "/teampage", component: TeamPage },
		{ path: "/teampage/:teamId", component: TeamPage },
		{ path: "/userpage", component: UserPage },
		{ path: "/userpage/:userNum", component: UserPage, props: true },

		// NOTE: catch all router
		{ path: "/:notFound(.*)", component: NotFound },
	],
	linkActiveClass: "router-link-activate",
});

// TODO: 全部掛在app上
const app = createApp(App);
app.component("nav-page", NavPage);
app.use(router);
app.mount("#app");
