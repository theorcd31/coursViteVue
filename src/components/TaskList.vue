<template>
	<div class="container">
        <div class="card text-center">
            <div class="card-body">
				<h1>Esta la taska </h1>
                <p class="card-text">Ajouter des Task</p>
                <input v-model="valeurDeInput" class="form-control" type="text" />

                <button v-on:click="ajouterTask" type="button" class="btn btn-primary mt-2">Ajouter</button>
            </div>
            <div class="card-footer text-muted">
                <h5>Ma Liste</h5>
                <ul>
                    <li v-for="uneTask in tab">{{ uneTask }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'TaskList',
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
			valeurDeInput : '',
			tab : [],
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
	methods: {
		ajouterTask(){
			this.tab.push(this.valeurDeInput);
			console.log(this.tab)
		}
	},
});
</script>

<style scoped lang="css">
</style>