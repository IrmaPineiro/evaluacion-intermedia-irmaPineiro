"use strict"

console.log("hola");

/*   */

/*Pasos en humano:
PRIMERA PARTE:
Si la jugadora introdice un numero y hace click en botón Prueba:
   (-mostrar el resultado en la consola)
   -mostrar mensaje en input de pista:
      -si el num. es mayor que el aleatorio -> Mensj: "Demasiado alto".
      -si el num. es menor que el aleatorio -> Mensj: "Demasiado bajo".
      -si la jugadora No introduce el numero válido -> Mensj: "El número debe de estar entre 1 y 100."

*/

const inputIntrodNumber = document.querySelector(".js-introd-number");
const btnPrueba = document.querySelector(".js-btn-prueba");
const messageNumber = document.querySelector(".js-num-message");
const inputPista = document.querySelector(".js-input-pista");
const inputContador = document.querySelector(".js-input-contador");


 function getRandomNumber(max) {
     return Math.ceil(Math.random() * max);
 }

 const randomNumber = getRandomNumber(100);
 console.log(randomNumber);



function handleClick (event) {
    event.preventDefault();
    const number = parseInt(inputIntrodNumber.value);
    console.log(number);

    if (number > randomNumber) {
    inputPista.value = "Demasiado alto";
    }
    else if (number < randomNumber) {
        inputPista.value = "Demasiado bajo";
    } else {
        inputPista.value = "Has ganado campeona";
    }

 }
 btnPrueba.addEventListener("click", handleClick);

  








