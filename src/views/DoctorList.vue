<template>
  <div class="doctors-page">
    <div class="container py-5">
      <h2 class="page-title text-center mb-4 fade-down">Our Doctors</h2>
      <p class="page-subtitle text-center mb-5 fade-down">
        Find the specialist you need and book with ease.
      </p>

      <div class="row justify-content-center fade-left">
        <div class="col-lg-7">
          <div class="search-wrapper">
            <i class="bi bi-search search-icon"></i>
            <input
              type="text"
              class="form-control search-input"
              placeholder="Search by name or specialty (e.g., 'Carter' or 'Dentist')"
              v-model="searchText"
            />
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div
          class="col-md-6 col-lg-4 mb-4"
          v-for="doctor in filteredDoctors"
          :key="doctor.id"
        >
          <div class="doctor-card h-100 fade-zoom">
            <div class="card-img-container">
              <img
                :src="doctor.image"
                class="doctor-image"
                alt="doctor image"
              />
            </div>
            <div class="card-body text-center d-flex flex-column">
              <h5 class="card-title">{{ doctor.name }}</h5>
              <p class="card-specialty">{{ doctor.specialty }}</p>
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
                class="btn btn-primary booking-btn mt-auto"
              >
                Book Appointment
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import onMounted and onUnmounted for lifecycle hooks
import { ref, computed, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const searchText = ref("");
    const doctors = ref([
      // ... your doctors array
      {
        id: 1,
        name: "Dr. Sarah Johnson",
        specialty: "Dentist",
        image: require("../assets/doc1.jpg"),
      },
      {
        id: 2,
        name: "Dr. Ahmed Hassan",
        specialty: "Cardiologist",
        image: require("../assets/doc7.jpg"),
      },
      {
        id: 3,
        name: "Dr. Emily Carter",
        specialty: "Dermatologist",
        image: require("../assets/doc2.jpg"),
      },
      {
        id: 4,
        name: "Dr. Maged Ibrahim",
        specialty: "Pediatrician",
        image: require("../assets/Gemini_Generated_Image_h4p8qeh4p8qeh4p8.png"),
      },
      {
        id: 5,
        name: "Dr. Nour",
        specialty: "Neurologist",
        image: require("../assets/doc4.jpg"),
      },
      {
        id: 6,
        name: "Dr. David Lee",
        specialty: "Orthopedic",
        image: require("../assets/doc6.jpg"),
      },
    ]);

    const filteredDoctors = computed(() => {
      if (!searchText.value) return doctors.value;
      const searchLower = searchText.value.toLowerCase();
      return doctors.value.filter(
        (doc) =>
          doc.name.toLowerCase().includes(searchLower) ||
          doc.specialty.toLowerCase().includes(searchLower)
      );
    });

    const observer = ref(null);

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    };

    onMounted(() => {
      observer.value = new IntersectionObserver(handleIntersect, {
        root: null,
        threshold: 0.1,
      });

      const elementsToAnimate = document.querySelectorAll(".fade-zoom");
      elementsToAnimate.forEach((el) => observer.value.observe(el));
    });

    onUnmounted(() => {
      if (observer.value) {
        observer.value.disconnect();
      }
    });

    return { searchText, filteredDoctors };
  },
};
</script>

<style scoped>
.doctors-page {
  background-color: #f8f9fa;
  min-height: 100vh;
}
.page-title {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 2.8rem;
  color: #1b3a4b;
  margin-top: 5%;
}
.page-subtitle {
  font-size: 1.1rem;
  color: #6c757d;
}

.search-wrapper {
  position: relative;
}
.search-icon {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  color: #adb5bd;
  font-size: 1.2rem;
}
.search-input {
  border-radius: 50px;
  padding: 15px 25px 15px 55px;
  font-size: 1.1rem;
  border: 1px solid #dee2e6;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
}
.search-input:focus {
  box-shadow: 0 5px 20px rgba(0, 119, 182, 0.2);
  border-color: #0ab1ed;
  outline: none;
}

.doctor-card {
  background-color: #fff;
  border: none;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.doctor-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
}
.card-img-container {
  height: 60%;
  overflow: hidden;
}
.doctor-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}
.card-body {
  padding: 25px;
}
.card-title {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.4rem;
  color: #1b3a4b;
  margin-bottom: 5px;
}
.card-specialty {
  color: #0077b6;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 20px;
}
.booking-btn {
  background: linear-gradient(135deg, #0ab1ed, #0077b6);
  border: none;
  border-radius: 50px;
  padding: 12px 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 119, 182, 0.2);
}
.booking-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 119, 182, 0.3);
}

@keyframes fadeDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.fade-down {
  animation: fadeDown 0.8s ease-out forwards;
}
.fade-left {
  animation: fadeLeft 0.8s ease-out forwards;
}

.fade-zoom {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.fade-zoom.in-view {
  opacity: 1;
  transform: scale(1);
}
</style>
