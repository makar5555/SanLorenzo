let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoElement = document.getElementById('carrito');
    carritoElement.innerHTML = '';
    
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
        carritoElement.appendChild(li);
    });
    
    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}

function realizarPago() {
    // Aquí puedes agregar la lógica para procesar el pago
    alert('para coller o dinero e productos venid a panaderia san lorenzo');
    carrito = [];
    total = 0;
    actualizarCarrito();
}

function mostrarInfo(elemento) {
    var info = elemento.querySelector('.info');
    if (info.style.display === "none") {
      info.style.display = "block";
    } else {
      info.style.display = "none";
    }
  }
  