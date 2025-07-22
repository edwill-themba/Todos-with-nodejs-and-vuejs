<template>
  <div class="settings">
    <h3>
      <span><FontAwesomeIcon icon="gears" /></span>
      {{ props.text }}
    </h3>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  text: {
    type: String,
    default: "Settings",
  },
});
</script>

<style scoped>
.settings h3 span {
  color: navy;
}
</style>
