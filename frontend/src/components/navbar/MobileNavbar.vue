<template>
  <div class="mobile-menu-list" v-if="props.toggleMobileMenu" @click="hideMenu">
    <ul class="menu">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li v-if="!authStore.isLoggedIn">
        <router-link to="/signIn">Sign In</router-link>
      </li>
      <li v-if="!authStore.isLoggedIn">
        <router-link to="/signUp">Sign Up</router-link>
      </li>
      <li class="nav-item" v-if="authStore.isLoggedIn">
        <router-link to="/userTodos">My Todos</router-link>
      </li>
      <li class="nav-item dropdown" v-if="authStore.isLoggedIn">
        <router-link
          class="nav-link dropdown-toggle user-name"
          to="#"
          data-bs-toggle="dropdown"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {{ authStore.getUserName }}
        </router-link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <router-link class="dropdown-item" to="#" @click="authStore.signOut"
            >Sign Out</router-link
          >
        </div>
      </li>
    </ul>
    <!-- an empty div if the user clicks on,the menu bar dissappear -->
    <div class="menu-handler"></div>
  </div>
</template>

<script setup>
import { useAuthStore } from "../../store/auth";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  toggleMobileMenu: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["onHideMenu"]);

const hideMenu = () => {
  emits("onHideMenu", false);
};

const authStore = useAuthStore();
</script>

<style scoped>
.mobile-menu-list {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  /*background-color: #212529; */
  color: #fff;
  padding: 0;
  z-index: 99;
  display: flex;
  justify-items: center;
  align-items: flex-start;
  flex-direction: row;
}
.mobile-menu-list .menu {
  flex: 1;
  max-width: 250px;
  height: 100vh;
  background-color: #212529;
}
.mobile-menu-list .menu li:nth-child(1) {
  margin-top: 30px;
}
.mobile-menu-list .menu li {
  list-style: none;
  margin: 10px 25px;
  font-size: 13px;
}
.mobile-menu-list .menu li a {
  color: #fff;
  text-decoration: none;
}
.mobile-menu-list .menu-handler {
  flex: 2;
  height: 100%;
  background-color: transparent;
}
</style>
