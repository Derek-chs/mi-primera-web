function reservar() {
  window.open('https://wa.me/50688888888', '_blank');
}

function abrirModal(nombre, descripcion, imagen) {
  document.getElementById("modal").classList.add("active");
  document.getElementById("titulo").innerText = nombre;
  document.getElementById("descripcion").innerText = descripcion;
  document.getElementById("imagen").src = imagen;
}

function cerrarModal() {
  document.getElementById("modal").classList.remove("active");
}

/* 🔥 MENU HAMBURGUESA */
function toggleMenu() {
  document.querySelector("nav").classList.toggle("active");
}

/* 🔥 OPCIONAL: cerrar menú al hacer click */
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector("nav").classList.remove("active");
  });
});

/* 🔥 ARREGLO IMPORTANTE (para que no falle en GitHub) */
document.addEventListener("DOMContentLoaded", function() {

  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelector("nav").classList.remove("active");
    });
  });

});

/* ========================= */
/* 🔥 LO NUEVO (SLIDER TABS) */
/* ========================= */

function mostrarCategoria(id) {
  document.querySelectorAll('.slider').forEach(el => {
    el.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
}
