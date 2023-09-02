document.addEventListener('DOMContentLoaded', function() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoLista = document.querySelector('.carrito-lista');
    const notificacion = document.querySelector('.notificacion');

    function actualizarCarrito() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function mostrarCarritoEnPagina() {
        carritoLista.innerHTML = "";
        carrito.forEach((combo, index) => {
            const comboItem = document.createElement('li'); 
            comboItem.innerHTML = `
                <div class="combo-carrito">
                    <h3>Combo ${combo.numero}</h3>
                    <p> ${combo.alimento}</p>
                    <p> ${combo.gaseosa}</p>
                    <p>Precio: ${combo.precio}</p>
                    <button class="eliminar-combo" data-index="${index}">Eliminar del carrito</button>
                </div>
            `;
            carritoLista.appendChild(comboItem);
        });
    }

    function mostrarNotificacion(mensaje) {
        notificacion.textContent = mensaje;
        notificacion.classList.add('visible');
        setTimeout(() => {
            notificacion.classList.remove('visible');
        }, 3000); 
    }

    carritoLista.addEventListener('click', function(event) {
        if (event.target.classList.contains('eliminar-combo')) {
            const index = parseInt(event.target.getAttribute('data-index'));
            if (!isNaN(index) && index >= 0 && index < carrito.length) {
                carrito.splice(index, 1); 
                actualizarCarrito();
                mostrarNotificacion('Combo eliminado del carrito.');
                mostrarCarritoEnPagina(); 
            }
        }
    });

    mostrarCarritoEnPagina();
});
