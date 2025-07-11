//  Ejercicio 1: Calculadora de Propinas- Una app para calcular propinas en restaurantes.
//  Crea una función calcularPropina(total, porcentaje) que reciba el total de la cuenta y el porcentaje de 
// propina, y retorne el monto final a pagar (total + propina)

// function calcularPropina(total, porcentaje) {
//     let propina = (total * porcentaje) / 100;
//     return total + propina;
// }

// let totalConPropina = calcularPropina(79000, 15);
// console.log("El total de la cuenta es", totalConPropina);

const prompt  = require ("prompt-sync")();

 function calcularPropina (cuenta, porcentaje) {
    let valorPropina = (cuenta * porcentaje) / 100;
    let totalFinal = cuenta + valorPropina;
    return totalFinal;

}


let cuentaCliente = Number(prompt("Ingrese el total de la cuenta: "));
let porcentajePropina = Number(prompt("Ingrese el porcentaje de propina: "));

let totalConPropina = calcularPropina(cuentaCliente, porcentajePropina);
console.log("El total a pagar con propina es: " + totalConPropina.toFixed(2))






