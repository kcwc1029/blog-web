<template>
	<div class="container mt-5">
		<h1 class="text-center text-primary mb-4">寶可夢查詢系統</h1>
		<div class="row justify-content-center">
			<div class="col-md-6">
				<!-- 輸入框與查詢按鈕 -->
				<div class="input-group mb-3">
					<input v-model="pokemonName" type="text" class="form-control" placeholder="輸入寶可夢名稱（如：pikachu）" />
					<button class="btn btn-primary" @click="pokemonStore.fetchPokemon(pokemonName)" :disabled="pokemonStore.isLoading">查詢</button>
				</div>

				<!-- 載入狀態 -->
				<div v-if="pokemonStore.isLoading" class="text-center mt-4">
					<div class="spinner-border text-primary" role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
				</div>

				<!-- 錯誤訊息 -->
				<div v-if="pokemonStore.error" class="alert alert-danger mt-4 text-center">
					{{ pokemonStore.error }}
				</div>

				<!-- 寶可夢資訊 -->
				<div v-if="pokemonStore.pokemon && !pokemonStore.error" class="card mt-4 shadow-sm">
					<img :src="pokemonStore.pokemon?.sprites?.front_default" class="card-img-top" alt="寶可夢圖片" />

					<div class="card-body">
						<h2 class="card-title text-center text-success">
							{{ pokemonStore.pokemon.name }}
						</h2>
						<p class="card-text">
							<strong>編號：</strong> {{ pokemonStore.pokemon.id }}<br />
							<strong>身高：</strong> {{ pokemonStore.pokemon.height }}<br />
							<strong>體重：</strong> {{ pokemonStore.pokemon.weight }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { usePokemonStore } from "@/stores/usePokemonStore";
const pokemonStore = usePokemonStore();
const pokemonName = ref("");
</script>

<style></style>
