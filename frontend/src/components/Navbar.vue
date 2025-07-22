<template>
  <nav class="nav">
    <div class="wrapper">
      <div class="brand">
        <router-link to="/">Todo App</router-link>
      </div>

      <ul v-if="!mobileView">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li v-if="!authStore.isLoggedIn">
          <router-link to="/signIn">Sign In</router-link>
        </li>
        <li v-if="!authStore.isLoggedIn">
          <router-link to="/signUp">Sign Up</router-link>
        </li>
        <li v-if="authStore.isLoggedIn">
          <router-link to="/userTodos">My Todos</router-link>
        </li>
        <li v-if="authStore.isLoggedIn">
          <router-link to="#" class="user-name">
            {{ authStore.getUserName }}
          </router-link>
        </li>
        <li v-if="authStore.isLoggedIn">
          <router-link class="dropdown-item" to="#" @click="authStore.signOut"
            >Sign Out</router-link
          >
        </li>
      </ul>
    </div>
    <!-- mobile menu button area -->
    <div class="mobileMenuButton" v-if="mobileView" @click="toggleMobile">
      <span>
        <FontAwesomeIcon icon="bars" />
      </span>
    </div>
    <!-- mobile menu area -->
    <Transition name="show-mobile-menu">
      <MobileNavbar
        v-if="mobileView"
        :toggleMobileMenu="toggleMobileMenu"
        v-on:onHideMenu="onHideMenu"
      />
    </Transition>
    <!-- end mobile menu area -->
  </nav>
</template>

<script setup>
import { useAuthStore } from "../store/auth";

import { ref, onMounted } from "vue";
import MobileNavbar from "./navbar/MobileNavbar.vue";

const authStore = useAuthStore();

const mobileView = ref(false);
const pageWidth = ref(null);
const toggleMobileMenu = ref(false);

onMounted(() => {
  window.addEventListener("resize", checkPageWidth);
  checkPageWidth();
});

// shows and hide the mobile menu if button is clicked
const toggleMobile = () => {
  toggleMobileMenu.value = !toggleMobileMenu.value;
};
// hides the mobile menu bar
const onHideMenu = () => {
  toggleMobileMenu.value = false;
};
/**
 * checks the mobile width to display
 * the mobile view menu or normal nav
 */
const checkPageWidth = () => {
  pageWidth.value = window.innerWidth;
  if (pageWidth.value <= 750) {
    mobileView.value = true;
    return;
  }
  mobileView.value = false;
  return;
};
</script>

<style scoped>
.nav {
  width: 100%;
  height: 70px;
  background: #212529;
  color: #fff;
  position: relative;
  padding: 10px auto;
}
.nav .wrapper {
  width: 90%;
  height: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.wrapper .brand a {
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
}
.wrapper ul {
  display: flex;
  margin-top: 15px;
}
.wrapper ul li {
  list-style: none;
  margin: 3.5px;
}
.wrapper ul li a {
  color: #fff;
  text-decoration: none;
  text-transform: capitalize;
}
.wrapper ul li .user-name {
  color: lime;
  border: 2px solid lime;
  padding: 5px;
  border-radius: 6px;
}
.nav .mobileMenuButton {
  position: absolute;
  top: 30px;
  right: 25px;
  text-align: center;
  cursor: pointer;
  transition: 0.5s ease;
}

.dropdown-menu.show {
  display: block;
  background: #212529;
}
.dropdown-item:hover,
.dropdown-item:focus {
  color: #212529;
  background-color: #fff;
}
/** slide animation */
.show-mobile-menu-enter-active {
  transition: all 0.3s ease-out;
}

.show-mobile-menu-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.show-mobile-menu-enter-from,
.show-mobile-menu-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
@media (max-width: 750px) {
  .wrapper .brand a {
    font-size: 15px;
  }
}
</style>
