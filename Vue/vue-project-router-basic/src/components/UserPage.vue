<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header bg-success text-white">
                <h1>User Page</h1>
            </div>
            <div class="card-body">
                <p class="card-text">This is the user page content.</p>
                <p>透過查詢參數(query)傳進來的資料：{{ userId }}</p>
                <p>透過param轉props傳進來的資料：{{ userNum }}</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { defineProps } from "vue";
defineProps(["userNum"]); // 從 props 中接收 userId

const route = useRoute();
const userId = route.query.userId; // 獲取查詢參數
</script>
<style scoped>
.card-header {
    font-size: 1.5rem;
}
</style>
