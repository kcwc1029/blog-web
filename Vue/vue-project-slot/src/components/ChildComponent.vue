<template>
    <div class="card">
        <h3>這是子組件的內容(一定會在最上方)</h3>
        <!-- 定義插槽slot -->
        <h1><slot name="name"></slot></h1>
        <span><slot name="price"></slot></span>
        <p><slot name="material"></slot></p>
    </div>
</template>

<script setup></script>

<style>
.card {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px;
}
</style>
