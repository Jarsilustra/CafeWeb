 let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Actualiza el contador al cargar la página
  document.getElementById("cart-count").textContent = cart.length;

  // Función para añadir producto al carrito
  function addToCart(nombre, precio) {
    cart.push({ nombre, precio });
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("cart-count").textContent = cart.length;
  }
