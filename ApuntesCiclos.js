// 1. Inicialice 'i' en 10.
// 2. La condición dice: "mientras i sea mayor o igual a 1, sigue ejecutando".
// 3. 'i--' resta 1 al valor de 'i' al finalizar cada vuelta.
for (let i = 10; i >= 1; i--) {
  // Esta línea imprime el valor actual de 'i' en la consola del navegador o terminal.
  console.log(i);
} // Al llegar aquí, el programa vuelve al 'i--' y luego evalúa la condición otra vez.

//SUMA DE PARES DEL 1 AL 20
let suma = 0; // Variable acumuladora

for (let i = 1; i <= 20; i++) {
  // Verificamos si el número es par usando el operador de residuo (%)
  if (i % 2 === 0) {
    suma += i; // Solo se suma si el residuo de i / 2 es cero
  }
}

console.log(suma); // El resultado será 110

// ciclo while que cuentA del 10 al 1
let i = 10; // 1. Inicialización de la variable fuera del ciclo

while (i >= 1) {
    
  // 2. Condición: se evalúa antes de cada vuelta
  console.log(i); // 3. Cuerpo: imprimimos el valor actual

  i--; // 4. Actualización: restamos 1 para no crear un ciclo infinito
}

// SOLO NUM PARES CON WHILE
let j = 10;

while (j >= 1) {
  if (j % 2 === 0) {
    console.log(j); // Solo imprime si el resto de j / 2 es 0
  }
  j--; // Siempre restamos 1 para revisar todos los números
}

//ARRAYS
let colores = ["rojo", "verde", "azul", "amarillo"];

console.log(colores[0]); // Accede al primer elemento: "rojo"
colores[1] = "naranja"; // Cambia el segundo elemento a "naranja"
colores.push("coral"); // Agrega "coral" al final del array
colores.shift();// Elimina el primer elemento del array

console.log(colores); // Muestra el array modificado