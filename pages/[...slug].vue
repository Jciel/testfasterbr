<template>
  <section class="not-found-page">
    <span class="title">404</span>

    <p>Infelizmente a p�gina que voc� esta tentando acessar no existe</p>
    <p class="sug">Deixamo abaixo uma sugest�o de drink</p>

    <div class="cards-container">
      <NuxtLink :to="`/drink/${selectedDrink.idDrink}`">
        <DrinkCard :drink="selectedDrink" />
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useCocktail } from "~/stores/cocktail";
  import { storeToRefs } from "pinia";

  const cocktailStore = useCocktail()

  const { selectedDrink } = storeToRefs(cocktailStore)

  cocktailStore.fetchRandomDrink()
</script>

<style scoped>
.not-found-page {
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 44px;
    font-weight: bold;
    padding: 50px 0;
  }

  > p {
    margin: 0;

    &.sug {
      margin-bottom: 40px;
    }
  }

  .cards-container {
    display: grid;
    width: 100%;
    justify-content: center;
  }
}
</style>
