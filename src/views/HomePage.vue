<template>
  <div class="home-wrapper">
    <!-- ─── HERO ─── -->
    <section class="hero">
      <div class="hero__bg-grid" aria-hidden="true"></div>
      <div class="hero__orb hero__orb--1" aria-hidden="true"></div>
      <div class="hero__orb hero__orb--2" aria-hidden="true"></div>

      <div class="container hero__inner">
        <div class="hero__text" ref="heroText">
          <span class="hero__eyebrow">Trusted Healthcare, Simplified</span>
          <h1 class="hero__title">
            Find the Right<br />
            <em>Doctor</em> Effortlessly
          </h1>
          <p class="hero__sub">
            Book your appointments in minutes — anytime, anywhere. World-class
            specialists, one seamless platform.
          </p>
          <div class="hero__actions">
            <router-link to="/doctors" class="btn btn--primary">
              <span>Book Appointment</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </router-link>
            <router-link to="/contact" class="btn btn--ghost"
              >Talk to Support</router-link
            >
          </div>
        </div>

        <div class="hero__visual">
          <div class="hero__card-stack">
            <div class="stat-card stat-card--main">
              <div class="stat-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2a10 10 0 100 20A10 10 0 0012 2z"
                    stroke="currentColor"
                    stroke-width="1.6"
                  />
                  <path
                    d="M12 7v5l3 3"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div class="stat-card__info">
                <span class="stat-card__num">30 min</span>
                <span class="stat-card__label">Avg. Booking Time</span>
              </div>
            </div>
            <div class="stat-card stat-card--secondary">
              <div class="stat-card__icon stat-card__icon--green">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="stat-card__info">
                <span class="stat-card__num">98%</span>
                <span class="stat-card__label">Patient Satisfaction</span>
              </div>
            </div>
            <div class="stat-card stat-card--tertiary">
              <div class="stat-card__icon stat-card__icon--blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                    stroke="currentColor"
                    stroke-width="1.6"
                  />
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    stroke-width="1.6"
                  />
                  <path
                    d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div class="stat-card__info">
                <span class="stat-card__num">200+</span>
                <span class="stat-card__label">Specialists</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Wave separator -->
      <div class="hero__wave" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#f8fafb"
          />
        </svg>
      </div>
    </section>

    <!-- ─── FEATURES ─── -->
    <section class="features">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">Why MediLink</span>
          <h2 class="section-title">Healthcare Built Around <em>You</em></h2>
        </div>
        <div class="features__grid">
          <div class="feature-card" v-for="(f, i) in features" :key="i">
            <div class="feature-card__icon" :style="{ background: f.bg }">
              <span v-html="f.icon"></span>
            </div>
            <h3 class="feature-card__title">{{ f.title }}</h3>
            <p class="feature-card__desc">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CTA STRIP ─── -->
    <section class="cta-strip">
      <div class="container cta-strip__inner">
        <div class="cta-strip__text">
          <h2>Ready to take charge of your health?</h2>
          <p>Browse specialists and book your slot today — no waiting rooms.</p>
        </div>
        <router-link to="/doctors" class="btn btn--primary btn--large">
          Find a Doctor
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
      </div>
    </section>

    <!-- ─── FOOTER ─── -->
    <footer class="site-footer">
      <div class="container footer__inner">
        <div class="footer__brand">
          <span class="footer__logo">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="8" fill="#0AB1ED" />
              <path
                d="M14 7v14M7 14h14"
                stroke="#fff"
                stroke-width="2.5"
                stroke-linecap="round"
              />
            </svg>
            MediLink
          </span>
          <p>Connecting patients and doctors<br />seamlessly since 2025.</p>
        </div>
        <nav class="footer__nav">
          <span class="footer__nav-label">Navigate</span>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/doctors">Doctors</router-link></li>
            <li><router-link to="/appointments">Appointments</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </nav>
        <div class="footer__social">
          <span class="footer__nav-label">Follow Us</span>
          <div class="social-row">
            <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" aria-label="Twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
            <a href="#" aria-label="Instagram"
              ><i class="bi bi-instagram"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <p>&copy; 2025 MediLink. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HomeView",
  setup() {
    const features = ref([
      {
        title: "Instant Booking",
        desc: "Reserve your slot in under two minutes with our streamlined scheduling system.",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="3" stroke="currentColor" stroke-width="1.7"/><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
        bg: "linear-gradient(135deg,#dbeafe,#bfdbfe)",
      },
      {
        title: "Verified Specialists",
        desc: "Every doctor on MediLink is credentialed, reviewed, and trusted by thousands of patients.",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`,
        bg: "linear-gradient(135deg,#d1fae5,#a7f3d0)",
      },
      {
        title: "24/7 Availability",
        desc: "Access our platform around the clock — your health doesn't follow business hours.",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.7"/><path d="M12 7v5l3 3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
        bg: "linear-gradient(135deg,#fce7f3,#fbcfe8)",
      },
      {
        title: "Secure & Private",
        desc: "Your medical data is encrypted and protected under strict privacy standards.",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2l7 3v5c0 4.97-3.22 9.57-7 11C5.22 19.57 2 14.97 2 10V5l10-3z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        bg: "linear-gradient(135deg,#ede9fe,#ddd6fe)",
      },
    ]);

    return { features };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=DM+Sans:wght@300;400;500;600&display=swap");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css");

/* ── CSS Variables ── */
:root {
  --navy: #0d1b2a;
  --teal: #0ab1ed;
  --teal-dark: #0081b4;
  --teal-light: #e0f6fd;
  --surface: #f8fafb;
  --white: #ffffff;
  --text-primary: #0d1b2a;
  --text-secondary: #546e7a;
  --text-muted: #90a4ae;
  --border: #e2e8f0;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --shadow-card: 0 4px 24px rgba(13, 27, 42, 0.08);
  --shadow-hover: 0 12px 40px rgba(13, 27, 42, 0.14);
  --font-display: "Playfair Display", Georgia, serif;
  --font-body: "DM Sans", system-ui, sans-serif;
}

/* ── Reset ── */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.home-wrapper {
  font-family: var(--font-body);
  color: var(--text-primary);
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ── Shared Buttons ── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 50px;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: none;
  letter-spacing: 0.01em;
}
.btn--primary {
  background: var(--teal);
  color: #fff;
  box-shadow: 0 4px 20px rgba(10, 177, 237, 0.35);
}
.btn--primary:hover {
  background: var(--teal-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(10, 177, 237, 0.45);
}
.btn--ghost {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4px);
}
.btn--ghost:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}
.btn--large {
  padding: 16px 36px;
  font-size: 1rem;
}

/* ─── HERO ─── */
.hero {
  position: relative;
  overflow: hidden;
  background: linear-gradient(140deg, #0d2c45 0%, #0a3d5c 50%, #0d1b2a 100%);
  padding: 110px 0 80px;
  color: #fff;
}
.hero__bg-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.03) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}
.hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.hero__orb--1 {
  width: 480px;
  height: 480px;
  background: radial-gradient(
    circle,
    rgba(10, 177, 237, 0.25),
    transparent 70%
  );
  top: -100px;
  right: -80px;
  animation: orbFloat 8s ease-in-out infinite;
}
.hero__orb--2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.15), transparent 70%);
  bottom: -60px;
  left: 10%;
  animation: orbFloat 10s ease-in-out infinite reverse;
}
@keyframes orbFloat {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.05);
  }
}

.hero__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
  position: relative;
  z-index: 1;
}

.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--teal);
  background: rgba(10, 177, 237, 0.12);
  border: 1px solid rgba(10, 177, 237, 0.25);
  padding: 6px 16px;
  border-radius: 50px;
  animation: fadeUp 0.6s ease-out both;
}
.hero__title {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 4.5vw, 3.6rem);
  font-weight: 700;
  line-height: 1.12;
  margin: 22px 0 18px;
  animation: fadeUp 0.7s 0.1s ease-out both;
}
.hero__title em {
  font-style: italic;
  color: var(--teal);
  text-shadow: 0 0 40px rgba(10, 177, 237, 0.4);
}
.hero__sub {
  font-size: 1.05rem;
  font-weight: 300;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.72);
  max-width: 440px;
  animation: fadeUp 0.7s 0.2s ease-out both;
}
.hero__actions {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 36px;
  flex-wrap: wrap;
  animation: fadeUp 0.7s 0.3s ease-out both;
}

/* ── Stat Cards ── */
.hero__visual {
  position: relative;
}
.hero__card-stack {
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: fadeLeft 0.8s 0.4s ease-out both;
}
.stat-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px);
  border-radius: var(--radius-lg);
  padding: 22px 28px;
  display: flex;
  align-items: center;
  gap: 18px;
  transition: transform 0.3s ease, background 0.3s ease;
}
.stat-card:hover {
  transform: translateX(6px);
  background: rgba(255, 255, 255, 0.1);
}
.stat-card--secondary {
  margin-left: 40px;
}
.stat-card--tertiary {
  margin-left: 20px;
}
.stat-card__icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(10, 177, 237, 0.2);
  display: grid;
  place-items: center;
  color: var(--teal);
  flex-shrink: 0;
}
.stat-card__icon--green {
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
}
.stat-card__icon--blue {
  background: rgba(99, 102, 241, 0.2);
  color: #818cf8;
}
.stat-card__num {
  display: block;
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  line-height: 1;
}
.stat-card__label {
  display: block;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.55);
  margin-top: 3px;
  font-weight: 400;
}

.hero__wave {
  line-height: 0;
  position: relative;
  z-index: 1;
}
.hero__wave svg {
  width: 100%;
  display: block;
}

/* ─── Animations ─── */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeLeft {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* ─── FEATURES ─── */
.features {
  background: var(--surface);
  padding: 90px 0;
}
.section-header {
  text-align: center;
  margin-bottom: 56px;
}
.section-eyebrow {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--teal);
  display: block;
  margin-bottom: 12px;
}
.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 700;
  color: var(--navy);
  line-height: 1.2;
}
.section-title em {
  font-style: italic;
  color: var(--teal);
}

.features__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}
.feature-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 36px 30px;
  border: 1px solid var(--border);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: var(--shadow-card);
}
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-hover);
}
.feature-card__icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  margin-bottom: 20px;
  color: var(--navy);
}
.feature-card__title {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--navy);
  margin-bottom: 10px;
}
.feature-card__desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.65;
  font-weight: 300;
}

/* ─── CTA STRIP ─── */
.cta-strip {
  background: linear-gradient(135deg, #0d2c45, #062035);
  padding: 64px 0;
}
.cta-strip__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}
.cta-strip__text h2 {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}
.cta-strip__text p {
  color: rgba(255, 255, 255, 0.62);
  font-size: 0.95rem;
  font-weight: 300;
}

/* ─── FOOTER ─── */
.site-footer {
  background: var(--navy);
  color: rgba(255, 255, 255, 0.55);
  padding: 60px 0 0;
  font-family: var(--font-body);
}
.footer__inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 48px;
}
.footer__logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 14px;
}
.footer__brand p {
  font-size: 0.875rem;
  line-height: 1.6;
  font-weight: 300;
}
.footer__nav-label {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--teal);
  display: block;
  margin-bottom: 16px;
}
.footer__nav ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer__nav a {
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s;
}
.footer__nav a:hover {
  color: #fff;
}
.social-row {
  display: flex;
  gap: 14px;
}
.social-row a {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  place-items: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.25s ease;
}
.social-row a:hover {
  background: var(--teal);
  color: #fff;
  border-color: var(--teal);
  transform: translateY(-2px);
}
.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 20px 24px;
  text-align: center;
  font-size: 0.8rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* ─── RESPONSIVE ─── */
@media (max-width: 992px) {
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .hero__visual {
    order: -1;
  }
  .hero__card-stack {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .stat-card--secondary,
  .stat-card--tertiary {
    margin-left: 0;
  }
  .hero__sub {
    max-width: 100%;
  }
  .footer__inner {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 640px) {
  .hero {
    padding: 80px 0 60px;
  }
  .hero__inner {
    text-align: center;
  }
  .hero__actions {
    justify-content: center;
  }
  .hero__sub {
    margin: 0 auto;
  }
  .hero__card-stack {
    flex-direction: column;
  }
  .cta-strip__inner {
    flex-direction: column;
    text-align: center;
  }
  .footer__inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .features {
    padding: 60px 0;
  }
}
</style>
