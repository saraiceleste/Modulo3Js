let principito = {
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    anio: 1943,
    estado: "disponible",

    describirLibro: function() {
        console.log(this.titulo + " es un libro escrito por " + this.autor + " en el año " + this.anio + ". Actualmente se encuentra " + this.estado);
    }
}

let cincuentaSombrasGrey = {
    titulo: "Cincuenta sombras de Grey",
    autor: "E. L. James",
    anio: 2011,
    estado: "prestado",

    describirLibro: function() {
        console.log(this.titulo + " es un libro escrito por " + this.autor + " en el año " + this.anio + ". Actualmente se encuentra " + this.estado);
    }
}

let LaOdisea = {
    titulo: "La Odisea",
    autor: "Homero",
    anio: -800,
    estado: "disponible",
 
    describirLibro: function() {
        console.log(this.titulo + " es un poema épico atribuido a " + this.autor + ", escrito en el " + this.anio + ". Actualmente se encuentra " + this.estado);
    }
}

let AfterBook = {
    titulo: "after",
    autor: "chris",
    anio: 2003,
    estado: "diponible",

    describirLibro: function() {
        console.log(this.titulo + " esta escrito por " + this.autor + " en el año de " + this.anio + " Actualmente se encuentra " + this.estado)
    }
}


principito.describirLibro();
cincuentaSombrasGrey.describirLibro();
LaOdisea.describirLibro();
AfterBook.describirLibro();