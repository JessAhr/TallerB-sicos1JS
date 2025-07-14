// -Editor de texto.
//  Crea una función contarPalabras(texto) que retorne el número de palabras en un string (separadas por 
// espacios)
const prompt  = require ("prompt-sync")();

function contarPalabras(texto) {
    let palabras = texto.trim().split(/\s+/);
    return palabras.length;

}

let texto = "Esto es una prueba, para contar palabra.";
let cantidad = contarPalabras(texto);

console.log("La cantidad de palabras es: " , cantidad);

let textoUsuario = prompt ("Ingresa un texto para contar las palabras: ");

let totalPalabras = contarPalabras(textoUsuario);
console.log("La cantidad de palabras es: ", totalPalabras);

