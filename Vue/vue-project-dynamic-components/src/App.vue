<template>
    <div>
        <!-- 切換按鈕 -->
        <button @click="toggleComponent">{{ buttonText }}</button>
        <!-- 動態元件 -->
        <component :is="selectedComponent"></component>
    </div>
</template>

<script setup>
import { ref } from "vue";

// 定義動態元件狀態
const selectedComponent = ref("ActiveGoals");
const buttonText = ref("切換到 Manage Goals"); // 預設按鈕文字

// 定義切換元件的方法
const toggleComponent = () => {
    selectedComponent.value = selectedComponent.value === "ActiveGoals" ? "ManageGoals" : "ActiveGoals";
    buttonText.value = selectedComponent.value === "ActiveGoals" ? "切換到 Manage Goals" : "切換到 Active Goals";
};
</script>
