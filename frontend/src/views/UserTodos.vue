<template>
  <div>
    <div class="container">
      <div class="user-todos">
        <h1>My Todos</h1>
        <h3>
          {{ authStore.getUserName }} ,you have
          {{ todoStore.myTodo && todoStore.myTodo.length }} to todo(s) currently
        </h3>
        <div class="add-todo">
          <AddTodoButton type="button" text="add todo" @click="showAddModal" />
        </div>
        <div
          class="user-todos-items"
          v-for="(todo, index) in todoStore.myTodo"
          :key="index"
        >
          <UserTodoItem v-bind:todo="todo" v-on:editTodo="updateTodo" />
        </div>
      </div>
    </div>
    <!-- add todo modal -->
    <teleport to="#add-todo-modal">
      <transition name="todo-modal">
        <div class="show-modal" v-if="showModal">
          <AddTodo v-on:hideModal="closeModal" />
        </div>
      </transition>
    </teleport>
    <!-- update todo modal -->
    <teleport to="#update-todo-modal">
      <transition name="todo-modal">
        <div class="show-edit-modal" v-if="editModal">
          <EditTodo
            :todoToBeUpdated="todoToBeUpdated"
            v-on:hideEditModal="closeEditModal"
          />
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>
import { useAuthStore } from "../store/auth";
import { useTodoStore } from "../store/todos";
import Error from "../components/Error.vue";
import AddTodoButton from "../components/form-input/AddButton.vue";
import UserTodoItem from "../components/UserTodoItem.vue";
import AddTodo from "../components/modals/AddTodo.vue";
import EditTodo from "../components/modals/EditTodo.vue";
import { ref } from "vue";

const authStore = useAuthStore();
const todoStore = useTodoStore();
const showModal = ref(false); // add modal
const editModal = ref(false); // update modal
const myTodos = ref([]);
const todoToBeUpdated = ref(null); // todo needed to be edited
// shows add todo modal form
const showAddModal = () => {
  showModal.value = true;
};
// hides add todo modal form
const closeModal = () => {
  showModal.value = false;
};
// calls all the todos belongs to the user
todoStore.allMyTodos();
myTodos.value = todoStore.myTodo;

const updateTodo = (todo) => {
  todoToBeUpdated.value = todo;
  editModal.value = true;
};
//hides the edit modal
const closeEditModal = () => {
  editModal.value = false;
};
</script>

<style scoped>
.user-todos {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.user-todos h1 {
  margin: 30px 15px;
  text-transform: uppercase;
  font-weight: 900;
}
.user-todos h3 {
  margin: -10px 15px;
  text-transform: capitalize;
  font-weight: 700;
  color: #212529;
}
.user-todos .add-todo {
  padding: 20px 10px;
}
/** add todo modal */
.show-modal {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(194, 187, 187, 0.348);
  transform: translateX(0);
  /*left: 0; */
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 99;
}
/** transition todo modal */
.todo-modal-enter-active {
  transition: all 0.3s ease-out;
}

.todo-modal-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.todo-modal-enter-from,
.todo-modal-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
/** end transition */
.user-todos-items {
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
}

/** edit modal */
.show-edit-modal {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(194, 187, 187, 0.348);
  transform: translateX(0);
  /*left: 0; */
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 99;
}
</style>
