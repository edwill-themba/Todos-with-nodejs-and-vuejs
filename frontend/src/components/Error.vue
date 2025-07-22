<template>
  <div class="error">
    <div class="alert alert-danger text-center error">
      <p>{{ props.error }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["error"]);
</script>

<style scoped>
.error p {
  padding-top: 10px;
  font-size: 13px;
  font-weight: 600;
}
</style>
