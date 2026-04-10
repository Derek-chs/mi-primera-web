function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.style.display = 'none';
  });

  document.getElementById(sectionId).style.display = 'block';
}

function toggleMenu() {
  showSection('menu');

  let menu = document.getElementById('menuOptions');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function reservar() {
  window.open('https://wa.me/50688888888', '_blank');
}

/* MODAL */
function abrirModal(nombre, descripcion, imagen) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("titulo").innerText = nombre;
  document.getElementById("descripcion").innerText = descripcion;
  document.getElementById("imagen").src = imagen;
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

/* INICIO */
showSection('home');
