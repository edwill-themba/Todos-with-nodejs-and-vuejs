<template>
  <div class="page">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="content">
      <Todos />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
import Todos from "../components/Todos.vue";
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.sidebar {
  width: 25%;
  height: 900px;
  position: relative;
  /* background-color: #212529; */
}
.content {
  width: 75%;
  height: 900px;
  padding: 0px;
  margin: 0px;
}
@media (max-width: 750px) {
  .page {
    height: 900px;
  }
  .sidebar {
    width: 35%;
  }
  .content {
    width: 65%;
  }
}
</style>
