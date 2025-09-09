<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
      <a class="navbar-brand fw-bold fs-3" href="#">MediLink</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#Nav"
        aria-controls="Nav"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="Nav">
        <ul class="navbar-nav ms-auto text-center">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/Doctors">Doctors</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Booking">Booking</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Appointments"
              >Appointments</router-link
            >
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/Contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<style scoped>
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
