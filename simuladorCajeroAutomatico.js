// -App bancaria.
//  Crea una función retirarDinero(saldo, monto) que:
//  Pide al usuario su saldo actual y el monto a retirar.
//  Muestra el nuevo saldo o "Fondos insuficientes".
const prompt  = require ("prompt-sync")();

function retirarDinero(saldo, monto){
    if (monto <= saldo){
        let nuevoSaldo = saldo - monto;
        console.log("Retiro realizado. Nuevo saldo: $" + nuevoSaldo);
        return nuevoSaldo;
    } else {
        console.log("Saldo insuficiente.");
        return saldo;
    }

}

let saldoUsuario = Number(prompt("Ingrese su saldo actual: "));
let montoRetiro = Number(prompt("Ingrese monto a retirar: "));

let saldoFinal = retirarDinero (saldoUsuario, montoRetiro);