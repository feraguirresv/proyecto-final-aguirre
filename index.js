let edad = parseInt(prompt("¿Eres mayor de edad?"));

while(edad<18){


    edad = parseInt(prompt("Ingrese su edad"));
}

let mensaje = edad >= 18 ? "Eres mayor de edad" : "No eres mayor de edad";

alert(mensaje);