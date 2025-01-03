<template>
    <div>
        <h1>Product Management</h1>
        <input v-model="newProduct.name" placeholder="Product Name" />
        <input v-model.number="newProduct.price" placeholder="Product Price" />
        <button @click="addProduct">Add Product</button>
        <product-list :products="products" @deleteProduct="deleteProduct"></product-list>
    </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

// NOTE:定義響應式狀態
const products = ref([]); // 裝後端取回來的資料
// 當下表單填寫的資料
const newProduct = ref({
    name: "",
    price: 0,
});

// 定義新增產品的箭頭函數
const addProduct = async () => {
    try {
        await axios.post(`${process.env.VUE_APP_API_BASE_URL}/products`, newProduct.value);
        newProduct.value = { name: "", price: 0 }; // 清空表單
        console.log("Product added successfully!");
        await fetchProducts(); // 重新獲取最新的產品列表
    } catch (error) {
        console.error("Error adding product:", error);
    }
};

// 刪除產品
const deleteProduct = async (name) => {
    try {
        const response = await axios.delete(`${process.env.VUE_APP_API_BASE_URL}/products`, { data: { name } });
        console.log("返回資料");
        products.value = response.data;
        await fetchProducts(); // 重新獲取最新的產品列表
    } catch (error) {
        console.error("Error fetching products:", error);
    }
};

// 獲取產品列表
const fetchProducts = async () => {
    try {
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/products`);
        console.log("返回資料");
        products.value = response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
};

onMounted(fetchProducts);
</script>

<style>
/* 可添加樣式 */
</style>
