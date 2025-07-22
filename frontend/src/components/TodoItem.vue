<template>
  <div class="box">
    <h4>{{ todo.title }}</h4>
    <p>{{ todo.body }}</p>
    <span :class="[todo.isLiked === true ? 'like-todo' : 'not-like-todo']">
      <FontAwesomeIcon icon="heart" />
    </span>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["todo"]);
</script>

<style scoped>
.box {
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #111;
  width: 235px;
  height: 140px;
  margin-bottom: 20px;
  margin-left: 5px;
  position: relative;
}
.box h4 {
  font-weight: bold;
  font-size: 17px;
}
.box p {
  font-size: 14px;
  font-weight: 400;
}
.box span {
  position: absolute;
  right: 15px;
  bottom: 10px;
}
.like-todo svg {
  color: #df0e69;
}
.not-like-todo svg {
  color: #111;
}
@media (max-width: 750px) {
  .box {
    width: 200px;
  }
  .box h4 {
    font-size: 13px;
  }
  .box p {
    font-size: 11.5px;
    font-weight: bold;
  }
}
</style>
