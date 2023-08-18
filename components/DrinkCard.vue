<template>
  <div class="drink-card">
    <figure class="drink-img">
      <img :src="drink.strDrinkThumb">
    </figure>
    <h4 class="drink-name">{{ drink.strDrink }}</h4>
  </div>
</template>

<script setup lang="ts">
import { Drink } from "~/utils/Types";
import { PropType } from "@vue/runtime-core";

  const props = defineProps({
    drink: {
      type: Object as PropType<Drink>,
      required: true
    }
  })
</script>

<style scoped>
.drink-card {
  text-align: center;
  padding: 5px 10px 5px 10px;
  box-sizing: border-box;
  box-shadow: 7px 7px 13px 0px var(--bs-cards);
  border-radius: 5px;
  transition: all 0.3s ease-out;
  width: 200px;
  border-top: 4px solid var(--border-detail-color);

  .drink-img {
    margin: 0;

    > img {
      display: block;
      width: 100%;
      border-radius: 5px;
    }
  }

  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
}
</style>
