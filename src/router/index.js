import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomePage.vue";
import Doctors from "@/views/DoctorList.vue";
import Appointments from "@/views/AppointmentsPage.vue";
import Contact from "@/views/ContactPage.vue";

import BookingPage from "@/views/BookingPage.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/Doctors", name: "Doctors", component: Doctors },
  { path: "/Appointments", name: "Appointments", component: Appointments },
  { path: "/Contact", name: "Contact", component: Contact },

  { path: "/Booking", name: "BookingPage", component: BookingPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
