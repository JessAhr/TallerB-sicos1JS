// - Formulario de registro.
//  Crea una función validarContraseña(contraseña) que retorne true si:- Tiene al menos 8 caracteres.- 
//  Incluye un número.- Incluye una mayúscula

const prompt  = require ("prompt-sync")();

function validarContraseña(contraseña) {
  const tieneLongitud = contraseña.length >= 8;
  const tieneNumero = /[0-9]/.test(contraseña);
  const tieneMayuscula = /[A-Z]/.test(contraseña);

  return tieneLongitud && tieneNumero && tieneMayuscula;
}

let input = "";

while (!validarContraseña(input)) {
    input= prompt("Ingresa una contraseña (de 8 caracteres, con minimo un numero y una mayuscula): ");
    if(!validarContraseña(input)){
        prompt("Contraseña invalida, debe tener minimo 8 caracteres, un numero y una mayuscula):");

    }

}
    
prompt ("Contraseña valida ")


// for (i=0; i =10; i++ ){
//     if (validarContraseña(input)) {
//    prompt("Contraseña válida");
// } else {
//   prompt(" Contraseña inválida: debe tener al menos 8 caracteres, una mayúscula y un número.");
//   i
// // }

// }


