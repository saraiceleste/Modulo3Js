// 1. Declaramos una variable que contiene un objeto literal usando llaves {}.
// Los objetos literales son la forma más simple de crear objetos en JS.
let persona = {
    // 2. Cada propiedad es una pareja "clave: valor", separadas por comas.
    // Las claves son strings (pueden ir sin comillas si no tienen espacios), los valores pueden ser cualquier tipo.
    nombre: "Ana López",  // Propiedad string: guarda el nombre completo.
    edad: 28,            // Propiedad number: guarda un número entero.
    ciudad: "Zapopan",   // Propiedad string: referencia a tu ubicación aproximada.
    esEstudiante: true,  // Propiedad boolean: true o false para opciones lógicas.
    
    // 3. Un método es una propiedad cuyo valor es una función.
    // Las funciones dentro de objetos usan 'this' para referirse al objeto actual.
    saludar: function() {
        console.log("¡Hola! Soy " + this.nombre + " y vivo en " + this.ciudad);
        // 4. 'this.nombre' accede dinámicamente a la propiedad 'nombre' del objeto.
    },
    
    // 5. Otro método que calcula algo basado en propiedades existentes.
    anioNacimiento: function() {
        return new Date().getFullYear() - this.edad;
        // 6. Usa Date() para obtener el año actual (2026) y resta la edad.
        // new Date().getFullYear() es una forma estándar de obtener el año actual.
    }
}; 

// 7. Accedemos a propiedades con notación de punto (más común y legible).
console.log("Nombre:", persona.nombre);  // Salida: Ana López

// 8. O con corchetes [], útil para claves dinámicas o con espacios.
console.log("Edad:", persona["edad"]);   // Salida: 28

// 9. Llamamos a un método como si fuera una función.
persona.saludar();  // Salida: ¡Hola! Soy Ana López y vivo en Zapopan

// 10. Agregamos una nueva propiedad después de crear el objeto.
persona.profesion = "Desarrolladora";
// Ahora persona tiene una propiedad extra: {profesion: "Desarrolladora"}.

// 11. Modificamos una propiedad existente.
persona.edad = 29;

