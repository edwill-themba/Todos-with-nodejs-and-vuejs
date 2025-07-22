<template>
  <form class="frm-add" @submit.prevent="todoStore.addTodo(todo)">
    <span class="close-modal text-danger" @click="closeModal">
      <FontAwesomeIcon icon="times" />
    </span>
    <h5>Add Todo</h5>
    <div v-if="appStore.getError" class="error-p">
      <p class="text-danger">{{ appStore.getError }}</p>
    </div>
    <TitleTextField v-model="todo.title" placeholder="Enter Todo Title" />
    <TextArea v-model="todo.body" placeholder="Enter Todo Description Here..." />
    <AddButton text="add todo" type="submit" />
    <div v-if="todoStore.displayMessage">
      <p class="text-success">{{ todoStore.displayMessage }}</p>
    </div>
  </form>
</template>

<script setup>
import TitleTextField from "./TitleTextField.vue";
import TextArea from "./TextArea.vue";
import AddButton from "../form-input/AddButton.vue";
import { ref, defineEmits } from "vue";
import { useTodoStore } from "../../store/todos";
import { useAppStore } from "../../store/app";

const todo = ref({
  title: "",
  body: "",
});
const todoStore = useTodoStore();
const appStore = useAppStore();
// emit and close modal form to parent
const emit = defineEmits(["hideModal"]);
const closeModal = () => {
  emit("hideModal");
};
</script>

<style scoped></style>
