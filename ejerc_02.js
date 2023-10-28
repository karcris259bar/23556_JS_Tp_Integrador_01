//Us Ingresa nro-Luego otro- y Alert c/R_suma
let num_a = parseInt(prompt("Ingrese Número a "));{
    console.log(num_a)
}
let num_b = parseInt(prompt("Ingrese Número b "));{
console.log(num_b)
}
let resultado = num_a + num_b;
alert("El Resultado de la suma es: " + resultado);
console.log(resultado)

//Us Igresa Temp en celcius y el progr muestra la temp en fahrenheit
let temp = parseFloat(prompt("Ingrese Temperatura en Celcius")); 
let resultado1 = ((temp * 1.8) + 32)
    alert("Los Grados Fahrenhein son: " + resultado1);
    console.log("Son Grados Fahrenheit  " + resultado1.toFixed(2));
    console.log("Equivalen a Grados Celcius  " + temp.toFixed(2));

//Us ingrese nun y luego /10 Ej. 5/10 =0.5
let numc = parseInt(prompt("Ingrese un Numero")); 
let resultado2 = (numc/10);
    console.log("El resultado de la division es:  " + resultado2.toFixed(2));

//Us Ingrese 2 num y en alert el num mayor
let numd = parseInt(prompt("Ingrese 1er Número"));{
    console.log(numd)
}
let numf = parseInt(prompt("Ingrese 2do Número"));{
console.log(numf)
}
if(numd > numf){
    alert("numero mayor es: " + numd)
    console.log("El Número Mayor es:  " + numd);
}
else {
    alert("numero mayor es: " + numf);
    console.log("El Número Mayor  es:  " + numf);
}   
   
//Us Ingresar un num y luego otro. Mostrar en alert el mayor con if ternario
var numg = parseInt(prompt("Ingrese 1er Número"));{
    console.log(numg)
}
var numh = parseInt(prompt("Ingrese 2do Número"));{
    console.log(numh)
}
let mayor = numg > numh ? numg : numh;
alert("El Numero mayor es: " + mayor);
console.log("Numero Mayor: " + mayor);