// 1. Cree una variable global llamada 'librosLeidos' e inicialice un array (lista) vacío.
let librosLeidos = [];

// 2. Defino la función 'agregarLibro' que recibe un parámetro llamado 'titulo'.
function agregarLibro(titulo) {
    // Verifico que 'titulo' exista (no sea null/undefined) Y que sea de tipo texto (string).
    if (titulo && typeof titulo === 'string') {
        // El método .push() añadira el valor de 'titulo' al final de array 'librosLeidos'.
        librosLeidos.push(titulo);
        // Imprimo un mensaje de confirmación 
        console.log(`Libro añadido: "${titulo}"`);
    } else {
        // Si la validación de arriba falla, muestro este mensaje de error.
        console.log("Error: El título debe ser un texto válido.");
    }
}

// 3. Defino la función 'mostrarLibrosLeidos' que no necesita parámetros.
function mostrarLibrosLeidos() {
    // Reviso si el largo (.length) del array es igual a 0 (está vacío).
    if (librosLeidos.length === 0) {
        // Si está vacío, aviso al usuario.
        console.log("Aún no has leído ningún libro.");
        // El 'return' detiene la ejecución de la función aquí mismo para no seguir con lo de abajo.
        return;
    }

    // Si el array tiene contenido, imprimo un encabezado en la consola.
    console.log("Lista de libros leídos:");
    
    // El método .forEach() recorrera cada elemento del array uno por uno.
    // 'libro' es el contenido y 'index' es la posición (0, 1, 2...).
    librosLeidos.forEach((libro, index) => {
        // Imprimo el número (index + 1 para que empiece en 1 y no en 0) seguido del nombre del libro.
        console.log(`${index + 1}. ${libro}`);
    });
}


// Llamo a la función agregarLibro pasándole diferentes títulos como argumentos.
agregarLibro("El Principito");
agregarLibro("Rayuela");
agregarLibro("Cien Años de Soledad");
agregarLibro("1984");
agregarLibro("50 Sombras de Grey");

// Finalmente, llamo a la función que recorrera el array y mostrara todo lo acumulado.
mostrarLibrosLeidos();