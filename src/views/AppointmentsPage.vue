<template>
  <div class="appointments-page">
    <div class="appointments-page__bg" aria-hidden="true"></div>

    <div class="container">

      <!-- ── CONFIRMED STATE ── -->
      <transition name="pop" appear>
        <div class="appt-card" v-if="doctor">

          <!-- Header strip -->
          <div class="appt-card__header">
            <div class="success-badge">
              <div class="success-badge__ring">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div>
              <h1 class="appt-card__headline">Appointment Confirmed!</h1>
              <p class="appt-card__subline">Your booking is secured. See you soon.</p>
            </div>
          </div>

          <!-- Doctor summary -->
          <div class="doctor-summary">
            <div class="doctor-summary__avatar-wrap">
              <img :src="doctor.image" alt="Doctor" class="doctor-summary__avatar" />
              <span class="doctor-summary__verified" title="Verified">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#fff">
                  <path d="M20 6L9 17l-5-5" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </div>
            <div class="doctor-summary__info">
              <h2 class="doctor-summary__name">{{ doctor.name }}</h2>
              <span class="doctor-summary__specialty">{{ doctor.specialty }}</span>
            </div>
          </div>

          <!-- Divider -->
          <div class="appt-divider">
            <span>Appointment Details</span>
          </div>

          <!-- Details grid -->
          <div class="details-grid">
            <div class="detail-item">
              <div class="detail-item__icon detail-item__icon--blue">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/>
                  <path d="M12 7v5l3 3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                </svg>
              </div>
              <div>
                <span class="detail-item__label">Time Slot</span>
                <span class="detail-item__value">{{ doctor.time || '—' }}</span>
              </div>
            </div>

            <div class="detail-item">
              <div class="detail-item__icon detail-item__icon--teal">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" stroke-width="1.8"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="1.8"/>
                </svg>
              </div>
              <div>
                <span class="detail-item__label">Specialist</span>
                <span class="detail-item__value">{{ doctor.specialty }}</span>
              </div>
            </div>

            <div class="detail-item">
              <div class="detail-item__icon detail-item__icon--green">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l7 3v5c0 4.97-3.22 9.57-7 11C5.22 19.57 2 14.97 2 10V5l10-3z" stroke="currentColor" stroke-width="1.8"/>
                </svg>
              </div>
              <div>
                <span class="detail-item__label">Status</span>
                <span class="detail-item__value detail-item__value--green">Confirmed</span>
              </div>
            </div>

            <div class="detail-item">
              <div class="detail-item__icon detail-item__icon--purple">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="3" stroke="currentColor" stroke-width="1.8"/>
                  <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                </svg>
              </div>
              <div>
                <span class="detail-item__label">Platform</span>
                <span class="detail-item__value">MediLink Online</span>
              </div>
            </div>
          </div>

          <!-- Notice -->
          <div class="appt-notice">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/>
              <path d="M12 8v4M12 16h.01" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </svg>
            <p>A confirmation has been sent to your registered email. Please arrive 10 minutes early.</p>
          </div>

          <!-- Actions -->
          <div class="appt-actions">
            <router-link to="/doctors" class="btn btn--secondary">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Back to Doctors
            </router-link>
            <button class="btn btn--danger" @click="cancelBooking">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              Cancel Booking
            </button>
          </div>

        </div>
      </transition>

      <!-- ── EMPTY STATE ── -->
      <transition name="fade" appear>
        <div class="empty-card" v-if="!doctor">
          <div class="empty-card__illustration">
            <div class="empty-card__circle">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="3" stroke="currentColor" stroke-width="1.5"/>
                <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M9 14l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <h2 class="empty-card__title">No Upcoming Appointments</h2>
          <p class="empty-card__desc">
            You haven't booked any appointments yet. Browse our network of
            specialists and find the right doctor for you.
          </p>
          <router-link to="/doctors" class="btn btn--primary">
            Browse Doctors
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
        </div>
      </transition>

    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "AppointmentsPage",
  setup() {
    const route = useRoute();
    const doctor = ref(null);

    if (route.query.id) {
      doctor.value = {
        id:        route.query.id,
        name:      route.query.name,
        specialty: route.query.specialty,
        image:     route.query.image,
        time:      route.query.time,
      };
      localStorage.setItem("doctor", JSON.stringify(doctor.value));
    } else {
      const saved = localStorage.getItem("doctor");
      if (saved) doctor.value = JSON.parse(saved);
    }

    function cancelBooking() {
      localStorage.removeItem("doctor");
      doctor.value = null;
    }

    return { doctor, cancelBooking };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=DM+Sans:wght@300;400;500;600&display=swap");

/* ── Variables ── */
:root {
  --navy: #0d1b2a;
  --teal: #0ab1ed;
  --teal-light: #e0f6fd;
  --surface: #f8fafb;
  --white: #ffffff;
  --text-primary: #0d1b2a;
  --text-secondary: #546e7a;
  --border: #e2e8f0;
  --font-display: "Playfair Display", Georgia, serif;
  --font-body: "DM Sans", system-ui, sans-serif;
  --radius-lg: 22px;
  --shadow-card: 0 8px 40px rgba(13,27,42,0.10);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
.appointments-page {
  font-family: var(--font-body); color: var(--text-primary);
  min-height: 100vh; padding: 60px 0 80px;
  position: relative; background: var(--surface);
}
.appointments-page__bg {
  position: absolute; inset: 0;
  background: linear-gradient(165deg, #e0f6fd 0%, #f8fafb 40%, #f8fafb 100%);
  z-index: 0;
}
.container {
  max-width: 680px; margin: 0 auto; padding: 0 24px;
  position: relative; z-index: 1;
}

/* ── Shared Buttons ── */
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 24px; border-radius: 50px; font-family: var(--font-body);
  font-weight: 600; font-size: 0.875rem; text-decoration: none;
  cursor: pointer; transition: all 0.28s cubic-bezier(0.34,1.56,0.64,1);
  border: none;
}
.btn--primary { background: var(--teal); color: #fff; box-shadow: 0 4px 18px rgba(10,177,237,0.3); }
.btn--primary:hover { background: #0081b4; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(10,177,237,0.4); }
.btn--secondary { background: var(--white); color: var(--navy); border: 1.5px solid var(--border); }
.btn--secondary:hover { border-color: var(--teal); color: var(--teal); transform: translateY(-2px); }
.btn--danger {
  background: transparent; color: #dc2626;
  border: 1.5px solid #fca5a5;
}
.btn--danger:hover {
  background: #fef2f2; border-color: #dc2626;
  transform: translateY(-2px); box-shadow: 0 4px 16px rgba(220,38,38,0.12);
}

/* ─── CONFIRMED CARD ─── */
.appt-card {
  background: var(--white); border-radius: var(--radius-lg);
  border: 1px solid var(--border); box-shadow: var(--shadow-card);
  overflow: hidden;
}

.appt-card__header {
  background: linear-gradient(135deg, #0d2c45, #062035);
  padding: 32px 36px; display: flex; align-items: center; gap: 20px;
}
.success-badge { flex-shrink: 0; }
.success-badge__ring {
  width: 60px; height: 60px; border-radius: 50%;
  background: rgba(16,185,129,0.15); border: 2px solid rgba(16,185,129,0.4);
  display: grid; place-items: center;
  animation: zoomIn 0.6s 0.1s cubic-bezier(0.34,1.56,0.64,1) both;
}
.appt-card__headline {
  font-family: var(--font-display); font-size: 1.5rem;
  font-weight: 700; color: #fff; margin-bottom: 4px;
}
.appt-card__subline { font-size: 0.85rem; color: rgba(255,255,255,0.55); font-weight: 300; }

/* ── Doctor Summary ── */
.doctor-summary {
  display: flex; align-items: center; gap: 20px;
  padding: 28px 36px; border-bottom: 1px solid var(--border);
}
.doctor-summary__avatar-wrap { position: relative; flex-shrink: 0; }
.doctor-summary__avatar {
  width: 80px; height: 80px; border-radius: 50%;
  object-fit: cover; object-position: top;
  border: 3px solid var(--teal);
  box-shadow: 0 4px 16px rgba(10,177,237,0.25);
}
.doctor-summary__verified {
  position: absolute; bottom: 2px; right: 2px;
  width: 22px; height: 22px; border-radius: 50%;
  background: #10b981; border: 2px solid #fff;
  display: grid; place-items: center;
}
.doctor-summary__name {
  font-family: var(--font-display); font-size: 1.3rem;
  font-weight: 700; color: var(--navy); margin-bottom: 6px;
}
.doctor-summary__specialty {
  display: inline-block; font-size: 0.78rem; font-weight: 600;
  color: var(--teal); background: var(--teal-light);
  padding: 4px 12px; border-radius: 20px;
}

/* ── Divider ── */
.appt-divider {
  display: flex; align-items: center; gap: 12px;
  padding: 0 36px; margin: 24px 0 8px;
}
.appt-divider::before, .appt-divider::after {
  content: ''; flex: 1; height: 1px; background: var(--border);
}
.appt-divider span {
  font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--text-secondary); white-space: nowrap;
}

/* ── Details Grid ── */
.details-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 0; padding: 0 28px 20px;
}
.detail-item {
  display: flex; align-items: flex-start; gap: 14px;
  padding: 16px 8px; border-radius: 12px;
  transition: background 0.2s;
}
.detail-item:hover { background: var(--surface); }
.detail-item__icon {
  width: 36px; height: 36px; border-radius: 10px;
  display: grid; place-items: center; flex-shrink: 0;
}
.detail-item__icon--blue { background: #dbeafe; color: #3b82f6; }
.detail-item__icon--teal { background: var(--teal-light); color: var(--teal); }
.detail-item__icon--green { background: #d1fae5; color: #10b981; }
.detail-item__icon--purple { background: #ede9fe; color: #8b5cf6; }

.detail-item__label {
  display: block; font-size: 0.72rem; font-weight: 600;
  letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--text-secondary); margin-bottom: 3px;
}
.detail-item__value {
  display: block; font-size: 0.95rem; font-weight: 600; color: var(--navy);
}
.detail-item__value--green { color: #10b981; }

/* ── Notice ── */
.appt-notice {
  margin: 4px 28px 24px; padding: 14px 18px;
  background: #fefce8; border: 1px solid #fde68a;
  border-radius: 12px; display: flex; align-items: flex-start; gap: 10px;
  color: #92400e; font-size: 0.82rem; line-height: 1.5;
}
.appt-notice svg { color: #f59e0b; flex-shrink: 0; margin-top: 1px; }

/* ── Actions ── */
.appt-actions {
  display: flex; align-items: center; justify-content: space-between;
  gap: 12px; padding: 20px 28px; border-top: 1px solid var(--border);
  flex-wrap: wrap;
}

/* ─── EMPTY CARD ─── */
.empty-card {
  background: var(--white); border-radius: var(--radius-lg);
  border: 1px solid var(--border); box-shadow: var(--shadow-card);
  padding: 64px 48px; text-align: center;
}
.empty-card__circle {
  width: 100px; height: 100px; border-radius: 50%;
  background: var(--teal-light); border: 2px dashed rgba(10,177,237,0.3);
  display: grid; place-items: center; margin: 0 auto 28px;
  color: var(--teal);
}
.empty-card__title {
  font-family: var(--font-display); font-size: 1.6rem;
  font-weight: 700; color: var(--navy); margin-bottom: 12px;
}
.empty-card__desc {
  font-size: 0.92rem; color: var(--text-secondary);
  line-height: 1.65; max-width: 380px; margin: 0 auto 32px;
  font-weight: 300;
}

/* ─── TRANSITIONS ─── */
.pop-enter-active { animation: popIn 0.55s cubic-bezier(0.34,1.56,0.64,1) both; }
.pop-leave-active { animation: popOut 0.3s ease both; }
@keyframes popIn {
  from { opacity: 0; transform: scale(0.92) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
@keyframes popOut {
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.95); }
}
.fade-enter-active { animation: fadeUp 0.5s ease-out both; }
.fade-leave-active { animation: fadeUp 0.3s ease-out reverse both; }
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes zoomIn {
  from { opacity: 0; transform: scale(0.5); }
  to { opacity: 1; transform: scale(1); }
}

/* ─── RESPONSIVE ─── */
@media (max-width: 600px) {
  .appt-card__header { padding: 24px 22px; gap: 14px; }
  .appt-card__headline { font-size: 1.2rem; }
  .doctor-summary { padding: 22px 22px; }
  .details-grid { grid-template-columns: 1fr; padding: 0 16px 16px; }
  .appt-divider { padding: 0 16px; }
  .appt-notice { margin: 4px 16px 20px; }
  .appt-actions { padding: 16px 22px; flex-direction: column; }
  .appt-actions .btn { width: 100%; justify-content: center; }
  .empty-card { padding: 48px 24px; }
}
</style>
