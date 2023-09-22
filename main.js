// SOLICITAR QUE EL USUARIO INGRESE SU NOMBRE
let nombreUsuario;

while (true) {
    nombreUsuario = prompt("Por favor, ingrese su nombre de usuario:");
    
    if (nombreUsuario !== null && nombreUsuario !== "") {
        alert("¡Hola, " + nombreUsuario + "!");
        break;
    } else {
        alert("Por favor, ingrese un nombre de usuario válido.");
    }

}
// SOLICITAR QUE EL USUARIO ELIJA UN DESTINO PARA COMPRAR UN PASAJE DE AVIÓN
let impuestoPais = 0.3; 
let impuestoGanancias = 0.45;
let impuestoBienesPersonales = 0.25;
let impuestoTurismo = 0.07;

function calcularImpuesto(importe) {
    if (importe) {
        let resultado = (importe + (importe * impuestoPais) + (importe * impuestoGanancias) + (importe * impuestoBienesPersonales) + (importe * impuestoTurismo));
        alert("El importe final es: $" + resultado);
    } else {
        alert("Por favor, ingrese un importe válido.");
    }
}

function mostrarDestinos(destinos) {
    alert("Destinos disponibles:");
    alert("Cancun: $" + destinos["Cancun"]);
    alert("Madrid: $" + destinos["Madrid"]);
    alert("Sidney: $" + destinos["Sidney"]);
}

function pasajes(destinos) {
    mostrarDestinos(destinos);
    
    let elegirDestino = prompt("Elija un destino: ");

    if (destinos[elegirDestino]) {
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








