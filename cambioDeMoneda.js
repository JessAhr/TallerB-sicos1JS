// App de viajes.
//  Crea una función convertirMoneda(monto, monue convierta de pesos a USD o EUR,
//  pedir al usuario monto en COP y la moneda con la que desea hacer la converciónedaDestino) 

const prompt  = require ("prompt-sync")();

function convertirMoneda(monto, monedaDestino) {
    const tasaUSD = 0.00025;
    const tasaEUR = 0.00023;

    let resultado;

    if (monedaDestino.toUpperCase()==="USD"){
        resultado = monto * tasaUSD;
    } else if (monedaDestino.toUpperCase()=== "EUR"){
        resultado = monto * tasaEUR;
    }else {
        console.log( "Moneda no valida, Usa USD o UER. ");
        return null;        
    }
    return resultado;

}

let montoCOP =Number(prompt("ingrese el monto en peso colombiano (COP): "));
let moneda = prompt ("¿A que moneda desea convertir? (USD o EUR): ");

let convertido = convertirMoneda (montoCOP, moneda);

if (convertido !== null){
    console.log(`El Monto convertido a ${moneda.toUpperCase()}es: ${convertido.toFixed(2)}`); 
}