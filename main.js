// SOLICITAR QUE EL USUARIO INGRESE SU NOMBRE
let nombreUsuario;

while (true) {
    nombreUsuario = prompt("Por favor, ingrese su nombre de usuario:");

    if (nombreUsuario !== null && nombreUsuario !== "") {
        alert("¡Hola, " + nombreUsuario + "! " + "A continuacion podrá ver los destinos de viaje.");
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

function mostrarDestinos() {
    alert("Destinos disponibles:");
    alert("Cancun: $80984");
    alert("Madrid: $117938");
    alert("Sidney: $134379");
}

function pasajes() {
    mostrarDestinos();

    let elegirDestino = prompt("Elija un destino: ").toLowerCase();

    switch (elegirDestino) {
        case "Cancun":
            alert("¡Muy bien! A continuación podrá ver el costo más los impuestos");
            calcularImpuesto(80984);
            break;
        case "Madrid":
            alert("¡Muy bien! A continuación podrá ver el costo más los impuestos");
            calcularImpuesto(117938);
            break;
        case "Sidney":
            alert("¡Muy bien! A continuación podrá ver el costo más los impuestos");
            calcularImpuesto(134379);
            break;
        default:
            alert("Destino no válido. Por favor, elija un destino válido.");
    }
}

function calcularImpuesto(importe) {
    if (importe) {
        let resultado = (importe + (importe * impuestoPais) + (importe * impuestoGanancias) + (importe * impuestoBienesPersonales) + (importe * impuestoTurismo));
        alert("El importe final es: $" + resultado);
    } 
}

pasajes();
