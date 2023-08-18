<template>
  <div>
<!--    <NuxtWelcome />-->
    <NuxtPage />
  </div>
</template>

<script setup>
</script>

<style>

:root {
  --text-color: #170132;
  --bg-primary: #fcfcfc;
  --border-detail-color: #361542;
  --bs-cards: rgba(50, 50, 50, 0.22);
}

body {
  background-color: var(--bg-primary);
  color: var(--text-color) ;
  font-family: sans-serif;
  padding: 0 20px 0 20px;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  background-color: transparent;
  color: var(--text-color) ;
}
</style>
