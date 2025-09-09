<template>
  <div class="search-bar text-center">
    <input
      type="text"
      class="form-control search-input"
      placeholder=" Search doctors by name or specialty..."
    />
    <button class="btn btn-primary search-btn">Search</button>
  </div>
  <div class="container py-4">
    <!-- Title -->
    <h2 class="text-center my-4 fw-bold text-primary">Doctors</h2>

    <!-- Search Bar -->
    <div class="row mb-5">
      <div class="col-md-6 mx-auto">
        <input
          type="text"
          class="form-control form-control-lg shadow-sm rounded-pill px-4"
          placeholder=" Search for products..."
          v-model="searchText"
        />
      </div>
    </div>

    <!-- Products Cards -->
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-lg border-0 rounded-4 product-card">
          <img
            src="../assets/openart-image_ZUl_CWpQ_1756928961954_raw.jpg"
            class="card-img-top p-3"
            alt="doctor image"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title fw-bold text-dark">ahmed</h5>
            <p class="card-text text-success fw-bold fs-5 mb-4">afafaff</p>
            <button
              to="/Home"
              class="btn btn-primary w-100 mt-auto rounded-pill fw-semibold"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { watch, ref } from "vue";
export default {
  setup() {
    const searchText = ref("");
    const filtereDoctors = ref(["ahmed", "mohamed"]);
    const Doctors = [];

    watch(searchText, (newValue) => {
      filtereDoctors.value = Doctors.value.filter((p) =>
        p.title.toLowerCase().includes(newValue.toLowerCase())
      );
    });
  },
};
</script>
