<template>
  <div>
    <Navbar v-if="appStore.getCurrentPage !== 'notFound'" />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import { useAppStore } from "./store/app.js";

const appStore = useAppStore();
console.log("Current page is" + appStore.getCurrentPage);
</script>

<style></style>
