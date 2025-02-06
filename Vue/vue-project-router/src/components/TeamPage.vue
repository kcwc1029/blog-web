<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h1>Team Page</h1>
            </div>
            <div class="card-body">
                <p class="card-text">This is the team page content.</p>
            </div>
        </div>
        <p>透過路由參數(params)傳進來的資料：{{ teamId }}</p>
    </div>
</template>
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const teamId = route.params.teamId; // 獲取動態參數
</script>

<style scoped>
.card-header {
    font-size: 1.5rem;
}
</style>
