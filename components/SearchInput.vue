<template>
  <div class="search-input-section">
    <input
        placeholder="search"
        class="input"
        type="text"
        :value="value"
        @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
  </div>
</template>

<script setup lang="ts">
  import { PropType } from "@vue/runtime-core";

  const props = defineProps({
    value: {
      type: String as PropType<string>,
      required: true,
      default: ''
    }
  })
</script>

<style scoped>
.search-input-section {
  .input {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid var(--border-detail-color);
    outline: 0;
    font-size: 1.3rem;
    color: var(--text-color);
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: var(--text-color);
      opacity: .5;
    }

    &:placeholder-shown ~ .form__label {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }
  }
}
</style>
