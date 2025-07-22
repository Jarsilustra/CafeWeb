
    const productos = JSON.parse(localStorage.getItem("cart")) || [];
    const contenedor = document.getElementById("productos");
    const totalEl = document.getElementById("total");

    let total = 0;
    productos.forEach(producto => {
      const div = document.createElement("div");
      div.classList.add("producto");
      div.innerHTML = `<strong>${producto.nombre}</strong><br>Precio: $${producto.precio}`;
      contenedor.appendChild(div);
      total += producto.precio;
    });

    totalEl.textContent = `Total a pagar: $${total}`;
