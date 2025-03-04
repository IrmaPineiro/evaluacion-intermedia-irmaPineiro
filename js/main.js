"use strict"

console.log("hola");

/*Pasos en humano:
PRIMERA PARTE:
Si la jugadora introdice un numero y hace click en botón Prueba:
   -mostrar el resultado en la consola:
      -si el num. es mayor que el aleatorio -> Mensj: "demasiado alto".
      -si el num. es menor que el aleatorio -> Mensj: "demasiado bajo".
      -si la jugadora No introduce el numero válido -> Mensj: "El número debe de estar entre 1 y 100."

*/

const inputIntrodNumber = document.querySelector(".js-introd-number");
const btnPrueba = document.querySelector(".js-btn-prueba");
const inputPista = document.querySelector(".js-input-pista");
const inputContador = document.querySelector(".js-input-contador");

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
}






