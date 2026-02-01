//APUNTES
// --- SECCIÓN: CADENAS DE TEXTO (STRINGS) ---

// 1. Declaramos una variable con 'let' y le asignamos un texto entre comillas.
let nombre = "Juan Perez";

// 2. Imprimimos el contenido de la variable 'nombre' precedido por una etiqueta.
console.log("Nombre:", nombre);

// 3. Usamos 'typeof' para que la consola nos confirme que el valor es un "string" (texto).
console.log("Tipo de dato de nombre:", typeof nombre);

// --- SECCIÓN: NÚMEROS (NUMBERS) ---

// 4. Creamos la variable 'edad'. Nota que el 30 NO lleva comillas; es un valor matemático.
let edad = 30;

// 5. Mostramos el número guardado en la consola.
console.log("Edad:", edad);

// 6. 'typeof' analiza el 30 y nos responde que es de tipo "number".
console.log("Tipo de dato de edad:", typeof edad);

// --- SECCIÓN: VALORES LÓGICOS (BOOLEANS) ---

// 7. Un booleano es como un interruptor: solo puede ser 'true' (encendido) o 'false' (apagado).
let esEstudiante = true;

// 8. Imprimimos el estado de nuestra variable lógica.
console.log("Es estudiante:", esEstudiante);

// 9. Aquí 'typeof' nos dirá que el tipo de dato es "boolean".
console.log("Tipo de dato de esEstudiante:", typeof esEstudiante);

// --- SECCIÓN: EL VALOR NO DEFINIDO (UNDEFINED) ---

// 1. Declaramos la variable pero NO le asignamos ningún valor (la caja está vacía).
let tareaPendiente;

// 2. JavaScript, al ver que no hay nada, le asigna automáticamente 'undefined'.
console.log("Valor de tareaPendiente:", tareaPendiente);

// 3. El tipo de dato también es "undefined". Significa: "Aún no sé qué es esto".
console.log("Tipo de dato:", typeof tareaPendiente);

// --- SECCIÓN: EL VALOR NULO (NULL) ---

// 4. Aquí nosotros, como programadores, decidimos que la variable está vacía INTENCIONALMENTE.
let resultadoBusqueda = null;

// 5. La consola mostrará 'null'. Es un mensaje claro: "Busqué, pero no encontré nada".
console.log("Valor de resultadoBusqueda:", resultadoBusqueda);

// 6. ¡OJO AQUÍ! El tipo de dato de 'null' devuelve "object".
// (Es un error histórico de JavaScript que se quedó así, pero es importante saberlo).
console.log("Tipo de dato de null:", typeof resultadoBusqueda);

/*

   Este es un comentario de varias líneas.

   Lo usamos cuando queremos explicar algo con más detalle.

*/

// COMENTARIO UNA LINEA
console.log("Prueba de envío final");
