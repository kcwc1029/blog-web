<template>
    <div class="container mt-5">
        <button type="button" class="btn btn-primary" @click="loadData">載入資料 => https://jsonplaceholder.typicode.com/posts/2</button>
        <form @submit.prevent="saveData" class="p-4 border rounded shadow">
            <!-- userId Input -->
            <div class="mb-3">
                <label for="userId" class="form-label">Your userId</label>
                <input type="text" id="userId" name="userId" v-model="formData.useId" class="form-control" />
            </div>
            <!-- id Input -->
            <div class="mb-3">
                <label for="id" class="form-label">Your id</label>
                <input type="text" id="id" name="id" v-model="formData.id" class="form-control" />
            </div>
            <!-- id Input -->
            <div class="mb-3">
                <label for="title" class="form-label">Your title</label>
                <input type="text" id="title" name="title" v-model="formData.title" class="form-control" />
            </div>
            <!-- body Input -->
            <div class="mb-3">
                <label for="body" class="form-label">Your body</label>
                <textarea name="body" id="body" rows="5" v-model="formData.body" class="form-control"></textarea>
            </div>
        </form>
        <button type="button" class="btn btn-primary" @click="saveData">發送資料 => https://jsonplaceholder.typicode.com/posts</button>
    </div>
</template>

<script setup>
import { reactive } from "vue";

const formData = reactive({
    useId: "", // 用於綁定 input 的資料
    id: "",
    title: "",
    body: "",
});

// TODO: 按下按鈕發送資料
const saveData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error("發送資料失敗！");
        const data = await response.json();
        alert("表單資料已成功送出");
        console.log("表單資料已成功送出", data);
    } catch (e) {
        console.log("錯誤", e);
        alert("發送資料失敗，請稍後再試。");
    }
};

import { onMounted } from "vue";
// TODO: 按下按鈕載入資料
const loadData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/2", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) throw new Error("讀取資料失敗！");
        const data = await response.json();
        if (data) {
            // console.log(data);
            formData.useId = data.userId; // 將資料載入到 formData 的 useId 欄位
            formData.id = data.id;
            formData.title = data.title;
            formData.body = data.body;
        } else {
            console.log("無資料可載入");
        }
    } catch (error) {
        console.error("錯誤", error);
        alert("讀取資料失敗，請稍後再試。");
    }
};
onMounted(() => {
    loadData();
});
</script>
