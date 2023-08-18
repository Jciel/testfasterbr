<template>
  <section class="drinks-page">
    <h1 class="title">Drinks</h1>

    <div class="cards-container">
      <NuxtLink
          v-for="(drink, index) in drinks"
          :key="index"
          :to="`/drink/${drink.idDrink}`">
        <DrinkCard :drink="drink" />
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCocktail } from "~/stores/cocktail";
import { storeToRefs } from "pinia";

const cocktailStore = useCocktail()
const route = useRoute()

const { drinks, } = storeToRefs(cocktailStore)

onMounted(() => {
  const slug = (route.params.id).replace(/-/g, '/')
  cocktailStore.fetchDrinks(slug)
})

</script>

<style scoped>
.drinks-page {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;

  .title {
    padding: 20px 0 40px 0;
  }

  .cards-container {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, 200px);
    justify-content: center;
    grid-gap: 2rem;
  }
}
</style>
