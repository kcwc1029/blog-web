<template>
    <ul>
        <li v-for="i in products" :key="i.name">
            {{ i.name }} - ${{ i.price }}
            <button @click="$emit('deleteProduct', i.name)">Delete</button>
        </li>
    </ul>
</template>
<script setup>
import { defineProps } from "vue";
import { defineEmits } from "vue";

defineProps(["products"]);
defineEmits(["deleteProduct"]);
</script>
<script></script>
