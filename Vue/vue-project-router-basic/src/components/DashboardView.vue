<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header bg-warning text-dark">
                <h1>Dashboard Page</h1>
            </div>
            <div class="card-body">
                <p class="card-text">Welcome to the dashboard.</p>
            </div>
        </div>
        <button class="btn btn-secondary" @click="toDashboard">切換到teampage</button>
        <button class="btn btn-secondary" @click="toDashboard87">切換到teampage，並給param參數87</button>
        <button class="btn btn-secondary" @click="touserpage56">切換到userpage，並給query參數userId=56</button>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const touserpage56 = () => {
    router.push({
        path: "/userpage",
        query: { userId: 56 },
    });
};
const toDashboard = () => {
    router.push("/teampage"); // 跳轉到 DashboardView 路由
};
const toDashboard87 = () => {
    router.push("/teampage/87"); // 跳轉到 DashboardView 路由
};
</script>

<style scoped>
.card-header {
    font-size: 1.5rem;
}
</style>
