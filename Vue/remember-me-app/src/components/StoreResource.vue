<template>
    <ul>
        <learn-resource v-for="item in storeResources" :key="item.id" :item="item"></learn-resource>
    </ul>
</template>

<script>
import { inject } from "vue";
import LearnResource from "./LearnResource.vue";
export default {
    components: {
        LearnResource,
    },
    setup() {
        const storeResources = inject("storeResources");
        return { storeResources };
    },
};
</script>
