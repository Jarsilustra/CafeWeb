// Obtener datos
const productos = JSON.parse(localStorage.getItem("cart")) || [];
const contenedor = document.getElementById("productos");
const totalEl = document.getElementById("total");
const vaciarBtn = document.getElementById("vaciar-carrito");
const finalizarBtn = document.getElementById("finalizar-compra");
const seguirBtn = document.getElementById("seguir-comprando");

// Mostrar productos y calcular total
let total = 0;
productos.forEach((producto) => {
  const div = document.createElement("div");
  div.classList.add("producto");
  div.innerHTML = `<strong>${producto.nombre}</strong><br>Precio: $${producto.precio}`;
  contenedor.appendChild(div);
  total += producto.precio;
});
totalEl.textContent = `Total a pagar: $${total}`;

// Vaciar carrito
vaciarBtn.addEventListener("click", () => {
  localStorage.removeItem("cart");
  location.reload();
});

// Finalizar compra
finalizarBtn.addEventListener("click", () => {
  if (productos.length === 0) {
    alert("Tu carrito está vacío.");
  } else {
    alert("¡Compra finalizada con éxito!");
    localStorage.removeItem("cart");
    location.reload();
  }
});

// Seguir comprando
seguirBtn.addEventListener("click", () => {
  window.location.href = "menu.html"; // Cambia esto según tu ruta
});
