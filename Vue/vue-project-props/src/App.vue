<template>
    <h5 class="display-3 text-center">哥布林清單</h5>
    <section>
        <ul>
            <friend-card v-for="i in friends" :key="i.id" :friend="i"></friend-card>
        </ul>
    </section>
</template>
<script setup>
import { ref } from "vue";

// 定義朋友資料
const friends = ref([
    { id: "001", name: "吉伊卡蛙", phone: "7777777", email: "7777777@gmail.com" },
    { id: "002", name: "小八貓", phone: "8888888", email: "8888888@gmail.com" },
    { id: "003", name: "兔兔", phone: "9999999", email: "9999999@gmail.com" },
    { id: "004", name: "小桃鼠", phone: "6666666666", email: "6666666666@gmail.com" },
]);
</script>
<style></style>
