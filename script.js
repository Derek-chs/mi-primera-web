function abrirModal(nombre, descripcion, imagen) {
  let modal = document.getElementById("modal");
  modal.classList.add("active");

  document.getElementById("titulo").innerText = nombre;
  document.getElementById("descripcion").innerText = descripcion;
  document.getElementById("imagen").src = imagen;
}

function cerrarModal() {
  document.getElementById("modal").classList.remove("active");
}
