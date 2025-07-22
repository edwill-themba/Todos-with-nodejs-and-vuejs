<template>
  <div class="container wrapper">
    <div class="login-form">
      <form class="frm-login" @submit.prevent="authStore.login(user)">
        <FormHeader title="Login Form" />
        <TextField
          icon="user"
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
        <Button type="submit" text="sign in" />
      </form>
      <div v-if="appStore.getError" class="error-wrapper">
        <Error :error="appStore.getError" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// #212529
import Error from "../components/Error.vue";
import TextField from "../components/form-input/TextField.vue";
import Button from "../components/form-input/Button.vue";
import FormHeader from "../components/form-input/FormHeader.vue";

import { useAuthStore } from "../store/auth";
import { useAppStore } from "../store/app";

import router from "../router/index";

const user = ref({
  email: null,
  password: null,
});

const appStore = useAppStore();
const authStore = useAuthStore();

onMounted(() => {
  if (authStore.isLoggedIn) {
    router.push({ path: "/userTodos" });
  }
});
</script>
