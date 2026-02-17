let boton = document.getElementById("btnAgregar");
let inputComentario = document.getElementById("inputComentario");
let listaComentarios = document.getElementById("listaComentarios");

boton.addEventListener('click', () => {

    const texto = inputComentario.value; 

    if (texto === "") {
        alert("Por favor, escribe algo.");
        return;
    }

 
    let nuevoComentario = document.createElement('div'); 
    nuevoComentario.style.margin = "30px 0";
    
    nuevoComentario.innerHTML = `
        <span>${texto}</span>
        <button class="btnEliminar"> Eliminar </button>
    `;

    nuevoComentario.querySelector('.btnEliminar').addEventListener('click', () => {
        nuevoComentario.remove();
    });

    listaComentarios.appendChild(nuevoComentario);
    inputComentario.value = "";
}); 