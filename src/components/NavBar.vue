<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
      <a class="navbar-brand fw-bold fs-3" href="#">MediLink</a>

      <button
        ref="navbarToggler"
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#Nav"
        aria-controls="Nav"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div ref="navbarCollapse" class="collapse navbar-collapse" id="Nav">
        <ul class="navbar-nav ms-auto text-center">
          <li class="nav-item">
            <router-link class="nav-link" to="/" @click="closeNavbar"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Doctors" @click="closeNavbar"
              >Doctors</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Booking" @click="closeNavbar"
              >Booking</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/Appointments"
              @click="closeNavbar"
              >Appointments</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Contact" @click="closeNavbar"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<script setup>
import { ref } from "vue";

// Create refs for the navbar toggler button and the collapsible element
const navbarToggler = ref(null);
const navbarCollapse = ref(null);

/**
 * Closes the mobile navbar menu if it's currently open.
 */
const closeNavbar = () => {
  // Check if the navbar is expanded (Bootstrap adds the 'show' class)
  if (navbarCollapse.value && navbarCollapse.value.classList.contains("show")) {
    // Programmatically click the toggler button to collapse the menu
    navbarToggler.value.click();
  }
};
</script>

<style scoped>
/* Your existing styles remain exactly the same */
.navbar {
  background: rgba(10, 150, 220, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.navbar-brand {
  letter-spacing: 1px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
}

.navbar-collapse {
  transition: height 0.35s ease-in-out;
}

.nav-item {
  margin: 0 5px;
}

.nav-link {
  font-size: 1rem;
  padding: 0.8rem 1rem;
  border-radius: 50px;
  color: #fff;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff !important;
  transform: translateY(-2px);
}

.router-link-exact-active {
  background-color: #fff;
  color: #0ab1ed !important;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.navbar-toggler {
  border: none;
  outline: none;
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
}

body {
  padding-top: 70px;
}
</style>
