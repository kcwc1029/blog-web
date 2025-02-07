<!-- TODO: App.vue的template -->
<template>
	<div class="container mt-5">
		<h1>Teleport 範例</h1>
		<button class="btn btn-primary" @click="toggleModal">顯示彈出視窗</button>

		<!-- Teleport 元件 -->
		<Teleport to="body">
			<div v-if="isModalVisible" class="modal fade show" tabindex="-1" role="dialog" style="display: block; background-color: rgba(0, 0, 0, 0.5)">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">彈出視窗</h5>
							<button type="button" class="btn-close" @click="toggleModal"></button>
						</div>
						<div class="modal-body">
							<p>此內容已被傳送到 body 節點中。</p>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" @click="toggleModal">關閉</button>
						</div>
					</div>
				</div>
			</div>
		</Teleport>
	</div>
</template>

<!-- TODO: App.vue的script -->
<script setup>
import { ref } from "vue";
const isModalVisible = ref(false);
const toggleModal = () => {
	isModalVisible.value = !isModalVisible.value;
};
</script>
<style></style>
