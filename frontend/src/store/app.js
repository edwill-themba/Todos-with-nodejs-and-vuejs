import { defineStore } from "pinia";
import { ref, computed } from "vue";
import router from "../router/index";

export const useAppStore = defineStore("app", () => {
  // state
  const error = ref(null);
  const loading = ref(false);
  const currentPage = ref(router.currentRoute);
  // getters
  // get the current error value
  const getError = computed(() => error.value);
  const isLoading = computed(() => loading.value);
  const getCurrentPage = computed(() => currentPage.value.name);
  // actions

  return {
    // state
    error,
    loading,
    currentPage,
    // getters
    getError,
    isLoading,
    getCurrentPage
    // actions
  };
});
