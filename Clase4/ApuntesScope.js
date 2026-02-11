let persona = "Juan"; // Variable global

function escuela() {
    let estudiante = "María"; // Variable local a la función 'escuela'

    console.log(persona);
    console.log(estudiante);
}
escuela(); // Llama a la función para mostrar el saludo
console.log(persona); // Esto funciona porque 'persona' es global
// console.log(estudiante); // Esto causaría un error de referencia, ya que 'estudiante' es local a la función 'escuela'.

// La variable 'saludo' no es accesible aquí, ya que es local a la función 'escuela'.
// console.log(saludo); // Esto causaría un error de referencia.