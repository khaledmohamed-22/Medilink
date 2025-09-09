<template>
  <div class="appointments-page">
    <div class="appointments-container">
      <div v-if="doctor" class="success-icon">
        <i class="bi bi-check-circle-fill"></i>
      </div>

      <h2 class="page-title">
        {{ doctor ? "Appointment Confirmed" : "My Appointment" }}
      </h2>

      <div v-if="doctor" class="appointment-details">
        <div class="row align-items-center">
          <div class="col-md-4 text-center">
            <img :src="doctor.image" alt="Doctor" class="doctor-image" />
          </div>
          <div class="col-md-8">
            <div class="doctor-info">
              <h3>{{ doctor.name }}</h3>
              <p class="info-item">
                <span class="info-label">Specialty:</span>
                <span class="info-value specialty">{{ doctor.specialty }}</span>
              </p>
              <p class="info-item">
                <span class="info-label">Time:</span>
                <span class="info-value time">{{ doctor.time }}</span>
              </p>
              <button @click="cancelBooking" class="btn-cancel mt-3">
                Cancel Booking
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="no-appointment">
        <div class="empty-state-icon">
          <i class="bi bi-calendar-x"></i>
        </div>
        <p class="empty-state-text">You have no upcoming appointments.</p>
        <router-link to="/doctors" class="btn-book-now">Book Now</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// Your <script> section remains the same. It's already well-structured.
import { useRoute } from "vue-router";
import { ref } from "vue";

export default {
  setup() {
    const route = useRoute();
    const doctor = ref(null);

    // Logic to set or get appointment from localStorage
    if (route.query.id) {
      doctor.value = {
        id: route.query.id,
        name: route.query.name,
        specialty: route.query.specialty,
        image: route.query.image,
        time: route.query.time,
      };
      localStorage.setItem("doctor", JSON.stringify(doctor.value));
    } else {
      const savedDoctor = localStorage.getItem("doctor");
      if (savedDoctor) {
        doctor.value = JSON.parse(savedDoctor);
      }
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
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");

.appointments-page {
  background-color: #f8f9fa;
  min-height: 100vh;
  padding: 40px 15px;
  font-family: "Poppins", sans-serif;
}

.appointments-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  animation: fadeIn 0.8s ease-out;
}

.success-icon {
  color: #28a745;
  font-size: 3rem;
  margin-bottom: 15px;
  animation: zoomIn 0.5s ease-out;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 30px;
  color: #1b3a4b;
}

.appointment-details {
  animation: slideUp 0.8s ease-out;
}

.doctor-image {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 5px solid #0ab1ed;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.doctor-info {
  text-align: center;
}

.doctor-info h3 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #1b3a4b;
}

.info-item {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #6c757d;
}
.info-label {
  font-weight: 600;
  color: #343a40;
}
.info-value.specialty {
  color: #0ab1ed;
  font-weight: 500;
}
.info-value.time {
  font-weight: 500;
  background-color: #e9ecef;
  padding: 3px 10px;
  border-radius: 50px;
  color: #495057;
}

.btn-cancel {
  background: transparent;
  color: #dc3545;
  padding: 10px 25px;
  border: 2px solid #dc3545;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-cancel:hover {
  background: #dc3545;
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.2);
}

/* --- Empty State --- */
.no-appointment {
  padding: 30px;
  animation: fadeIn 1s ease-in-out;
}
.empty-state-icon {
  font-size: 4rem;
  color: #0ab1ed;
  margin-bottom: 20px;
}
.empty-state-text {
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 25px;
}
.btn-book-now {
  background: #0ab1ed;
  color: #fff;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}
.btn-book-now:hover {
  background: #0077b6;
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(10, 177, 237, 0.3);
}

/* --- Responsive Layout --- */
@media (min-width: 768px) {
  .doctor-info {
    text-align: left;
  }
  .doctor-image {
    width: 180px;
    height: 180px;
  }
}

/* --- Animations --- */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes zoomIn {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
