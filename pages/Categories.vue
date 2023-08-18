<template>
  <section class="categories-page">
    <h1 class="title">Categorias</h1>

    <div class="cards-container">
      <NuxtLink
          v-for="(drinksCategory, index) in cocktailStore.getCategories"
          :key="index"
          :to="`/category/${slugCategory(drinksCategory.strCategory)}`">
        <DrinkCategoryCard :name="drinksCategory.strCategory" />
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useCocktail } from "~/stores/cocktail";

  const cocktailStore = useCocktail()
  const slugCategory = (categoryName: string) => categoryName.replace(/\s/g, '_').replace(/\//, '-')

  cocktailStore.fetchCategories()
</script>

<style scoped>
.categories-page {
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
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
}
</style>
