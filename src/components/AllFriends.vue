<template>
	<!-- <div class="container"> -->
	  <h1 class="text-center">Les Amis</h1>
	  <ul class="list-group">
		<!--! Avec v-for on boucle sur le tableau lesAmis -->
		<!--! Puis avec les v-bind on injecte les données de lesAmis dans les props -->
		<!-- * On vient de créer un composant dynamique -->
		<un-ami 
		v-for="unAmi in lesAmis" 
		:key="unAmi.id" v-on:bind="id"
		:leNom="unAmi.name" 
		:lePhone="unAmi.phone"
		:leMail="unAmi.email"
		:premium="unAmi.premium" v-on:mon-event-premium="afficherStatusPremium()">
		</un-ami>
		<!-- <un-ami leNom="Steven Seagal" lePhone="1234567" leMail="steven@seagal.com" premium="1"></un-ami>
		<un-ami leNom="Gérard Menvuça" lePhone="0987654" leMail="gérard@menvuca.com" premium="0"></un-ami>
		<un-ami lePhone="0987654" leMail="eric@reptile.com" premium="10000"></un-ami> -->
	  </ul>
	<!-- </div> -->
  </template>

<script lang='js'>
import { defineComponent } from 'vue'
import UnAmi from './UnAmi.vue'
export default defineComponent({
  components: {
    UnAmi
  },

	data() {
		return {
			lesAmis: [
        {
            id: 'lasticot',
            name: 'COCO L ASTICOT',
            phone: '01234 5678 991',
            email: 'coco@lasticot.com',
            premium: true,
        },
        {
            id: 'janine',
            name: 'Janine DeLavega',
            phone: '09876 543 221',
            email: 'janine@delavega.com',
            premium: true,
        },
        {
            id:'jojo',
            name:"jojoLeBarjo",
            phone:'123 12346 24',
            email:'jojo@barjo.com',
            premium: true,
        },
        {
            id:'kimonoSurUnFrigo',
            name:"Steven Seagal",
            phone:'+338765477',
            email:'steven@seagal.com',
            premium: true,
        },
        {
            id:'kimonoSurUnFrigo',
            name:"Steven Seagal",
            phone:'+338765477',
            email:'steven@seagal.com',
            premium: true,
        }, 
    ],
		};
	},
  methods: {
    afficherStatusPremium(leIdDansUnAmi){
      const unAmiIdentified = 
      alert('politique sociale');
    },
  },
});
</script>

<style scoped lang="css">
</style>