<template>
	<h1>Bienvenue sur la météo</h1>
	
	<section class="vh-200">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-8 col-lg-6 col-xl-4">
        <div class="card shadow-0 border">
          <div class="card-body p-4">
            <h4 class="mb-1 sfw-normal">{{ totalVuePackages.city_info.name }}, {{ totalVuePackages.city_info.country }}</h4>
            <p class="mb-2">Température Actuelle : <strong>{{ totalVuePackages.current_condition.tmp }}°C</strong></p>
            <p>Max: <strong>{{ totalVuePackages.fcst_day_0.tmax }} °C</strong>, Min: <strong>{{ totalVuePackages.fcst_day_0.tmin }} °C</strong></p>
            <div class="d-flex flex-row align-items-center">
              <p class="mb-0 me-4">{{ totalVuePackages.current_condition.condition }}</p>
			  <img v-bind:src="totalVuePackages.fcst_day_4.icon" alt="logo meteo">
              <i class="fas fa-cloud fa-3x" style="color: #eee;"></i>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</section>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'MeteoApi',
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
			totalVuePackages:null,

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
	},
	created() {
		// GET request using fetch with error handling
		fetch("https://prevision-meteo.ch/services/json/toulouse")
			.then(async response => {
				const data = await response.json();
				console.log(data)
				// check for error response
				if (!response.ok) {
					// get error message from body or default to response statusText
					const error = (data && data.message) || response.statusText;
					return Promise.reject(error);
				}
				this.totalVuePackages = data;
			})
			.catch(error => {
				this.errorMessage = error;
				console.error("There was an error!", error);
			});
	},
});
</script>

<style scoped lang="css">
</style>