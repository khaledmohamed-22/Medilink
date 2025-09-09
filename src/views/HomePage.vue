<template>
  <div class="home-wrapper">
    <div class="home d-flex align-items-center">
      <div class="container text-center text-lg-start">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="text-section">
              <h1 class="title">Find the Right Doctor Effortlessly</h1>
              <hr class="divider" />
              <p class="subtitle">
                Book your appointments in minutes, Anytime, Anywhere.
              </p>

              <div class="cta-buttons mt-4">
                <a href="Doctors">
                  <button class="btn btn-info shadow-lg">
                    Book Appointment
                  </button>
                </a>
                <a href="Contact">
                  <button class="btn btn-outline-light">Talk to Support</button>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6"></div>
        </div>
      </div>
    </div>

    <footer class="site-footer">
      <div class="container text-center">
        <h5 class="brand">MediLink</h5>
        <p class="tagline">Connecting patients and doctors seamlessly.</p>

        <ul class="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="Doctors">Services</a></li>
          <li><a href="Contact">Contact</a></li>
        </ul>

        <div class="social-icons">
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-twitter"></i></a>
          <a href="#"><i class="bi bi-linkedin"></i></a>
        </div>

        <p class="copyright">&copy; 2025 MediLink. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.home-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.home {
  background-image: linear-gradient(
    135deg,
    rgba(152, 223, 234, 0.8),
    rgba(10, 177, 237, 0.6)
  );
  background-size: cover;
  background-position: center;
  min-height: 90vh;
  padding: 60px 0;
  color: #fff;
}

.text-section {
  animation: slideInUp 0.8s ease-out;
}

.title {
  font-size: 3.2rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  color: #fff;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}

.subtitle {
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  color: #f0f0f0;
  max-width: 500px;
  /* On large screens, margin is set by text-lg-start, but on mobile it's auto */
  margin: 0 auto;
}

.divider {
  width: 100px;
  border: 2px solid #fff;
  margin: 20px auto 25px;
  opacity: 0.8;
}

/* --- Enhanced Button Styles --- */
.btn {
  border-radius: 50px;
  padding: 14px 32px;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  border-width: 2px;
  width: auto; /* Allow buttons to size to content */
}

.btn-info {
  background-color: #fff;
  color: #0ab1ed;
  border-color: #fff;
}

.btn-info:hover {
  background-color: transparent;
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.btn-outline-light {
  border-color: #fff;
  color: #fff;
}

.btn-outline-light:hover {
  background-color: #fff;
  color: #0ab1ed;
  transform: translateY(-3px);
}

/* --- Animations --- */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* --- Modern Footer --- */
.site-footer {
  background: #f8f9fa;
  color: #555;
  padding: 40px 15px; /* Add horizontal padding for mobile */
  font-family: "Poppins", sans-serif;
}

.site-footer .brand {
  color: #0ab1ed;
  font-weight: 700;
  font-size: 1.5rem;
}

.site-footer .tagline {
  font-size: 0.9rem;
  color: #777;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 25px 0;
  display: flex;
  flex-wrap: wrap; /* Allow links to wrap on smaller screens */
  justify-content: center;
  gap: 20px; /* Adjust gap for better spacing */
}

.footer-links li a {
  color: #555;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer-links li a:hover {
  color: #0ab1ed;
}

.social-icons a {
  color: #777;
  margin: 0 12px;
  font-size: 1.4rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-icons a:hover {
  color: #0ab1ed;
  transform: scale(1.2);
}

.copyright {
  font-size: 0.85rem;
  color: #aaa;
  margin-top: 20px;
}

/* --- Responsive Styles for Mobile --- */
@media (max-width: 768px) {
  .home {
    padding: 40px 15px; /* Adjust padding for smaller screens */
    min-height: 80vh;
    text-align: center; /* Ensure text is always centered on mobile */
  }

  .title {
    font-size: 2.5rem; /* Reduce title font size */
  }

  .subtitle {
    font-size: 1.1rem; /* Reduce subtitle font size */
  }

  .divider {
    margin: 15px auto 20px; /* Adjust divider margin */
  }

  .cta-buttons {
    display: flex;
    flex-direction: column; /* Stack buttons vertically */
    align-items: center;
    gap: 15px; /* Add space between stacked buttons */
  }

  .cta-buttons .btn {
    width: 100%; /* Make buttons full width of their container */
    max-width: 300px; /* Set a max-width for better appearance */
    margin: 0 !important; /* Reset horizontal margin */
  }

  .footer-links {
    gap: 15px; /* Reduce gap in footer links */
  }
}
</style>
