<template>
    <li class="card mb-3 shadow border-0">
        <div class="card-body text-center">
            <!-- 顯示朋友名稱 -->
            <h2 class="card-title h4 text-primary">{{ friend.name }}</h2>

            <!-- 切換顯示詳細資料的按鈕 -->
            <button class="btn btn-danger mb-2" @click="toggleDetails">
                {{ detailAreVisible ? "Hide Details" : "Show Details" }}
            </button>

            <!-- 顯示詳細資料 -->
            <ul v-if="detailAreVisible" class="list-group list-group-flush">
                <li class="list-group-item border border-2 shadow"><strong>Phone:</strong> {{ friend.phone }}</li>
                <li class="list-group-item border border-2 shadow"><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </div>
    </li>
</template>

<script setup>
import { ref } from "vue";

// 定義狀態
const detailAreVisible = ref(false);
const friend = ref({
    id: "002",
    name: "小八貓",
    phone: "8888888",
    email: "8888888@gmail.com",
});

// 定義方法
const toggleDetails = () => {
    detailAreVisible.value = !detailAreVisible.value;
};
</script>

<style></style>
