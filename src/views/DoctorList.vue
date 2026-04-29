<template>
  <div class="doctors-page">
    <!-- ─── PAGE HEADER ─── -->
    <div class="page-header">
      <div class="page-header__bg-grid" aria-hidden="true"></div>
      <div class="container page-header__inner">
        <span class="eyebrow">Our Medical Team</span>
        <h1 class="page-header__title">Meet the <em>Specialists</em></h1>
        <p class="page-header__sub">
          Every doctor on MediLink is board-certified, reviewed, and ready to
          care for you.
        </p>
      </div>
    </div>

    <!-- ─── SEARCH BAR ─── -->
    <div class="search-band">
      <div class="container">
        <div class="search-box">
          <svg
            class="search-box__icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="currentColor"
              stroke-width="1.8"
            />
            <path
              d="M16.5 16.5L21 21"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
            />
          </svg>
          <input
            type="text"
            class="search-box__input"
            placeholder="Search by name or specialty (e.g. 'Carter' or 'Dentist')"
            v-model="searchText"
          />
          <span class="search-box__count" v-if="searchText">
            {{ filteredDoctors.length }} result{{
              filteredDoctors.length !== 1 ? "s" : ""
            }}
          </span>
        </div>
      </div>
    </div>

    <!-- ─── DOCTOR GRID ─── -->
    <div class="doctors-body">
      <div class="container">
        <!-- Empty state -->
        <transition name="fade">
          <div class="empty-state" v-if="filteredDoctors.length === 0">
            <div class="empty-state__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M16.5 16.5L21 21"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M8 11h6M11 8v6"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <h3>No doctors found</h3>
            <p>Try a different name or specialty.</p>
            <button class="btn btn--secondary" @click="searchText = ''">
              Clear Search
            </button>
          </div>
        </transition>

        <div class="doctors-grid" v-if="filteredDoctors.length > 0">
          <div
            class="doctor-card fade-zoom"
            v-for="doctor in filteredDoctors"
            :key="doctor.id"
          >
            <div class="doctor-card__img-wrap">
              <img
                :src="doctor.image"
                :alt="doctor.name"
                class="doctor-card__img"
              />
              <div class="doctor-card__badge">{{ doctor.specialty }}</div>
            </div>
            <div class="doctor-card__body">
              <div class="doctor-card__meta">
                <div class="doctor-card__rating">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="#f59e0b"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                  <span>{{ doctor.rating }}</span>
                </div>
                <span class="doctor-card__exp">{{ doctor.exp }} yrs exp.</span>
              </div>
              <h3 class="doctor-card__name">{{ doctor.name }}</h3>
              <p class="doctor-card__specialty">{{ doctor.specialty }}</p>
              <div class="doctor-card__availability">
                <span class="availability-dot"></span>
                Available Today
              </div>
              <router-link
                :to="{
                  name: 'BookingPage',
                  query: {
                    id: doctor.id,
                    name: doctor.name,
                    specialty: doctor.specialty,
                    image: doctor.image,
                  },
                }"
                class="btn btn--primary doctor-card__cta"
              >
                Book Appointment
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from "vue";

export default {
  name: "DoctorsPage",
  setup() {
    const searchText = ref("");

    const doctors = ref([
      {
        id: 1,
        name: "Dr. Sarah Johnson",
        specialty: "Dentist",
        rating: "4.9",
        exp: 12,
        image: require("../assets/doc1.jpg"),
      },
      {
        id: 2,
        name: "Dr. Ahmed Hassan",
        specialty: "Cardiologist",
        rating: "4.8",
        exp: 18,
        image: require("../assets/doc7.jpg"),
      },
      {
        id: 3,
        name: "Dr. Emily Carter",
        specialty: "Dermatologist",
        rating: "4.9",
        exp: 9,
        image: require("../assets/doc2.jpg"),
      },
      {
        id: 4,
        name: "Dr. Maged Ibrahim",
        specialty: "Pediatrician",
        rating: "4.7",
        exp: 14,
        image: require("../assets/Gemini_Generated_Image_h4p8qeh4p8qeh4p8.png"),
      },
      {
        id: 5,
        name: "Dr. Nour",
        specialty: "Neurologist",
        rating: "4.8",
        exp: 11,
        image: require("../assets/doc4.jpg"),
      },
      {
        id: 6,
        name: "Dr. David Lee",
        specialty: "Orthopedic",
        rating: "4.9",
        exp: 16,
        image: require("../assets/doc6.jpg"),
      },
    ]);

    const filteredDoctors = computed(() => {
      if (!searchText.value) return doctors.value;
      const q = searchText.value.toLowerCase();
      return doctors.value.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.specialty.toLowerCase().includes(q)
      );
    });

    /* ── Intersection observer for fade-zoom cards ── */
    const observer = ref(null);

    const handleIntersect = (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          observer.value?.unobserve(e.target);
        }
      });
    };

    onMounted(() => {
      observer.value = new IntersectionObserver(handleIntersect, {
        threshold: 0.1,
      });
      document
        .querySelectorAll(".fade-zoom")
        .forEach((el) => observer.value.observe(el));
    });

    onUnmounted(() => observer.value?.disconnect());

    return { searchText, filteredDoctors };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=DM+Sans:wght@300;400;500;600&display=swap");

/* ── Variables ── */
:root {
  --navy: #0d1b2a;
  --teal: #0ab1ed;
  --teal-dark: #0081b4;
  --surface: #f8fafb;
  --white: #ffffff;
  --text-primary: #0d1b2a;
  --text-secondary: #546e7a;
  --border: #e2e8f0;
  --font-display: "Playfair Display", Georgia, serif;
  --font-body: "DM Sans", system-ui, sans-serif;
  --radius-lg: 20px;
  --shadow-card: 0 4px 24px rgba(13, 27, 42, 0.07);
  --shadow-hover: 0 16px 44px rgba(13, 27, 42, 0.13);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.doctors-page {
  font-family: var(--font-body);
  color: var(--text-primary);
  background: var(--surface);
  min-height: 100vh;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ── Buttons ── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 50px;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: none;
}
.btn--primary {
  background: var(--teal);
  color: #fff;
  box-shadow: 0 4px 18px rgba(10, 177, 237, 0.3);
}
.btn--primary:hover {
  background: var(--teal-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(10, 177, 237, 0.4);
}
.btn--secondary {
  background: var(--white);
  color: var(--navy);
  border: 1.5px solid var(--border);
}
.btn--secondary:hover {
  border-color: var(--teal);
  color: var(--teal);
}

/* ─── PAGE HEADER ─── */
.page-header {
  position: relative;
  overflow: hidden;
  background: linear-gradient(140deg, #0d2c45 0%, #0a3d5c 60%, #0d1b2a 100%);
  padding: 100px 0 80px;
  color: #fff;
  text-align: center;
}
.page-header__bg-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.025) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 56px 56px;
}
.page-header__inner {
  position: relative;
  z-index: 1;
}
.eyebrow {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--teal);
  background: rgba(10, 177, 237, 0.12);
  border: 1px solid rgba(10, 177, 237, 0.25);
  padding: 6px 16px;
  border-radius: 50px;
  margin-bottom: 16px;
  animation: fadeUp 0.6s ease-out both;
}
.page-header__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 16px;
  animation: fadeUp 0.65s 0.05s ease-out both;
}
.page-header__title em {
  font-style: italic;
  color: var(--teal);
}
.page-header__sub {
  font-size: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.65);
  max-width: 500px;
  margin: 0 auto;
  animation: fadeUp 0.7s 0.1s ease-out both;
}

/* ─── SEARCH BAND ─── */
.search-band {
  background: var(--white);
  border-bottom: 1px solid var(--border);
  padding: 24px 0;
  box-shadow: 0 2px 12px rgba(13, 27, 42, 0.06);
  position: sticky;
  top: 0;
  z-index: 10;
}
.search-box {
  position: relative;
  display: flex;
  align-items: center;
  max-width: 640px;
  margin: 0 auto;
}
.search-box__icon {
  position: absolute;
  left: 20px;
  color: var(--text-secondary);
  flex-shrink: 0;
}
.search-box__input {
  width: 100%;
  padding: 14px 20px 14px 52px;
  border: 1.5px solid var(--border);
  border-radius: 50px;
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--text-primary);
  background: var(--surface);
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
}
.search-box__input:focus {
  border-color: var(--teal);
  box-shadow: 0 0 0 3px rgba(10, 177, 237, 0.15);
  background: var(--white);
}
.search-box__input::placeholder {
  color: var(--text-secondary);
}
.search-box__count {
  position: absolute;
  right: 20px;
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-weight: 500;
  background: var(--surface);
  padding: 2px 10px;
  border-radius: 20px;
}

/* ─── DOCTORS BODY ─── */
.doctors-body {
  padding: 56px 0 80px;
}

.doctors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 28px;
}

/* ─── DOCTOR CARD ─── */
.doctor-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.3s ease;
  opacity: 0;
  transform: scale(0.93) translateY(16px);
}
.doctor-card.in-view {
  opacity: 1;
  transform: scale(1) translateY(0);
  transition-duration: 0.55s;
}
.doctor-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-hover);
}

.doctor-card__img-wrap {
  position: relative;
  height: 240px;
  overflow: hidden;
  background: linear-gradient(135deg, #e0f6fd, #c1e4f3);
}
.doctor-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.5s ease;
}
.doctor-card:hover .doctor-card__img {
  transform: scale(1.05);
}

.doctor-card__badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(13, 27, 42, 0.7);
  color: #fff;
  backdrop-filter: blur(8px);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  padding: 5px 12px;
  border-radius: 50px;
}

.doctor-card__body {
  padding: 24px 26px 28px;
}

.doctor-card__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.doctor-card__rating {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-primary);
}
.doctor-card__exp {
  font-size: 0.78rem;
  color: var(--text-secondary);
  background: var(--surface);
  padding: 3px 10px;
  border-radius: 20px;
}

.doctor-card__name {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 4px;
  line-height: 1.2;
}
.doctor-card__specialty {
  font-size: 0.88rem;
  color: var(--teal);
  font-weight: 500;
  margin-bottom: 14px;
}
.doctor-card__availability {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 0.8rem;
  color: #16a34a;
  font-weight: 500;
  margin-bottom: 20px;
}
.availability-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #16a34a;
  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.2);
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.2);
  }
  50% {
    box-shadow: 0 0 0 6px rgba(22, 163, 74, 0.08);
  }
}

.doctor-card__cta {
  width: 100%;
  justify-content: center;
}

/* ─── EMPTY STATE ─── */
.empty-state {
  text-align: center;
  padding: 80px 24px;
  animation: fadeUp 0.5s ease-out;
}
.empty-state__icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--surface);
  border: 1.5px solid var(--border);
  display: grid;
  place-items: center;
  margin: 0 auto 20px;
  color: var(--text-secondary);
}
.empty-state h3 {
  font-family: var(--font-display);
  font-size: 1.3rem;
  color: var(--navy);
  margin-bottom: 8px;
}
.empty-state p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

/* ─── ANIMATIONS ─── */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ─── RESPONSIVE ─── */
@media (max-width: 768px) {
  .page-header {
    padding: 70px 0 60px;
  }
  .doctors-grid {
    grid-template-columns: 1fr;
  }
  .search-band {
    position: static;
  }
}
@media (max-width: 480px) {
  .doctors-grid {
    grid-template-columns: 1fr;
  }
  .doctor-card__img-wrap {
    height: 200px;
  }
}
</style>
