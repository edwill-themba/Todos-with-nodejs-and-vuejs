<template>
  <div class="container wrapper">
    <div class="login-form">
      <form class="frm-login" @submit.prevent="authStore.registerUser(user)">
        <FormHeader title="Registration Form" />
        <TextField
          icon="user"
          type="input"
          v-model="user.name"
          name="username"
          placeholder="enter user name"
          label="username"
        />
        <TextField
          icon="envelope"
          type="email"
          v-model="user.email"
          name="email"
          placeholder="enter user email"
          label="email address"
        />
        <TextField
          icon="lock"
          type="password"
          v-model="user.password"
          name="password"
          placeholder="enter your password"
          label="enter password"
        />
        <br />
        <Button text="register" />
      </form>
      <div v-if="appStore.getError">
        <Error :error="appStore.getError" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import TextField from "../components/form-input/TextField.vue";
import Button from "../components/form-input/Button.vue";
import Error from "../components/Error.vue";
import FormHeader from "../components/form-input/FormHeader.vue";

import { useAuthStore } from "../store/auth";
import { useAppStore } from "../store/app";
const user = ref({
  name: null,
  email: null,
  password: null,
});
const error = ref(null);
const authStore = useAuthStore();
const appStore = useAppStore();

onMounted(() => {
  if (authStore.isLoggedIn) {
    router.push({ path: "/userTodos" });
  }
});
</script>
