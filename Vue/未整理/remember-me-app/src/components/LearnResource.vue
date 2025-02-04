<template>
    <li class="list-group-item mb-4 shadow-sm border-0">
        <div class="card p-3">
            <header class="d-flex justify-content-between align-items-center">
                <h3 class="h5 mb-0">{{ item.title }}</h3>
                <button class="btn btn-outline-danger btn-sm" @click="$emit('delete')">刪除</button>
            </header>
            <hr class="my-3" />
            <p class="text-muted">{{ item.description }}</p>
            <nav>
                <a :href="item.link" class="btn btn-primary btn-sm" target="_blank"> 查看連結 </a>
            </nav>
        </div>
    </li>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
};
</script>
<style></style>
