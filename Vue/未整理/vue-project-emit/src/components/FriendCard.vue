<template>
    <li class="card mb-3 shadow border-0">
        <div class="card-body text-center">
            <!-- 顯示朋友名稱 -->
            <h2 class="card-title h4 text-primary">{{ friend.name }}</h2>

            <!-- 切換顯示詳細資料的按鈕 -->
            <button class="btn btn-danger mb-2" @click="toggleDetails">
                {{ detailAreVisible ? "Hide Details" : "Show Details" }}
            </button>
            <!-- 子元件傳給父元件 -->
            <button class="btn btn-warning mb-2" @click="editFriend(friend.id)">資料增加"!!!"</button>
            <!-- 顯示詳細資料 -->
            <ul v-if="detailAreVisible" class="list-group list-group-flush">
                <li class="list-group-item border border-2 shadow"><strong>Phone:</strong> {{ friend.phone }}</li>
                <li class="list-group-item border border-2 shadow"><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </div>
    </li>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

// 定義 props
defineProps(["friend"]);

// 定義狀態
const detailAreVisible = ref(false);

// 定義方法
const toggleDetails = () => {
    detailAreVisible.value = !detailAreVisible.value;
};

// 定義 emit
const emit = defineEmits(["update-friend"]);

const editFriend = (id) => {
    emit("update-friend", id); // 正確傳遞 friend.id 給父元件
};
</script>

<style></style>
