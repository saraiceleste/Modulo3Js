const hiddenElement = document.querySelector(".hidden");
  hiddenElement.textContent = "Este es el nuevo texto (pero sigo oculto)";

  // Mostrar texto visible
  const container = document.querySelector(".container");
  console.log("Contenido visible para el usuario:", container.innerText);

  // Reemplazar etiqueta completa
  const replaceElement = document.querySelector(".replace");
  replaceElement.outerText = "Etiqueta reemplazada";

