AOS.init({
  duration: 800,
  easing: "ease-out",
  once: true,
});

function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
}

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('slide-in');
    document.getElementById('overlay').classList.add('hidden');
  });
});

document.querySelectorAll('.mobile-menu a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      document.getElementById('mobileMenu').classList.remove('slide-in');
      document.getElementById('overlay').classList.add('hidden');
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  });
});

const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('slide-in');
  overlay.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('slide-in');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', () => {
  mobileMenu.classList.remove('slide-in');
  overlay.classList.add('hidden');
});


document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;
  const messageEl = document.getElementById("contact-message");

  emailjs.sendForm("service_2utfk6r", "template_s8e73im", form)
    .then(() => {
      messageEl.textContent = "Message sent ✅ ";
      form.reset();

      setTimeout(() => {
        messageEl.textContent = "";
      }, 5000);
    })
    .catch((error) => {
      messageEl.textContent = "Failed to send message. Please try again.";
      setTimeout(() => {
        messageEl.textContent = "";
      }, 5000);

      console.error("EmailJS error:", error);
    });
});

