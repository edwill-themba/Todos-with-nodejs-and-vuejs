<template>
  <div class="todos-page">
    <div v-if="appStore.getError">
      <Error :error="appStore.getError" />
    </div>
    <div class="todo-heading">
      <h1 class="h1">Todos</h1>
    </div>
    <div class="todos">
      <div v-for="(todo, index) in todos" :key="index">
        <TodoItem :todo="todo" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

import { useTodoStore } from "../store/todos";
import { useAppStore } from "../store/app";

import Error from "../components/Error.vue";
import TodoItem from "./TodoItem.vue";

const todoStore = useTodoStore();
const appStore = useAppStore();

todoStore.allTheTodos(); // retrieves all todos from the database

const todos = computed(() => todoStore.todos);
//console.log(todoStore.paginatedTodos);
</script>

<style scoped>
.todos-page {
  padding: 10px 20px;
  margin: 0px auto;
  position: relative;
  width: 100%;
  height: 100%;
}
.todo-heading {
  width: 100%;
  height: 70px;
  border-radius: 0px;
  border-bottom: 2px solid #212529;
  margin: 10px auto 25px auto;
  padding: 10px;
}
.todo-heading h1 {
  text-transform: uppercase;
  font-weight: bold;
  color: #212529;
}
.todos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.todos-not-found {
  text-align: center;
  padding: auto;
  margin: 25px auto;
}
.todos-not-found h3 {
  text-transform: uppercase;
}
@media (max-width: 750px) {
  .todo-heading h1 {
    font-size: 18px;
  }
}
</style>
