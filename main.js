
document.addEventListener('DOMContentLoaded', function() {
    alert("Bienvenidos al sector Candy de CineVac, aqui podras comprar en linea los mejores combos para disfrutar viendo tus peliculas favoritas.")

    let combo1 = {
        alimento: ' Balde de pochoclos grande',
        gaseosa: 'Coca cola x2',
        precio: "$2000",  
    }


    let combo2 = {
        alimento:" 1 Balde de pochoclos chico",
        gaseosa:"Coca cola x1",
        precio:"$1000",   
    }

    let combo3 = {
        alimento:"Super pancho x2",
        gaseosa: "Coca cola x2",
        precio:"$2000"
    }

    let combo4 = {
        alimento:"Super pancho x1",
        gaseosa:"Coca cola x1",
        precio:"$1000",
    }

    let combo5 = {
        alimento: "Balde de pochoclos grande",
        gaseosa:"Coca cola x3",
        golosinas:"Gomitas, rocklets, chocolate", 
        precio:"$3000",
    }
    const combos = [combo1, combo2, combo3, combo4, combo5]


    function mostrarCombos() {
        let nombreCombos = "Combos disponibles:\n";
        for (let i = 0; i < combos.length; i++) {
        const combo = combos[i];
        nombreCombos += `${i + 1}. Combo ${i + 1}: ${combo.alimento}, ${combo.gaseosa}\n`;
        }
        return nombreCombos;
    }
    do{
        const indiceCombo=parseInt(prompt(mostrarCombos())) -1;


        if (indiceCombo >= 0 && indiceCombo < combos.length) {
            const comboSeleccionado = combos[indiceCombo];
        
            // Muestra la información del combo seleccionado
            let comboInfo = `Has seleccionado el Combo ${indiceCombo + 1}:\n`;
            comboInfo += `Alimento: ${comboSeleccionado.alimento}\n`;
            comboInfo += `Gaseosa: ${comboSeleccionado.gaseosa}\n`;
        
            // Comprueba si hay golosinas en el combo
            if (comboSeleccionado.golosinas) {
            comboInfo += `Golosinas: ${comboSeleccionado.golosinas}\n`;
            }
        
            comboInfo += `Precio: ${comboSeleccionado.precio}`;
        
            alert(comboInfo);
        } else {
            alert("Selección inválida. Por favor, elige un combo válido.");
        }
    }
    while(confirm(("¿Deseas ver más combos?")));

});
