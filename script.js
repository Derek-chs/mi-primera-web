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

/* ========================= */
/* 🔥 GALERIA PREMIUM */
/* ========================= */

let currentSlide = 0;

/* 🔥 SLIDER ACTIVO */
let activeSlider = document.querySelector(".slider.active");

/* 🔥 IMAGENES */
let slides = activeSlider.querySelectorAll("img");

/* ========================= */
/* 🔥 MOSTRAR CATEGORIA */
/* ========================= */

function mostrarCategoria(id, button){

  /* REMOVER ACTIVE */
  document
    .querySelectorAll(".slider")
    .forEach(slider => {
      slider.classList.remove("active");
    });

  /* MOSTRAR NUEVO */
  activeSlider = document.getElementById(id);

  activeSlider.classList.add("active");

  /* BOTONES */
  document
    .querySelectorAll(".tabs button")
    .forEach(btn => {
      btn.classList.remove("active-tab");
    });

  button.classList.add("active-tab");

  /* RESET */
  currentSlide = 0;

  slides = activeSlider.querySelectorAll("img");

  mostrarSlide(currentSlide);
}

/* ========================= */
/* 🔥 MOSTRAR SLIDE */
/* ========================= */

function mostrarSlide(index){

  slides.forEach(img => {
    img.classList.remove("active-slide");
  });

  slides[index].classList.add("active-slide");
}

/* ========================= */
/* 🔥 MOVER SLIDE */
/* ========================= */

function moverSlide(direction){

  currentSlide += direction;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  if(currentSlide < 0){
    currentSlide = slides.length - 1;
  }

  mostrarSlide(currentSlide);
}

/* ========================= */
/* 🔥 AUTO PLAY */
/* ========================= */

setInterval(() => {

  moverSlide(1);

}, 5000);
