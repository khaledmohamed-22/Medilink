<template>
  <div class="booking-page">
    <div class="hero-section container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12 text-center text-lg-start">
          <div class="text-content">
            <h1 class="title">Book Your Doctor Appointment Online</h1>
            <hr class="divider" />

            <div v-if="doctorName" class="doctor-info">
              <p class="subtitle"><strong>Doctor:</strong> {{ doctorName }}</p>
              <p class="subtitle">
                <strong>Specialty:</strong> {{ doctorSpecialty }}
              </p>
            </div>

            <p class="description">
              MediLink makes it easy for patients to find the right doctor and
              book appointments seamlessly.
            </p>

            <div class="cta-buttons">
              <a href="#booking-form">
                <button class="btn btn-primary shadow">
                  Book an Appointment
                </button>
              </a>
              <a href="tel:+201234567890">
                <button class="btn btn-secondary">Call Now</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-12 text-center">
          <div class="hero-image-wrapper">
            <img
              v-if="doctorImage"
              class="hero-image img-fluid"
              :src="doctorImage"
              alt="Doctor"
            />
            <img
              v-else
              class="hero-image img-fluid"
              src="../assets/doc.png"
              alt="Doctor"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="form-section container" id="booking-form">
      <div class="row justify-content-center">
        <div class="col-lg-7 col-md-10">
          <form class="booking-form shadow-lg" @submit.prevent="onclick">
            <h2 class="form-title text-center">Appointment Details</h2>

            <div class="mb-3">
              <label class="form-label" for="name">Full Name:</label>
              <input
                id="name"
                class="form-control"
                type="text"
                required
                placeholder="e.g., John Doe"
              />
            </div>

            <div class="mb-3">
              <label for="number" class="form-label">Phone Number:</label>
              <input
                id="number"
                class="form-control"
                type="tel"
                required
                placeholder="e.g., 01234567890"
              />
            </div>

            <div class="mb-3">
              <label for="date" class="form-label">Available Times:</label>
              <select
                class="form-select"
                id="date"
                v-model="appointmentTime"
                required
              >
                <option disabled value="">Please select a time</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="1:00 PM">1:00 PM</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="Email" class="form-label">Email Address:</label>
              <input
                id="Email"
                class="form-control"
                type="email"
                placeholder="e.g., name@example.com"
              />
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">Additional Notes:</label>
              <textarea
                id="message"
                class="form-control"
                placeholder="Enter a brief message (optional)"
                rows="4"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary w-100 mt-3">
              Confirm Reservation
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const doctorId = route.query.id;
    const doctorName = route.query.name;
    const doctorSpecialty = route.query.specialty;
    const doctorImage = route.query.image;
    const appointmentTime = ref("");

    function onclick() {
      alert("Your Reservation is Submitted");
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
      onclick,
      appointmentTime,
    };
  },
};
</script>

<style scoped>
/* --- General Page Styles --- */
.booking-page {
  background-color: #f8f9fa;
  font-family: "Poppins", sans-serif;
  padding: 4rem 0;
  overflow-x: hidden; /* Prevent horizontal scroll */
}

/* --- Hero Section --- */
.hero-section {
  padding-bottom: 5rem;
}
.text-content {
  animation: fadeInLeft 1s ease-out;
}
.title {
  font-size: 2.8rem;
  font-weight: 700;
  color: #1b3a4b;
  line-height: 1.2;
}
.divider {
  width: 80px;
  border: 2px solid #0ab1ed;
  opacity: 1;
  margin: 1.5rem 0;
}
.doctor-info {
  margin-bottom: 1.5rem;
}
.subtitle {
  font-size: 1.2rem;
  color: #343a40;
  margin-bottom: 0.5rem;
}
.description {
  font-size: 1rem;
  color: #6c757d;
  margin-bottom: 2rem;
}

/* --- NEW: Image Wrapper for enhanced styling --- */
.hero-image-wrapper {
  position: relative;
  width: fit-content; /* Ensure wrapper only takes image width */
  max-width: 85%;
  margin: 0 auto; /* Center the wrapper */
  padding: 10px; /* Space for the "glowing" effect */
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    #e0f2f7,
    #c1e4f3
  ); /* Soft gradient background */
  box-shadow: 0 15px 30px rgba(0, 119, 182, 0.2); /* Enhanced shadow */
  transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
}

.hero-image-wrapper:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 119, 182, 0.3);
}

.hero-image {
  border-radius: 15px; /* Slightly rounded corners for the image */
  border: 3px solid #fff; /* White border around the image */
  display: block; /* Remove extra space below image */
  width: 100%; /* Make image fill its wrapper */
  height: auto;
  object-fit: cover;
  animation: fadeInRight 1.3s ease-out;
}

/* --- Buttons --- */
.btn {
  border-radius: 50px;
  padding: 12px 30px;
  font-weight: 600;
  font-size: 1rem;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}
.btn-primary {
  background-color: #0ab1ed;
  color: #fff;
}
.btn-primary:hover {
  background-color: #0077b6;
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}
.btn-secondary {
  background-color: #e9ecef;
  color: #1b3a4b;
  border-color: #dee2e6;
}
.btn-secondary:hover {
  background-color: #dee2e6;
  border-color: #adb5bd;
  transform: translateY(-3px);
}
.cta-buttons > a > .btn {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

/* --- Form Section --- */
.form-section {
  padding-bottom: 4rem;
}
.booking-form {
  background: #fff;
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid #e9ecef;
}
.form-title {
  font-weight: 700;
  color: #1b3a4b;
  margin-bottom: 2rem;
}
.form-label {
  font-weight: 600;
  color: #343a40;
  margin-bottom: 0.5rem;
}
.form-control,
.form-select {
  border-radius: 10px;
  padding: 12px 15px;
  font-size: 1rem;
  border: 1px solid #ced4da;
}
.form-control:focus,
.form-select:focus {
  border-color: #0ab1ed;
  box-shadow: 0 0 0 3px rgba(10, 177, 237, 0.2);
  outline: none;
}

/* --- Animations --- */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* --- Responsive Styles --- */
@media (max-width: 991px) {
  .hero-section {
    padding-bottom: 3rem;
  }
  .hero-image-wrapper {
    /* Apply margin to the wrapper now */
    margin-top: 3rem;
  }
  .text-content,
  .hero-image-wrapper {
    /* Center the wrapper too */
    text-align: center;
  }
  .divider {
    margin: 1.5rem auto;
  }
  .cta-buttons {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .booking-page {
    padding: 2rem 0;
  }
  .title {
    font-size: 2.2rem;
  }
  .subtitle {
    font-size: 1.1rem;
  }
  .description {
    font-size: 0.95rem;
  }
  .booking-form {
    padding: 1.5rem;
  }
  .cta-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .cta-buttons > a {
    width: 100%;
    max-width: 300px;
  }
  .cta-buttons > a > .btn {
    width: 100%;
    margin: 0;
  }
}
</style>
