// - Sistema de gestión de inventario.
//  Crea una función buscarProducto(nombre, inventario) que retorne el producto si existe, o null si no. El 
// inventario debería estar PREDEFINIDO 
// ejemplo: 
// const inventario = [
//  { nombre: "Camisa", precio: 20 },
//  { nombre: "Zapatos", precio: 50 }
//  ];
const prompt  = require ("prompt-sync")();

const inventario =  [ 
{nombre: "rosas", precio: 7000},
{nombre: "peluche pqueño", percio: 11000},
{nombre: "envoltura", precio: 3000},
{nombre: "ramo x7", precio:50000},
{nombre: "estuche de chocolates", precio: 23000}

];

function buscarProducto (nombre, inventario){
    for (let producto of inventario) {
      if (producto.nombre.toLowerCase() === nombre.toLowerCase()){
        return "Si existe el producto " ;

        }
    }
   return null; 

}

let nombreBuscado = prompt("Ingresa el nombre del producto a buscar: ");
let resultado = buscarProducto(nombreBuscado, inventario);

if (resultado !== null) {
  console.log(resultado); 
} else {
  console.log(null);
}
