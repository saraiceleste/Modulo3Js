// Array para guardar comentarios
let comentarios = [];

// Esperar a que cargue la página
document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del DOM
    const inputComentario = document.getElementById('inputComentario');
    const btnAgregar = document.getElementById('btnAgregar');
    const listaComentarios = document.getElementById('listaComentarios');

    // Función para obtener fecha y hora actual
    function obtenerFechaHora() {
        const ahora = new Date();
        return ahora.toLocaleString('es-MX', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    // Función para crear HTML de un comentario
    function crearComentarioHTML(comentario) {
        return `
            <div class="comentario">
                <div class="fecha">${comentario.fecha}</div>
                <div class="texto-comentario">${comentario.texto}</div>
            </div>
        `;
    }

    // Función para mostrar comentarios
    function mostrarComentarios() {
        if (comentarios.length === 0) {
            listaComentarios.innerHTML = '<p>¡No comments yet. Be the first!</p>';
            return;
        }

        listaComentarios.innerHTML = '';
        // Mostrar del más reciente al más antiguo
        comentarios.slice().reverse().forEach(comentario => {
            listaComentarios.innerHTML += crearComentarioHTML(comentario);
        });
    }

    // Evento del botón Agregar
    btnAgregar.addEventListener('click', function() {
        const texto = inputComentario.value.trim();
        
        // Validar que no esté vacío
        if (texto === '') {
            alert('¡be the first to write a comment!');
            inputComentario.focus();
            return;
        }

        // Crear nuevo comentario
        const nuevoComentario = {
            texto: texto,
            fecha: obtenerFechaHora()
        };

        // Agregar al inicio (más reciente primero)
        comentarios.unshift(nuevoComentario);

        // Limpiar input y enfocar
        inputComentario.value = '';
        inputComentario.focus();

        // Actualizar lista
        mostrarComentarios();
    });

    // Permitir Enter para agregar comentario
    inputComentario.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            btnAgregar.click();
        }
    });

    // Inicializar
    mostrarComentarios();
});
