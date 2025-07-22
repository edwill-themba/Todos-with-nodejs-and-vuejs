<template>
  <div class="container">
    <div class="logout">
      <div v-if="appStore.getError">
        <Error :error="appStore.getError" />
      </div>
      <div v-else>
        <h1>You have successfully logged Out </h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "../store/auth";
import { useAppStore } from "../store/app";
import Error from "../components/Error.vue";

const authStore = useAuthStore();
const appStore = useAppStore();
</script>

<style scoped>
.logout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
}
.logout div h1 {
  font-weight: 900;
  text-transform: capitalize;
}
</style>