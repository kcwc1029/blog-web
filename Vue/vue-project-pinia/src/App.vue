<template>
    <div class="container bg-light p-4 rounded shadow-sm">
        <h1 class="text-center text-primary fw-bold">哥布林清單</h1>
        <p class="text-center fs-3 text-secondary">一共有幾隻哥布林</p>
        <p class="fs-4"><strong>哥布林數量：</strong>{{ goblinStore.count }}</p>
        <button class="btn btn-primary" @click="goblinStore.countUp">哥布林+1</button>
        <button class="btn btn-primary" @click="goblinStore.countDown">哥布林-1</button>
        <hr />
        <h6 class="text-success">來看看其中一隻哥布林~~~~~</h6>
        <p class="fs-5"><strong>哥布林姓名：</strong>{{ goblinStore.name }}</p>
        <p class="fs-5"><strong>哥布林等級：</strong>{{ goblinStore.level }}</p>
        <button class="btn btn-warning" @click="goblinStore.levelUp">升級哥布林</button>
        <hr />
        <h6 class="text-info">哥布林背包物品：</h6>
        <ul class="list-group mb-3">
            <li v-for="(item, index) in goblinStore.inventory" :key="index" class="list-group-item">
                {{ item }}
            </li>
        </ul>

        <h6 class="text-info">哥布林技能：</h6>
        <ul class="list-group">
            <li v-for="(points, skill) in goblinStore.abilities" :key="skill" class="list-group-item">{{ skill }}：{{ points }} 點</li>
        </ul>

        <div class="d-flex justify-content-center mt-4">
            <button class="btn btn-secondary btn-lg" @click="goblinStore.addRandomItem">新增隨機物品</button>
        </div>
    </div>
</template>

<script setup>
import { useGoblinStore } from "@/stores/useGoblin";
// 使用 Pinia Store
const goblinStore = useGoblinStore();
</script>
<style></style>
