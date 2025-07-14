// - Red social.
//  Dado un array de usuarios ([{ nombre: "Ana", edad: 25 }, ...]), crea una función 
// f
//  iltrarUsuarios(usuarios, edadMinima) que retorne los usuarios que cumplen con la edad mínima, la 
// cual será dada por el usuario, es decir, si el usuario escribe 18, debería decirle que personas de la lsita 
// cumplen con tener más de 18.

const prompt  = require ("prompt-sync")();

let usuarios =[
    {nombre: "Jessi", edad: 20},
    {nombre: "Maria", edad: 30},
    {nombre: "Chris", edad: 15},
    {nombre: "Juan", edad: 17},
    {nombre: "Jonatha", edad: 26},

];

function filtarUsuarios(usuarios, edadMinima){
    let resultado = [];

    for (let usuario of usuarios){
        if (usuario.edad >= edadMinima){
            resultado.push(usuario);

        }
    }
    return resultado;
}

let edadIngresada= Number(prompt(" Ingresa la edad minima para filtrar: "));
let usuariosFiltrados= filtarUsuarios(usuarios, edadIngresada);

console.log("Usiarios que cumple con la edad minima: ");
for(let usuario of usuariosFiltrados){
    console.log(`- ${usuario.nombre}, edad:${usuario.edad}`);
    
}
