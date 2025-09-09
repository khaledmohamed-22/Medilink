<template>
  <div class="contact-page">
    <div class="container">
      <div class="contact-card shadow-lg">
        <div class="row g-0">
          <div class="col-lg-5 info-column">
            <h2 class="info-title">Get in Touch</h2>
            <p class="info-subtitle">
              We'd love to hear from you. Here's how you can reach us.
            </p>
            <ul class="contact-details">
              <li>
                <i class="bi bi-geo-alt-fill"></i>
                <span>123 Medical Lane, Cairo, Egypt</span>
              </li>
              <li>
                <i class="bi bi-telephone-fill"></i>
                <span>+20 123 456 7890</span>
              </li>
              <li>
                <i class="bi bi-envelope-fill"></i>
                <span>support@medilink.com</span>
              </li>
            </ul>
            <div class="info-footer">We typically respond within 24 hours.</div>
          </div>

          <div class="col-lg-7 form-column">
            <form class="contact-form" @submit.prevent="clickme">
              <h2 class="form-title text-center">Send us a Message</h2>
              <div class="mb-4 input-group">
                <i class="bi bi-person-fill input-icon"></i>
                <input
                  class="form-control"
                  type="text"
                  required
                  placeholder="Your Name"
                />
              </div>

              <div class="mb-4 input-group">
                <i class="bi bi-envelope-fill input-icon"></i>
                <input
                  class="form-control"
                  type="email"
                  required
                  placeholder="Your Email"
                />
              </div>

              <div class="mb-4 input-group">
                <i class="bi bi-chat-right-text-fill input-icon-textarea"></i>
                <textarea
                  class="form-control"
                  placeholder="Your message"
                  rows="5"
                  required
                ></textarea>
              </div>

              <div class="d-flex justify-content-center">
                <button type="submit" class="btn send-btn">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    function clickme() {
      alert("Your Message Has Been Sent!");
    }
    return { clickme };
  },
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");

.contact-page {
  background: #f4f7fc;
  min-height: 100vh;
  padding: 50px 15px;
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-card {
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  border: none;
}

/* --- Info Column (Left Side) --- */
.info-column {
  background-color: #0d6efd;
  color: #fff;
  padding: 40px 35px;
  /* Border radius for large screens */
  border-radius: 20px 0 0 20px;
}

.info-title {
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 10px;
}

.info-subtitle {
  color: #e9ecef;
  font-size: 1rem;
  margin-bottom: 30px;
}

.contact-details {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-details li {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 1rem;
}

.contact-details i {
  font-size: 1.5rem;
  margin-right: 15px;
  width: 25px;
}

.info-footer {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color: #e9ecef;
  font-size: 0.9rem;
}

/* --- Form Column (Right Side) --- */
.form-column {
  padding: 40px 35px;
}
.form-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1b3a4b;
  margin-bottom: 30px;
}

.input-group {
  position: relative;
}

.input-icon {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: #adb5bd;
}

.input-icon-textarea {
  position: absolute;
  top: 18px;
  left: 15px;
  color: #adb5bd;
}

.form-control {
  border-radius: 10px;
  padding: 12px 15px 12px 45px; /* Left padding for icon */
  font-size: 1rem;
  border: 1px solid #ced4da;
  transition: all 0.3s ease;
}

textarea.form-control {
  padding-top: 15px;
}

.form-control:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.2);
  outline: none;
}

.send-btn {
  background: #0d6efd;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 12px 40px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.send-btn:hover {
  background: #0b5ed7;
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(13, 110, 253, 0.3);
}

/* --- Responsive Adjustments --- */

/* For tablets and below (when columns stack) */
@media (max-width: 991px) {
  .info-column {
    /* Top corners rounded, bottom corners square */
    border-radius: 20px 20px 0 0;
  }
  .form-column {
    /* Match the info column to complete the card shape */
    border-radius: 0 0 20px 20px;
  }
}

/* For smaller mobile devices */
@media (max-width: 768px) {
  .contact-page {
    padding: 20px 15px; /* Reduce page padding */
  }

  .info-column,
  .form-column {
    padding: 30px 25px; /* Reduce column padding */
  }

  .info-title {
    font-size: 1.8rem;
  }

  .form-title {
    font-size: 1.6rem;
    margin-bottom: 25px;
  }

  .contact-details li {
    font-size: 0.95rem; /* Slightly smaller font for details */
  }

  .send-btn {
    padding: 10px 30px;
    font-size: 1rem;
  }
}
</style>
