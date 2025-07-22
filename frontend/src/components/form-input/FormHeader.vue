<template>
  <h4 class="form-heading">{{ props.title }}</h4>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Login Form",
  },
});
</script>

<style scoped>
.form-heading {
  font-weight: bold;
  width: 100%;
  border-bottom: 1px solid #212529;
  padding: 5px 7px;
}
</style>
