<template>
  <form class="frm-add" @submit.prevent="todoStore.updateTodo(todoToBeUpdated)">
    <span class="close-modal text-danger" @click="closeModal">
      <FontAwesomeIcon icon="times" />
    </span>
    <h5>Edit Todo</h5>
    <div v-if="appStore.getError">
      <p class="text-danger">{{ appStore.getError }}</p>
    </div>
    <TitleTextField v-model="props.todoToBeUpdated.title" />
    <TextArea v-model="props.todoToBeUpdated.body" />
    <div class="like-todo">
      <label for="checkbox">I want to like this todo</label>
      <input type="checkbox" v-model="props.todoToBeUpdated.isLiked">
    </div>
    <AddButton text="update todo" type="submit" />
    <div v-if="todoStore.displayMessage">
      <p class="text-success">{{ todoStore.displayMessage }}</p>
    </div>
  </form>
</template>

<script setup>
import TitleTextField from "./TitleTextField.vue";
import TextArea from "./TextArea.vue";
import AddButton from "../form-input/AddButton.vue";
import { ref, defineEmits, defineProps } from "vue";
import { useTodoStore } from "../../store/todos";
import { useAppStore } from "../../store/app";

const todoStore = useTodoStore();
const appStore = useAppStore();
// emit and close modal form to parent
const emit = defineEmits(["hideEditModal"]);
const props = defineProps(["todoToBeUpdated"]);

const closeModal = () => {
  emit("hideEditModal");
};
</script>

<style scoped>
.like-todo {
  display: inline;
}
.like-todo input[type="checkbox"] {
  margin-left: 12px;
}
</style>
