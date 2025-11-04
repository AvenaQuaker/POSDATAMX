AOS.init();

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
      nav.classList.remove("-translate-y-full", "opacity-0");
      nav.classList.add("translate-y-0", "opacity-100");
    } else {
      nav.classList.remove("translate-y-0", "opacity-100");
      nav.classList.add("-translate-y-full", "opacity-0");
    }
});

document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    const response = await fetch("/enviarCorreo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: name, email: email, mensaje: message })
    });

    const result = await response.json();

    if (result.success) {
        alert("✅ Tu mensaje ha sido enviado correctamente.");
        e.target.reset();
    } else {
        alert("❌ Ocurrió un error al enviar tu mensaje.");
    }
});

