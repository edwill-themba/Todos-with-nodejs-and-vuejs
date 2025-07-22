<template>
  <button :type="props.type" class="btn-login" :disabled="appStore.loading">
    {{ appStore.loading ? "wait..." : props.text }}
  </button>
</template>

<script setup>
import { defineProps } from "vue";
import { useAppStore } from "../../store/app";

const appStore = useAppStore();

const props = defineProps({
  text: {
    type: String,
    default: "no text",
  },
  type: {
    type: String,
    default: "submit",
  },
});
</script>

<style scoped>
.btn-login {
  width: 100%;
  height: 40px;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 10px;
  background: #212529;
  text-transform: uppercase;
  transition: 0.5s ease;
  font-weight: 600;
}
.btn-login:hover {
  background: transparent;
  color: #212529;
  border: 2px solid #212529;
}
</style>
