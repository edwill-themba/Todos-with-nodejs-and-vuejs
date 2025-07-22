<template>
  <div class="settings">
    <h3>
      <span><FontAwesomeIcon icon="scale-balanced" /></span>
      {{ props.text }}
    </h3>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  text: {
    type: String,
    default: "Todo Size",
  },
});
</script>

<style scoped>
.settings h3 span {
  color: #221122;
}
</style>
