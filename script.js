// Navbar Toggle for Mobile
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');

document.querySelector('.logo').addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Smooth Scroll Reveal
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach(section => {
    const pos = section.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;
    if (pos < screenPos) section.classList.add('active');
  });
});

// ===== MOUSE TRAIL EFFECT =====
const trail = document.createElement("div");
trail.classList.add("trail");
document.body.appendChild(trail);

document.addEventListener("mousemove", e => {
  const spark = document.createElement("span");
  spark.className = "spark";
  spark.style.left = e.pageX + "px";
  spark.style.top = e.pageY + "px";
  document.body.appendChild(spark);
  setTimeout(() => spark.remove(), 500);
});
