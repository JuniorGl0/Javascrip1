/*// Ejercicio: Sumar los números pares en un rango utilizando un bucle for y un bucle while

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
*/

// hacer el carrito de compras en la pgina,de mantas voy a hacer
// Dado un array de objetos que representan productos y un rango de precios ingresado por el usuario,
// filtra y muestra los productos cuyos precios estén dentro del rango especificado.
function filtrarProductosPorPrecio(productos, precioMin, precioMax) {
  return productos.filter(producto => producto.precio >= precioMin && producto.precio <= precioMax);
}

const productos2 = [
  { nombre: "Mouse", precio: 100, marca: "DeLUX" },
  { nombre: "Teclado", precio: 250, marca: "Microsoft" },
  { nombre: "Monitor", precio: 500, marca: "Dell" },
  { nombre: "Impresora", precio: 1000, marca: "Epson" },
  { nombre: "Portatil", precio: 1800, marca: "Lenovo" },

];

document.getElementById("btnFiltrar").addEventListener("click", function() {
  const precioMinimo = parseFloat(document.getElementById("precioMinimo").value);
  const precioMaximo = parseFloat(document.getElementById("precioMaximo").value);

  const productosFiltrados = filtrarProductosPorPrecio(productos2, precioMinimo, precioMaximo);

  const resultados = document.getElementById("resultado");
  resultados.innerHTML = ""; 

  if (productosFiltrados.length > 0) {
    let mensaje = "Productos encontrados:<br>";
    productosFiltrados.forEach(producto => {
      mensaje += `Nombre: ${producto.nombre}, Precio: $${producto.precio}, Marca: ${producto.marca}<br>`;
    });
    resultados.innerHTML = mensaje;
  } else {
    resultados.textContent = "No se encontraron productos en el rango de precios especificado ingresa de 100-1800.";
  }
});
