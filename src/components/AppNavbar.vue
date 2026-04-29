<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': scrolled, 'navbar--open': mobileOpen }">
    <div class="container navbar__inner">

      <!-- Brand -->
      <router-link to="/" class="navbar__brand" @click="mobileOpen = false">
        <div class="brand-icon">
          <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="8" fill="#0AB1ED"/>
            <path d="M14 7v14M7 14h14" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
        </div>
        <span class="brand-name">MediLink</span>
      </router-link>

      <!-- Desktop nav -->
      <ul class="navbar__links">
        <li v-for="link in navLinks" :key="link.to">
          <router-link
            :to="link.to"
            class="nav-link"
            active-class="nav-link--active"
            exact-active-class="nav-link--exact"
          >{{ link.label }}</router-link>
        </li>
      </ul>

      <!-- Desktop actions -->
      <div class="navbar__actions">
        <router-link to="/appointments" class="btn-appt">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="18" height="18" rx="3" stroke="currentColor" stroke-width="1.8"/>
            <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
          My Appointment
        </router-link>
        <router-link to="/doctors" class="btn-book">
          Book Now
        </router-link>
      </div>

      <!-- Mobile hamburger -->
      <button class="hamburger" @click="mobileOpen = !mobileOpen" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>

    </div>

    <!-- Mobile drawer -->
    <transition name="slide-down">
      <div class="mobile-menu" v-if="mobileOpen">
        <ul class="mobile-menu__links">
          <li v-for="link in navLinks" :key="link.to">
            <router-link
              :to="link.to"
              class="mobile-link"
              active-class="mobile-link--active"
              @click="mobileOpen = false"
            >{{ link.label }}</router-link>
          </li>
        </ul>
        <div class="mobile-menu__actions">
          <router-link to="/appointments" class="btn-appt" @click="mobileOpen = false">My Appointment</router-link>
          <router-link to="/doctors" class="btn-book" @click="mobileOpen = false">Book Now</router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "AppNavbar",
  setup() {
    const scrolled = ref(false);
    const mobileOpen = ref(false);

    const navLinks = [
      { to: "/", label: "Home" },
      { to: "/doctors", label: "Doctors" },
      { to: "/appointments", label: "Appointments" },
      { to: "/contact", label: "Contact" },
    ];

    const handleScroll = () => {
      scrolled.value = window.scrollY > 20;
    };

    onMounted(() => window.addEventListener("scroll", handleScroll));
    onUnmounted(() => window.removeEventListener("scroll", handleScroll));

    return { scrolled, mobileOpen, navLinks };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=DM+Sans:wght@300;400;500;600&display=swap");

:root {
  --navy: #0d1b2a;
  --teal: #0ab1ed;
  --white: #ffffff;
  --border: #e2e8f0;
  --font-display: "Playfair Display", Georgia, serif;
  --font-body: "DM Sans", system-ui, sans-serif;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  font-family: var(--font-body);
  background: transparent;
  transition: background 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease;
}
.navbar--scrolled {
  background: rgba(13,27,42,0.92);
  backdrop-filter: blur(16px);
  box-shadow: 0 2px 20px rgba(0,0,0,0.2);
}

.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

.navbar__inner {
  display: flex; align-items: center; justify-content: space-between;
  height: 68px; gap: 20px;
}

/* ── Brand ── */
.navbar__brand {
  display: flex; align-items: center; gap: 10px;
  text-decoration: none; flex-shrink: 0;
}
.brand-icon {
  width: 36px; height: 36px; display: grid; place-items: center;
}
.brand-name {
  font-family: var(--font-display); font-size: 1.25rem; font-weight: 700;
  color: #fff; letter-spacing: -0.01em;
}

/* ── Desktop Links ── */
.navbar__links {
  display: flex; align-items: center; gap: 4px; list-style: none;
  margin: 0 auto;
}
.nav-link {
  display: block; padding: 7px 16px; border-radius: 50px;
  font-size: 0.88rem; font-weight: 500; color: rgba(255,255,255,0.7);
  text-decoration: none; transition: all 0.2s ease;
}
.nav-link:hover, .nav-link--active { color: #fff; background: rgba(255,255,255,0.1); }
.nav-link--exact { color: var(--teal); background: rgba(10,177,237,0.12); }

/* ── Actions ── */
.navbar__actions { display: flex; align-items: center; gap: 12px; }

.btn-appt {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 8px 18px; border-radius: 50px; font-family: var(--font-body);
  font-size: 0.83rem; font-weight: 600; color: rgba(255,255,255,0.75);
  text-decoration: none; border: 1px solid rgba(255,255,255,0.2);
  background: transparent; transition: all 0.22s ease;
}
.btn-appt:hover { color: #fff; border-color: rgba(255,255,255,0.45); background: rgba(255,255,255,0.08); }

.btn-book {
  display: inline-flex; align-items: center;
  padding: 9px 22px; border-radius: 50px; font-family: var(--font-body);
  font-size: 0.83rem; font-weight: 600; color: #fff;
  text-decoration: none; background: var(--teal);
  box-shadow: 0 3px 14px rgba(10,177,237,0.35);
  transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1);
}
.btn-book:hover { background: #0081b4; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(10,177,237,0.45); }

/* ── Hamburger ── */
.hamburger {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer; padding: 6px;
}
.hamburger span {
  display: block; width: 22px; height: 2px;
  background: rgba(255,255,255,0.8); border-radius: 2px;
  transition: all 0.25s ease;
}
.navbar--open .hamburger span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.navbar--open .hamburger span:nth-child(2) { opacity: 0; }
.navbar--open .hamburger span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ── Mobile Menu ── */
.mobile-menu {
  background: rgba(13,27,42,0.97); backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255,255,255,0.08);
  padding: 20px 24px 28px;
}
.mobile-menu__links { list-style: none; display: flex; flex-direction: column; gap: 2px; margin-bottom: 20px; }
.mobile-link {
  display: block; padding: 12px 16px; border-radius: 10px;
  font-size: 1rem; font-weight: 500; color: rgba(255,255,255,0.75);
  text-decoration: none; transition: all 0.2s;
}
.mobile-link:hover, .mobile-link--active { color: #fff; background: rgba(255,255,255,0.08); }
.mobile-menu__actions { display: flex; flex-direction: column; gap: 10px; }
.mobile-menu__actions .btn-appt,
.mobile-menu__actions .btn-book { justify-content: center; width: 100%; padding: 13px; font-size: 0.95rem; }

/* ── Transitions ── */
.slide-down-enter-active { animation: slideDownIn 0.3s ease-out; }
.slide-down-leave-active { animation: slideDownIn 0.2s ease-out reverse; }
@keyframes slideDownIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ─── Responsive ─── */
@media (max-width: 900px) {
  .navbar__links { display: none; }
  .navbar__actions { display: none; }
  .hamburger { display: flex; }
}
</style>
