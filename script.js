/* ================== MOBILE MENU ================== */
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("show"); // ✅ ត្រូវ CSS
});

/* ================== THEME TOGGLE ================== */
const toggleBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "🌙";
  }
});

/* ================== SCROLL REVEAL ================== */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.classList.add("active"); // ✅ ត្រូវ CSS
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ================== CONTACT BUTTON ================== */
function goContact() {
  document.getElementById("contact")
    .scrollIntoView({ behavior: "smooth" });
}