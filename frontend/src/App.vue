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
</script>

<style></style>
