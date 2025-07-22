<template>
  <div class="page">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="content">
      <!-- render todos component dynamically -->
      <Suspense>
        <template #default>
          <component :is="Todos" />
        </template>
        <template #fallback>
          <div class="loading">
            <span v-if="err" class="err">{{ err }}</span>
            <span v-else>please wait...</span>
          </div>
        </template>
      </Suspense>
      <!-- end of todo dynamic component -->
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
import Todos from "../components/Todos.vue";
import { onErrorCaptured, ref } from "vue";

const err = ref(null);

onErrorCaptured(() => {
  err.value = "Oops.. something went wrong";
});
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
.content .loading {
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 10px auto;
}
.loading span {
  margin: 50px auto;
  font-weight: bold;
  padding: 50px auto;
}
.loading .err {
  color: #df3333;
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
