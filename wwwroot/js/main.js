const menuBtn = document.getElementById("menuBtn");
  const sideMenu = document.getElementById("sideMenu");
  const closeMenu = document.getElementById("closeMenu");
  const overlay = document.getElementById("overlay");

  menuBtn.addEventListener("click", () => {
    sideMenu.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
  });

  closeMenu.addEventListener("click", () => {
    sideMenu.classList.add("translate-x-full");
    overlay.classList.add("hidden");
  });
const nav = document.getElementById("mainNav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      // Cuando se scrollea hacia abajo, mostrar nav
      nav.classList.remove("-translate-y-full", "opacity-0");
      nav.classList.add("translate-y-0", "opacity-100");
    } else {
      // Cuando se vuelve arriba, ocultar nav
      nav.classList.remove("translate-y-0", "opacity-100");
      nav.classList.add("-translate-y-full", "opacity-0");
    }
  });
