// - Plataforma educativa.
//  Crea una función calcularPromedio(notas) que reciba un array de notas dado por el usuario 
// (separadas por comas)  y retorne el promedio (redondeado a 2 decimales)
const prompt  = require ("prompt-sync")();
function calcularPromedio() {
    let cantidadNotas = Number(prompt("¿ cuantas notas va a ingresar? "));
    if (isNaN(cantidadNotas)|| cantidadNotas <=0){
        console.log ("Por favor, ingresa un numero valido. ");
        return;
    }
    let notas = [];
    let suma = 0;

    for (let i = 0; i < cantidadNotas; i++){
        let nota = Number(prompt(`ingrsa la nota #${i+1}: `));
        while (isNaN(nota)|| nota <0 || nota > 10){
         nota = Number(prompt("nota ivalida, ingrese una nota ente 1 y 10: "));
        }
        notas.push(nota);
        suma+=nota;

    }
    let promedio= suma / notas.length;
    console.log("El promedio es: ", Number(promedio.toFixed(2)));


}

calcularPromedio()

