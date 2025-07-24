<template>
  <button :type="props.type" class="btn btn-primary button">
    {{ appStore.isLoading ? "wait..." : props.text }}
  </button>
</template>

<script setup>
import { defineProps } from "vue";
import { useAppStore } from "../../store/app";

const appStore = useAppStore();

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
