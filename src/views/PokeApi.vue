<template>
	<h1>BIENVENUE SUR POKE API</h1>
	<ul>
		<li v-for="(pokemon , index) in totalVuePackages" > 
			{{ index }} - {{ pokemon.name }} 
		</li>
	</ul>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'PokeApi',
	components: {
	},
	props: {
		// v-model
		modelValue: {
			default: '',
		},
	},
	emits: {
		// v-model event with validation
		'update:modelValue': (value) => value !== null,
	},
	data() {
		return {
			totalVuePackages:null
		};
	},
	computed: {
		value: {
			get () {
				return this.modelValue;
			},
			set (value) {
				this.$emit('update:modelValue', value);
			},
		},
	},
	watch: {
		modelValue: {
			async handler (_newValue, _oldValue) {
				// do something
			},
			immediate: true
		},
	},
	beforeMount() {
	},
	mounted() {
	},
	updated() {
	},
	beforeUnmount() {
		// stop the wacher on modelValue
		this.$watch('modelValue', () => {}, {});
	},
	created() {
		// GET request using fetch with error handling
		fetch("https://pokeapi.co/api/v2/pokemon/")
			.then(async response => {
				const data = await response.json();
				// check for error response
				if (!response.ok) {
					// get error message from body or default to response statusText
					const error = (data && data.message) || response.statusText;
					return Promise.reject(error);
				}

				this.totalVuePackages = data.results;
			})
			.catch(error => {
				this.errorMessage = error;
				console.error("There was an error!", error);
			});
	},
	methods: {
	},
});
</script>

<style scoped lang="css">
</style>