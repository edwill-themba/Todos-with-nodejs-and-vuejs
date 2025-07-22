import { defineStore } from "pinia";
import axios from "axios";
import { ref, computed } from "vue";
import { useAppStore } from "./app";
import router from "../router/index";

export const useAuthStore = defineStore("auth", () => {
  // state
  const userName = ref(localStorage.getItem("user")) || ref(null);
  const appStore = useAppStore();
  //getters
  const getUserName = computed(() => userName.value);
  const isLoggedIn = computed(() => (userName.value === null ? false : true));
  // actions
  /**
   * register and add new user
   * @param {*} user
   */
  const registerUser = async (user) => {
    appStore.loading = true;
    try {
      const response = await axios.post(
        "/api/auth/signUp",
        {
          name: user.name,
          email: user.email,
          password: user.password
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      console.log(response);
      appStore.loading = false;
      router.push({ path: "/signIn" });
    } catch (error) {
      appStore.error = error.response.data.message;
      appStore.loading = false;
      user.name = "";
      user.email = "";
      user.password = "";
    }
  };
  /**
   * logs the user in with valid credentials
   * @param {*} user
   */
  const login = async (user) => {
    appStore.loading = true;
    try {
      const response = await axios.post(
        "/api/auth/signIn",
        {
          email: user.email,
          password: user.password
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      userName.value = response.data.user.name;
      localStorage.setItem("user", userName.value);
      appStore.loading = false;
      router.push({ path: "/userTodos" });
    } catch (error) {
      appStore.error = error.response.data.message;
      appStore.loading = false;
      console.log(error);
      user.email = "";
      user.password = "";
    }
  };
  /**
   * logs the user out
   */
  const signOut = async () => {
    try {
      const response = await axios.post(
        "/api/auth/signOut",
        {},
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      userName.value = null;
      localStorage.removeItem("user");
      router.push({ path: "/signIn" });
    } catch (error) {
      appStore.error = error;
      console.log(error);
      userName.value = null;
      localStorage.removeItem("user");
      router.push({ path: "/signIn" });
    }
  };
  return {
    // state
    userName,
    //getters
    getUserName,
    isLoggedIn,
    // actions
    registerUser,
    login,
    signOut
  };
});
