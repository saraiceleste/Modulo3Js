let frutas = ["manzana", "banana", "mango", "durazno"];

let conteoFrutas = {};

for (let i = 0; i < frutas.length; i++) {
    let frutaActual = frutas[i];

    if (conteoFrutas[frutaActual]) {
        conteoFrutas[frutaActual]++;
    }
    
    else {
        conteoFrutas[frutaActual] = 1;
    }
}
console.log(conteoFrutas);
