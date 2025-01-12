<template>
    <h5 class="display-3 text-center">哥布林清單</h5>
    <friend-card></friend-card>
    <friend-card></friend-card>
    <hr />
    <h5 class="display-3 text-center">示範slot</h5>
    <child-component>
        <template v-slot:name>中高領刷毛上衣</template>
        <template v-slot:price>$390</template>
        <template v-slot:material>$材質:67%聚酯纖維、33%棉</template>
    </child-component>
</template>
<script></script>
<style></style>
