// Ejercicio: Sumar los números pares en un rango utilizando un bucle for y un bucle while

// Pedimos al usuario dos números enteros
let inicio = parseInt(prompt("Ingrese numeros PARES inicial:"));
let fin = parseInt(prompt("Ingrese  números PARES final:"));

// Suma de números pares utilizando un bucle for
let sumaFor = 0;
for (let num = inicio; num <= fin; num++) {
  if (num % 2 === 0) {
    sumaFor += num;
  }
}

// Suma de números pares utilizando un bucle while
let sumaW = 0;
let num = inicio;
while (num <= fin) {
  if (num % 2 === 0) {
    sumaW += num;
  }
  num++;
}

// Imprimimos el resultado
console.log("Suma de números pares (usando for):", sumaFor);
console.log("Suma de números pares (usando while):", sumaW);
