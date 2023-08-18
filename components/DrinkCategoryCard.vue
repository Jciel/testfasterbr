<template>
  <div class="category-card">
    {{ name }}
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    name: {
      type: String,
      required: true
    }
  })
</script>

<style scoped>
  .category-card {
    text-align: center;
    padding: 30px 0 30px 0;
    box-shadow: 7px 7px 13px 0px var(--bs-cards);
    border-radius: 5px;
    transition: all 0.3s ease-out;
    width: 200px;
    border-left: 4px solid var(--border-detail-color);

    &:hover {
      transform: translateY(-5px);
      cursor: pointer;
    }
  }
</style>
