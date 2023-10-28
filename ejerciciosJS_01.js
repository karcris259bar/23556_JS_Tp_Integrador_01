//Ej_01 Pedir a Us ingrese nro.ENTERO POSITIVO e imprimir
let numero = prompt("Ingrese número Entero Positivo")
    numI = parseInt(numero);
    console.log(numero);
 
if(numero > 0){
    console.log("El número ingresado es Positivo");
}
else{
    console.log("El número ingresado es cero o Negativo");
} 
//Ej_02 Pedir a Us ingrese edad e imprima >si es 18 o+; o menor si es <18
let edad = parseInt(prompt("Ingrese su edad"));
    if(edad >= 18){
    console.log("Eres Mayor de Edad");
    }
    else{
    console.log("Eres Menor de Edad");
    }
//Ej_03 Pedir a Us numero e imprima Nro Par o Impar
let numero1 = parseInt(prompt("Ingrese un Número entero"));
if (numero1  % 2 == 0 ){
    console.log("El Número Ingresado es Par");
}
else{
    console.log("El Número Ingresado es Impar");
}

// Ej_04 Pedir a Us 2 num e impr.1er es mayor, el 2do es > o son Iguales
let nume1 = parseInt(prompt("Ingrese 1er Número Entero"));{
    console.log(nume1)
}
let nume2 = parseInt(prompt("Ingrese 2do Número entero"));{
console.log(nume2)
}
if(nume1 > nume2){
    console.log("El 1er Número es Mayor");
}
else if(nume1 < nume2){
    console.log("El 2do Número es Mayor");
}   
else{
    console.log("Los dos Números son Iguales");
}    
 
// Ej_05 Pedir Us su nom e impr."Hola(nom)" Y si es Juan,Maria o Pedro, u Hola Desconocido si no es alguno de los anteriores

let nom = prompt("Ingrese su Nombre");{
    console.log(nom);
    if(nom === "Juan"){
        console.log("Hola Juan");
    }
    else if(nom === "Maria"){
        console.log("Hola Maria");
    }
    else if(nom === "Pedro"){
        console.log("Hola Pedro");
    }   
    else{
        console.log("Hola Desconocido");
    }
}

//Ej_07 Pedir a Us ingrese nro.ENTERO POSITIVO e imprimir si es primo o no es primo
var nume10 = parseInt(prompt("Ingrese un Número para ver si es Primo"));
var i=2;
var contar=0 //P/saber cant.divisores Nro.pr tiene solo 2
if(nume10==1) {
    contar = contar + 1;
}
while (i<=nume10-1) {
    if(nume10 % i == 0){
        contar = contar +1;
    }
    i ++; //P/salir del bucle while
}
if(contar>0)
    console.log("El Numero No es primo")
else{
    console.log("El Numero es primo");
}    
