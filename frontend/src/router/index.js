import * as VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";
import NotFound from "../views/404.vue";
import SignOut from "../views/SignOut.vue";
import SignUp from "../views/SignUp.vue";
import UserTodos from "../views/UserTodos.vue";
import { useAuthStore } from "../store/auth";

const routes = [
  {
    path: "/",
    component: Home,
    name: "home"
  },
  {
    path: "/signIn",
    component: SignIn,
    name: "signIn"
  },
  {
    path: "/signUp",
    component: SignUp,
    name: "signUp"
  },
  {
    path: "/userTodos",
    component: UserTodos,
    name: "userTodos",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    name: "notFound"
  },
  {
    path: "/signOut",
    component: SignOut,
    name: "signOut",
    meta: {
      requiresAuth: true
    }
  }
];

const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHistory()
});

router.beforeEach((to, from) => {
  const authStore = useAuthStore();
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: "/signIn",
      // save the location we were at to come back later
      query: { redirect: to.fullPath }
    };
  }
});
export default router;
