<template>
    <h5 class="display-3 text-center">App.vue</h5>
    <p>在App.vue中顯示資料: {{ sharedData }}</p>
    <child-a></child-a>
</template>
<script></script>
<script setup>
import { provide, ref } from "vue";

const sharedData = ref("父元件初始資料");
provide("sharedData", sharedData);
</script>
