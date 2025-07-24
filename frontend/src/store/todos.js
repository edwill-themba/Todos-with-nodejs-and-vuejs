import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useAppStore } from "./app";
import axios from "axios";
import router from "../router/index";

export const useTodoStore = defineStore("todos", () => {
  // state
  const todos = ref(null); // all the todos
  const userTodos = ref(null); // specific user todos
  const appStore = useAppStore(); // initialize app store
  const message = ref(null); // for adding or updating to todos
  // getters
  const getAllTheTodos = computed(() => todos.value);
  const todoSize = computed(
    () => Array.isArray(todos.value) && todos.value?.length
  );
  const myTodo = computed(() => userTodos.value);
  const displayMessage = computed(() => message.value);
  // actions
  /**
   * all the todos
   */
  const allTheTodos = async () => {
    try {
      const response = await axios.get("/api/all_todos");
      todos.value = response.data.todos;
    } catch (err) {
      appStore.error = err;
      console.log(err);
    }
  };
  /**
   * all the todos of the auth user
   */
  const allMyTodos = async () => {
    try {
      const response = await axios.get("/api/todos");
      userTodos.value = response.data.userTodos;
      console.log(userTodos);
    } catch (err) {
      appStore.error = err;
    }
  };

  /**
   * adds a single todo
   * @param {} todo
   */
  const addTodo = async (todo) => {
    appStore.loading = true;
    try {
      const response = await axios.post("/api/todo", {
        title: todo.title,
        body: todo.body
      });
      console.log(response);
      appStore.loading = false;
      // adds to UI
      userTodos.value.unshift(todo);
      message.value = "todo was added success fully";
    } catch (err) {
      appStore.loading = false;
      console.log(err);
      appStore.error = err.response.data.message;
      todo.title = "";
      todo.body = "";
    }
  };
  /**
   * delete the selected todo
   * @param {*} id
   */
  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`/api/todo/${id}`);
      // removes todo to ui
      userTodos.value = userTodos.value.filter((t) => t.id !== id);
      console.log(response);
    } catch (err) {
      appStore.error = err;
    }
  };
  /**
   * updates the selected todo
   * @param {*} todo
   */
  const updateTodo = async (todo) => {
    appStore.loading = true;
    try {
      const response = await axios.put(`/api/todo/${todo.id}`, {
        title: todo.title,
        body: todo.body,
        isLiked: todo.isLiked
      });
      appStore.loading = false;
      message.value = "todo is successfully updated";
      console.log(response);
    } catch (err) {
      appStore.loading = false;
      appStore.error = err;
      todo.title = "";
      todo.body = "";
      todo.isLiked = "";
    }
  };

  return {
    // states
    todos,
    userTodos,
    message,
    //getters
    displayMessage,
    todoSize,
    getAllTheTodos,
    myTodo,
    // actions
    allTheTodos,
    allMyTodos,
    addTodo,
    deleteTodo,
    updateTodo
  };
});
