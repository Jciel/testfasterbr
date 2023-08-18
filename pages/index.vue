<template>
  <section class="index-page">
    <div class="search-bar-container">
      <nav class="navbar">
        <NuxtLink to="/categories">Categorias</NuxtLink>
      </nav>

      <SearchInput
          @update:modelValue="searchCharacter"
          :value="actualSearch"></SearchInput>
    </div>

    <div class="list-search-drinks">
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
  import { ref } from "@vue/reactivity";
  import { useCocktail } from "~/stores/cocktail";
  import { storeToRefs } from "pinia";

  const cocktailStore = useCocktail()

  const { drinks, } = storeToRefs(cocktailStore)
  const actualSearch = ref<string>('')

  const searchCharacter = debounce((input: string) => {
    cocktailStore.searchCocktail(input)
    actualSearch.value = input
  }, 500)
</script>

<style scoped>
.index-page {
  max-width: 900px;
  display: block;
  margin: auto;

  .search-bar-container {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 50px 0;

    .navbar {
      align-self: end;
    }
  }

  .list-search-drinks {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, 200px);
    justify-content: center;
    grid-gap: 2rem;
  }
}
</style>
