<script setup>
// import AllFriends from './components/AllFriends.vue'
import Header from './components/Header.vue'
</script>

<template>
<header>
  <Header></Header>
</header>
  <router-link to="/home"><p>LIEN VERS HOME</p></router-link>
  <router-link to="/poke"><p>LIEN VERS POKEDEX</p></router-link>
  <router-link to="/meteo"><p>LIEN VERS METEO</p></router-link>
  <router-view></router-view>
  <!-- <AllFriends></AllFriends> -->
</template>

<style scoped>
.main {
  background-color: aquamarine;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}</style>
