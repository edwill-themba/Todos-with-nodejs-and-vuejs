<template>
  <div class="todo-item">
    <h3>
      <span>
        <FontAwesomeIcon icon="book" />
      </span>
      {{ todo.title }}
    </h3>
    <div class="todo-item-edit">
      <span class="edit-todo" @click="updateTodo(todo)">
        <FontAwesomeIcon icon="pencil" />
      </span>
      <span class="delete-todo" @click="removeTodo(todo.id)">
        <FontAwesomeIcon icon="trash" />
      </span>
      <span
        :class="[todo.isLiked === true ? 'like-todo' : 'not-like-todo']"
        @click="changeTodo(todo)"
      >
        <FontAwesomeIcon icon="heart" />
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
import { useTodoStore } from "../store/todos";

const props = defineProps(["todo"]);
const emits = defineEmits(["editTodo"]);

const todoStore = useTodoStore();
const likedTodo = ref(false);
// removes the selected todos
const removeTodo = (id) => {
  const delTodo = confirm("are you sure?");
  if (delTodo) {
    todoStore.deleteTodo(id);
  }
};
// change the heart icon in the user interface
const changeTodo = (todo) => {
  todo.isLiked = !todo.isLiked;
};
// emits the update todo event
const updateTodo = (todo) => {
  emits("editTodo", todo);
};
</script>

<style scoped>
.todo-item {
  box-shadow: 5px 5px 5px #111;
  padding: 10px;
  background: #212529;
  color: #212529;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.todo-item h3 {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
}
.todo-item h3 span svg {
  color: lime;
}
.todo-item .todo-item-edit {
  display: flex;
  justify-content: center;
  align-items: center;
}
.todo-item .todo-item-edit span {
  margin-left: 10px;
  cursor: pointer;
}
.todo-item .todo-item-edit .delete-todo svg {
  color: #d70e0e;
}
.todo-item .todo-item-edit .delete-todo svg:hover {
  color: #e0c0c0;
}
.todo-item .todo-item-edit .like-todo svg {
  color: #df0e69;
}
.todo-item .todo-item-edit .not-liked-todo svg {
  color: #fff;
}
</style>
