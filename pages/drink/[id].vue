<template>
  <section class="drink-page">
    <div class="drink-details">
      <h4 class="drink-name">{{ selectedDrink.strDrink }}</h4>

      <figure class="drink-img">
        <img :src="selectedDrink.strDrinkThumb" />
      </figure>

      <div class="drink-tags-container">
        <span
            class="tag"
            v-for="(tag, index) in selectedDrink.strTags"
            :key="index">
          {{ tag }}
        </span>
      </div>

      <div class="drink-instructions">
        <h3>Modo de preparo</h3>
        {{ selectedDrink.strInstructions }}
      </div>

      <div class="ingredients-container">
        <h3>Ingredientes</h3>
        <div class="ingredients">
          <span
              class="ingredient"
              v-for="(ingredient, index) in selectedDrink.ingredients"
              :key="index">
            {{ ingredient }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useCocktail } from "~/stores/cocktail";
  import { storeToRefs } from "pinia";

  const cocktailStore = useCocktail()
  const route = useRoute()

  const { selectedDrink } = storeToRefs(cocktailStore)

  onMounted(() => {
    cocktailStore.fetchDrinkDetail(route.params.id)
  })
</script>

<style scoped>
.drink-page {
  display: flex;
  justify-content: center;

  .drink-details {
    text-align: center;
    padding: 5px 10px 10px 10px;
    box-sizing: border-box;
    box-shadow: 7px 7px 13px 0px var(--bs-cards);
    border-radius: 5px;
    max-width: 300px;
    border-top: 4px solid var(--border-detail-color);

    .drink-img {
      margin: 0;
      box-sizing: border-box;

      > img {
        display: block;
        width: 100%;
        border-radius: 5px;
      }
    }

    .drink-tags-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      text-align: center;
      justify-content: space-evenly;
      padding: 10px;

      .tag {
        background-color: #bce1ab;
        border-radius: 3px;
        padding: 2px 5px;
        box-sizing: border-box;
      }
    }

    .ingredients-container {
      .ingredients {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
