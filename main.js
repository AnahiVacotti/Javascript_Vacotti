document.addEventListener('DOMContentLoaded', function() {
   
    const combos = [
        {
            numero: 1,
            alimento: 'Balde de pochoclos grande',
            gaseosa: 'Coca cola x2',
            precio: '$2000'
        },
         combo2 = {
            numero: 2,
            alimento:" 1 Balde de pochoclos chico",
            gaseosa:"Coca cola x1",
            precio:"$1000",   
        },
         combo3 = {
            numero: 3,
            alimento:"Super pancho x2",
            gaseosa: "Coca cola x2",
            precio:"$2000"
        },   
        combo4 = {
            numero: 4,
            alimento:"Super pancho x1",
            gaseosa:"Coca cola x1",
            precio:"$1000",
        }, 
        combo5 = {
            numero: 5,
            alimento: "Balde de pochoclos grande",
            gaseosa:"Coca cola x3",
            golosinas:"Gomitas, rocklets, chocolate", 
            precio:"$3000",
        }
        
    ];

    const combosContainer = document.querySelector('.combos-container');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    function mostrarCombosEnPagina() {
        let combosHtml = "";
        for (let i = 0; i < combos.length; i++) {
            const combo = combos[i];
            combosHtml += `
                <div class="combo">
                    <h3>Combo ${combo.numero}</h3>
                    <p> ${combo.alimento}</p>
                    <p> ${combo.gaseosa}</p>
                    <p>Precio: ${combo.precio}</p>
                    <button class="agregar-carrito" data-index="${i}">Agregar al carrito</button>
                </div>
            `;
        }
        combosContainer.innerHTML = combosHtml;
    }


    function actualizarCarrito() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }
    

    const notificacion = document.querySelector('.notificacion');
    
    function mostrarNotificacion(mensaje) {
        notificacion.textContent = mensaje;
        notificacion.classList.add('visible');
        setTimeout(() => {
            notificacion.classList.remove('visible');
        }, 3000); 
    }

    combosContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('agregar-carrito')) {
            const index = parseInt(event.target.getAttribute('data-index'));
            if (!isNaN(index) && index >= 0 && index < combos.length) {
                agregarComboAlCarrito(index);
            }
        }
    });

    const carritoLista = document.querySelector('.carrito-lista');

    
    function agregarComboAlCarrito(index) {
        const comboSeleccionado = combos[index];
        carrito.push(comboSeleccionado);
        actualizarCarrito();
        mostrarNotificacion('Combo agregado al carrito.');
    }
    

    mostrarCombosEnPagina();
    
});

