<template>
    <the-header></the-header>
    <ul>
        <store-resource></store-resource>
    </ul>
</template>

<script>
import { ref, provide } from "vue";
import StoreResource from "./components/StoreResource.vue";
import TheHeader from "./components/UI/TheHeader.vue";

export default {
    name: "App",
    components: {
        StoreResource,
        TheHeader,
    },
    setup() {
        let storeResources = ref([
            {
                id: "official-guide",
                title: "Ufficial Guide",
                description: "這是描述歐",
                link: "https://cn.vuejs.org/",
            },
            {
                id: "gooles",
                title: "Goole",
                description: "這是goole描述",
                link: "https://www.google.com.tw/",
            },
        ]);
        provide("storeResources", storeResources);
    },
};
</script>

<style>
* {
    /* box-sizing: border-box; */
    border: 0;
    margin: 0;
}
</style>
