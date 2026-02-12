/*let cantante = {

    nombre: "junior h",
    edad: 24,
    ciudad: "Sonora",
    plataforma: "spotify",
    esFamoso: true,

    saludar: function() {
        console.log("Ea soy " + this.nombre + " y puedes escuchar mi musica en " + this.plataforma);
        
    }
} */

//cantante.saludar();

//PARA MOSTRAR INFO 
let cantante2 = {
    nombre: "junior h",
    edad: 24,
    ciudad: "Sonora",
    plataforma: "spotify",
    esFamoso: true,

    // Este es el método que mencionas
    mostrarInfo: function() {
        console.log("--- Información del Cantante ---");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad} años`);
        console.log(`Ciudad: ${this.ciudad}`);
        console.log(`Plataforma: ${this.plataforma}`);
        console.log(`¿Es famoso?: ${this.esFamoso ? "Sí" : "No"}`);
    }
}

// Para ejecutarlo:
cantante2.mostrarInfo();

