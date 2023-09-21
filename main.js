// SOLICITAR QUE EL USUARIO ELIJA UN DESTINO PARA COMPRAR UN PASAJE DE AVION
let impuestoPais = 0.3; 
let impuestoGanancias = 0.45;
let impuestoBienesPersonales = 0.25;
let impuestoTurismo = 0.07;


function calcularImpuesto(importe) {
    if (!isNaN(importe)) {
        let resultado = (importe + (importe * impuestoPais) + (importe*impuestoGanancias) + (importe*impuestoBienesPersonales) + (importe*impuestoTurismo));
        alert("El importe final es: " + "$"+resultado.toFixed(2));
    } else {
        alert("Por favor, ingrese un importe válido.");
    }
}

function pasajes(destinos) {
    alert("Destinos disponibles:");
    for (const destino in destinos) {
        alert(destino + ": $" + destinos[destino]);
    }
    
    let elegirDestino = prompt("Elija un destino: ");
    
    if (destinos.hasOwnProperty(elegirDestino)) {
        alert("¡Muy bien! A continuación podrá ver el costo más los impuestos");
        calcularImpuesto(destinos[elegirDestino]);
    } else {
        alert("Destino no válido. Por favor, elija un destino válido.");
    }
}

const destinosConImportes = {
    "Cancun": 80984,
    "Madrid": 117938,
    "Sidney": 134379
};

pasajes(destinosConImportes);



