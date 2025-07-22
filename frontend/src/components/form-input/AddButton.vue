<template>
  <button :type="props.type" class="btn btn-primary button">
    {{ props.text }}
  </button>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  text: {
    type: String,
    default: "submit",
  },
  type: {
    type: String,
    default: "submit",
  },
});
</script>

<style scoped>
.button {
  margin: 10px auto;
  width: 100%;
  height: 40px;
  text-transform: uppercase;
  font-weight: bold;
}
</style>
