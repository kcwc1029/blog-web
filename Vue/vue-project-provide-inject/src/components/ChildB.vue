<template>
    <div>
        <h5 class="display-3 text-center">子元件 B</h5>
        <p>子元件 B顯示資料: {{ sharedData }}</p>
        <input type="text" v-model="sharedData" class="form-control" />
        <button @click="clearData" class="btn btn-danger mt-2">清除資料</button>
    </div>
</template>
<script setup>
import { inject } from "vue";
const sharedData = inject("sharedData");
const clearData = () => {
    sharedData.value = ""; // 修改資料
};
</script>
