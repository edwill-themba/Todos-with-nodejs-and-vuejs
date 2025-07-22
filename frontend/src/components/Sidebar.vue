<template>
  <div class="sidebar-content">
    <div class="img">
      <img :src="todo" alt="our-logo" />
      <h4 class="text">Todo List</h4>
    </div>
    <h2 class="date">{{ today }}</h2>
    <Settings text="Settings" />
    <TodoSize text="Todos" />
  </div>
</template>

<script setup>
import moment from "moment";
import todo from "../assets/todo.png";
import Settings from "./sidebar-components/Settings.vue";
import TodoSize from "./sidebar-components/TodoSize.vue";

const today = moment().format("MMMM Do YYYY, h:mm a");
</script>

<style scoped>
.sidebar-content {
  width: 100%;
  height: 100%;
  padding: 20px;
  color: #212529;
}
.sidebar-content .img {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px auto;
}
.sidebar-content .img h4 {
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
}
.sidebar-content .img img {
  width: 50px;
  height: 50px;
}
.sidebar-content .date {
  font-size: 18px;
  padding: 10px;
  margin: 10px 20px;
  font-weight: bold;
}
@media (max-width: 750px) {
  .sidebar-content .img h4 {
    font-size: 15px;
  }
  .sidebar-content .date {
    font-size: 13px;
    text-align: center;
    margin-top: 10px;
  }
}
</style>
