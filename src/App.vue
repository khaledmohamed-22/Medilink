<template>
  <div id="app">
    <AppNavbar />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
import AppNavbar from "@/components/AppNavbar.vue";

export default {
  name: "App",
  components: { AppNavbar },
};
</script>

<style>
/* ── Global reset & tokens ── */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --navy: #0d1b2a;
  --teal: #0ab1ed;
  --teal-dark: #0081b4;
  --teal-light: #e0f6fd;
  --surface: #f8fafb;
  --white: #ffffff;
  --text-primary: #0d1b2a;
  --text-secondary: #546e7a;
  --border: #e2e8f0;
  --font-display: "Playfair Display", Georgia, serif;
  --font-body: "DM Sans", system-ui, sans-serif;
  --navbar-height: 68px;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  color: var(--text-primary);
  background: var(--surface);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Pages need top padding to clear the fixed navbar */
.main-content {
  padding-top: var(--navbar-height);
}

/* ── Page transitions ── */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
