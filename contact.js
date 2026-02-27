/* ================================================================
   CONTACT PAGE — EMAILJS FORM SUBMISSION
================================================================ */

document.addEventListener('DOMContentLoaded', function() {

  const form = document.getElementById('contactForm');

  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const btn = form.querySelector('.submit-btn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

    emailjs.sendForm(
      'service_11z4vq8',
      'template_ia20z9t',
      this
    )
    .then(function() {
      window.location.href = "thank-you.html";  // 🔥 This is the important line
    })
    .catch(function(error) {
      alert('❌ Failed to send. Please call us directly at +91 8130201945.');
      console.error(error);
      btn.disabled = false;
      btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
    });
  });

});