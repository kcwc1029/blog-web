import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const usePokemonStore = defineStore("pokemon", () => {
	const pokemon = ref(null);
	const isLoading = ref(false);
	const error = ref(null);

	const fetchPokemon = async (name) => {
		isLoading.value = true;
		error.value = null;
		try {
			const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
			console.log(response);
			pokemon.value = response.data;
		} catch (e) {
			error.value = "找不到你要的寶可夢";
		} finally {
			isLoading.value = false;
		}
	};

	return { pokemon, isLoading, error, fetchPokemon };
});
