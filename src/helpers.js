export function calcularTotal(cantidad, plazo) {
    let totalCantidad;
    let totalPlazo;
    let total;

    if (cantidad <= 1000) {
        totalCantidad = cantidad * .25;
    } else if (cantidad > 1000 && cantidad <= 5000) {
        totalCantidad = cantidad * .20;
    } else if (cantidad > 5000 && cantidad <= 10000) {
        totalCantidad = cantidad * .15;
    }else {
        totalCantidad = cantidad * .10;
    }

    switch (plazo) {
        case 3:
            totalPlazo = cantidad * .05;
            break;
        case 6:
            totalPlazo = cantidad * .10;
            break;
        case 12:
            totalPlazo = cantidad * .15;
            break;
        case 24:
            totalPlazo = cantidad * .20;
            break;
    
        default:
            break;
    }

    total = (cantidad + totalPlazo + totalCantidad);
    return (total);
}