<template>
  <div class="booking-page">
    <!-- ─── HERO ─── -->
    <section class="booking-hero">
      <div class="booking-hero__bg-grid" aria-hidden="true"></div>
      <div class="container booking-hero__inner">
        <!-- Left copy -->
        <div class="booking-hero__text">
          <span class="eyebrow">Online Booking</span>
          <h1 class="booking-hero__title">
            Reserve Your<br /><em>Appointment</em>
          </h1>
          <hr class="booking-hero__rule" />

          <div class="doctor-profile" v-if="doctorName">
            <div class="doctor-profile__info">
              <p class="doctor-profile__label">You're booking with</p>
              <h2 class="doctor-profile__name">{{ doctorName }}</h2>
              <span class="doctor-profile__specialty">{{
                doctorSpecialty
              }}</span>
            </div>
          </div>

          <p class="booking-hero__desc">
            MediLink makes it simple to find the right specialist and secure
            your slot in minutes — no phone calls required.
          </p>

          <div class="booking-hero__actions">
            <a href="#booking-form" class="btn btn--primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="18"
                  rx="3"
                  stroke="currentColor"
                  stroke-width="1.8"
                />
                <path
                  d="M16 2v4M8 2v4M3 10h18"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                />
              </svg>
              Go to Form
            </a>
            <a href="tel:+201234567890" class="btn btn--ghost">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                  stroke="currentColor"
                  stroke-width="1.8"
                />
              </svg>
              Call Instead
            </a>
          </div>
        </div>

        <!-- Right image -->
        <div class="booking-hero__visual">
          <div class="doctor-img-card">
            <img
              v-if="doctorImage"
              :src="doctorImage"
              alt="Doctor"
              class="doctor-img-card__img"
            />
            <img
              v-else
              src="../assets/doc.png"
              alt="Doctor"
              class="doctor-img-card__img"
            />
            <div class="doctor-img-card__badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#10b981">
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Verified Doctor
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── BOOKING FORM ─── -->
    <section class="form-section" id="booking-form">
      <div class="container">
        <div class="form-card">
          <div class="form-card__header">
            <div class="form-card__icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="18"
                  rx="3"
                  stroke="currentColor"
                  stroke-width="1.6"
                />
                <path
                  d="M16 2v4M8 2v4M3 10h18"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div>
              <h2 class="form-card__title">Appointment Details</h2>
              <p class="form-card__sub">
                Fill in the fields below to confirm your slot.
              </p>
            </div>
          </div>

          <form @submit.prevent="onclick" novalidate>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="name">Full Name</label>
                <div class="input-wrap">
                  <svg
                    class="input-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                      stroke="currentColor"
                      stroke-width="1.7"
                    />
                    <circle
                      cx="12"
                      cy="7"
                      r="4"
                      stroke="currentColor"
                      stroke-width="1.7"
                    />
                  </svg>
                  <input
                    id="name"
                    type="text"
                    class="form-control"
                    required
                    placeholder="e.g., John Doe"
                  />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="number">Phone Number</label>
                <div class="input-wrap">
                  <svg
                    class="input-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                      stroke="currentColor"
                      stroke-width="1.7"
                    />
                  </svg>
                  <input
                    id="number"
                    type="tel"
                    class="form-control"
                    required
                    placeholder="e.g., 01234567890"
                  />
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="email">Email Address</label>
                <div class="input-wrap">
                  <svg
                    class="input-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      stroke="currentColor"
                      stroke-width="1.7"
                    />
                    <polyline
                      points="22,6 12,13 2,6"
                      stroke="currentColor"
                      stroke-width="1.7"
                    />
                  </svg>
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="time">Preferred Time</label>
                <div class="input-wrap input-wrap--select">
                  <svg
                    class="input-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="currentColor"
                      stroke-width="1.7"
                    />
                    <path
                      d="M12 7v5l3 3"
                      stroke="currentColor"
                      stroke-width="1.7"
                      stroke-linecap="round"
                    />
                  </svg>
                  <select
                    id="time"
                    class="form-control form-select"
                    v-model="appointmentTime"
                    required
                  >
                    <option disabled value="">Select a time slot</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="notes">Additional Notes</label>
              <textarea
                id="notes"
                class="form-control form-textarea"
                rows="4"
                placeholder="Describe your symptoms or any special requirements (optional)"
              ></textarea>
            </div>

            <!-- Trust indicators -->
            <div class="trust-row">
              <div class="trust-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2l7 3v5c0 4.97-3.22 9.57-7 11C5.22 19.57 2 14.97 2 10V5l10-3z"
                    stroke="currentColor"
                    stroke-width="1.6"
                  />
                </svg>
                Secure & encrypted
              </div>
              <div class="trust-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Free cancellation
              </div>
              <div class="trust-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                    stroke="currentColor"
                    stroke-width="1.6"
                  />
                </svg>
                Instant confirmation
              </div>
            </div>

            <button type="submit" class="btn btn--submit">
              Confirm Reservation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "BookingPage",
  setup() {
    const route = useRoute();
    const router = useRouter();

    const doctorId = route.query.id;
    const doctorName = route.query.name;
    const doctorSpecialty = route.query.specialty;
    const doctorImage = route.query.image;
    const appointmentTime = ref("");

    function onclick() {
      alert("Your Reservation is Submitted!");
      router.push({
        name: "Appointments",
        query: {
          id: doctorId,
          name: doctorName,
          specialty: doctorSpecialty,
          image: doctorImage,
          time: appointmentTime.value,
        },
      });
    }

    return {
      doctorId,
      doctorName,
      doctorSpecialty,
      doctorImage,
      appointmentTime,
      onclick,
    };
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
  --teal-light: #e0f6fd;
  --surface: #f8fafb;
  --white: #ffffff;
  --text-primary: #0d1b2a;
  --text-secondary: #546e7a;
  --border: #e2e8f0;
  --font-display: "Playfair Display", Georgia, serif;
  --font-body: "DM Sans", system-ui, sans-serif;
  --radius-lg: 20px;
  --shadow-card: 0 4px 32px rgba(13, 27, 42, 0.09);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.booking-page {
  font-family: var(--font-body);
  color: var(--text-primary);
  background: var(--surface);
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ── Buttons ── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 28px;
  border-radius: 50px;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: none;
  white-space: nowrap;
}
.btn--primary {
  background: var(--teal);
  color: #fff;
  box-shadow: 0 4px 18px rgba(10, 177, 237, 0.3);
}
.btn--primary:hover {
  background: var(--teal-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(10, 177, 237, 0.4);
}
.btn--ghost {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  border: 1.5px solid rgba(255, 255, 255, 0.35);
}
.btn--ghost:hover {
  background: rgba(255, 255, 255, 0.22);
  transform: translateY(-2px);
}
.btn--submit {
  width: 100%;
  justify-content: center;
  padding: 16px;
  font-size: 1rem;
  background: var(--teal);
  color: #fff;
  box-shadow: 0 4px 20px rgba(10, 177, 237, 0.3);
  border-radius: 14px;
  margin-top: 8px;
}
.btn--submit:hover {
  background: var(--teal-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(10, 177, 237, 0.4);
}

/* ─── HERO ─── */
.booking-hero {
  position: relative;
  overflow: hidden;
  background: linear-gradient(140deg, #0d2c45 0%, #0a3d5c 55%, #0d1b2a 100%);
  padding: 100px 0 80px;
  color: #fff;
}
.booking-hero__bg-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.025) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 56px 56px;
}
.booking-hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
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
  animation: fadeUp 0.55s ease-out both;
}
.booking-hero__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 20px;
  animation: fadeUp 0.6s 0.06s ease-out both;
}
.booking-hero__title em {
  font-style: italic;
  color: var(--teal);
}
.booking-hero__rule {
  width: 64px;
  height: 2px;
  background: var(--teal);
  border: none;
  margin: 0 0 24px;
  animation: fadeUp 0.6s 0.1s ease-out both;
}

.doctor-profile {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 14px;
  padding: 18px 22px;
  margin-bottom: 22px;
  display: inline-block;
  animation: fadeUp 0.6s 0.14s ease-out both;
}
.doctor-profile__label {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.55);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 4px;
}
.doctor-profile__name {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 4px;
}
.doctor-profile__specialty {
  font-size: 0.82rem;
  color: var(--teal);
  font-weight: 500;
  background: rgba(10, 177, 237, 0.15);
  padding: 3px 10px;
  border-radius: 20px;
}

.booking-hero__desc {
  font-size: 0.95rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.7;
  margin-bottom: 28px;
  animation: fadeUp 0.6s 0.18s ease-out both;
}
.booking-hero__actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  animation: fadeUp 0.6s 0.22s ease-out both;
}

/* ── Doctor Image Card ── */
.booking-hero__visual {
  display: flex;
  justify-content: center;
  animation: fadeLeft 0.7s 0.3s ease-out both;
}
.doctor-img-card {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  width: 100%;
  max-width: 380px;
  background: linear-gradient(
    135deg,
    rgba(10, 177, 237, 0.2),
    rgba(10, 177, 237, 0.05)
  );
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transition: transform 0.4s ease;
}
.doctor-img-card:hover {
  transform: translateY(-6px) scale(1.01);
}
.doctor-img-card__img {
  width: 100%;
  height: 380px;
  object-fit: cover;
  object-position: top;
  display: block;
}
.doctor-img-card__badge {
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: #34d399;
  backdrop-filter: blur(8px);
  font-size: 0.78rem;
  font-weight: 600;
  padding: 7px 16px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
}

/* ─── FORM SECTION ─── */
.form-section {
  padding: 60px 0 80px;
  background: var(--surface);
}

.form-card {
  background: var(--white);
  border-radius: 24px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-card);
  padding: 44px 48px;
  max-width: 760px;
  margin: 0 auto;
  animation: fadeUp 0.7s ease-out both;
}
.form-card__header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 36px;
}
.form-card__icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: var(--teal-light);
  color: var(--teal);
  display: grid;
  place-items: center;
  flex-shrink: 0;
}
.form-card__title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 4px;
}
.form-card__sub {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

/* ── Form Elements ── */
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 0;
}
.form-group:not(:in(.form-row)) {
  margin-bottom: 20px;
}

.form-label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: 0.02em;
}
.input-wrap {
  position: relative;
}
.input-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
  pointer-events: none;
}
.input-wrap--select .input-icon {
  z-index: 1;
}

.form-control {
  width: 100%;
  padding: 13px 16px 13px 44px;
  border: 1.5px solid var(--border);
  border-radius: 12px;
  font-family: var(--font-body);
  font-size: 0.92rem;
  color: var(--text-primary);
  background: var(--surface);
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
  appearance: none;
}
.form-control:focus {
  border-color: var(--teal);
  box-shadow: 0 0 0 3px rgba(10, 177, 237, 0.15);
  background: var(--white);
}
.form-control::placeholder {
  color: var(--text-secondary);
}

.form-textarea {
  padding: 13px 16px;
  resize: vertical;
  min-height: 100px;
}

/* ── Trust Row ── */
.trust-row {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  border-top: 1px solid var(--border);
  padding: 18px 0 20px;
  margin-top: 8px;
}
.trust-item {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-weight: 500;
}
.trust-item svg {
  color: var(--teal);
  flex-shrink: 0;
}

/* ─── ANIMATIONS ─── */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(22px);
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

/* ─── RESPONSIVE ─── */
@media (max-width: 992px) {
  .booking-hero__inner {
    grid-template-columns: 1fr;
  }
  .booking-hero__visual {
    order: -1;
  }
  .doctor-img-card {
    max-width: 320px;
  }
  .doctor-img-card__img {
    height: 280px;
  }
  .form-card {
    padding: 32px 28px;
  }
}
@media (max-width: 640px) {
  .booking-hero {
    padding: 70px 0 50px;
  }
  .form-row {
    grid-template-columns: 1fr;
  }
  .form-card {
    padding: 24px 18px;
  }
  .booking-hero__actions {
    flex-direction: column;
    align-items: flex-start;
  }
  .trust-row {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
