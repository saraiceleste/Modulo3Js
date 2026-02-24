// 1. SELECTORES DEL DOM
const lengthSlider = document.getElementById('myRange');
const lengthValue = document.getElementById('lengthValue');
const passwordDisplay = document.querySelector('.PASS-STYLE');
const generateBtn = document.querySelector('.generate-btn');
const copyBtn = document.getElementById('copy-icon'); // Usando tu ID del HTML
const strengthText = document.getElementById('strengthText');

// Checkboxes
const uppercaseCb = document.getElementById('upper');
const lowercaseCb = document.getElementById('lower');
const numbersCb = document.getElementById('numbers');
const symbolsCb = document.getElementById('symbols');

// Diccionario de caracteres
const charset = {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
};

// 2. FUNCIÓN DE FUERZA (Lógica de Seguridad Real)
function updateStrength(password) {
    let score = 0;
    
    // Si no hay contraseña (error), vaciamos el indicador
    if (!password || password === "SELECT OPTIONS") {
        strengthText.textContent = "";
        return;
    }

    // Evaluación por Longitud
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;

    // Evaluación por Variedad (RegEx)
    if (/[A-Z]/.test(password)) score++;        // Contiene Mayúsculas
    if (/[0-9]/.test(password)) score++;        // Contiene Números
    if (/[^A-Za-z0-9]/.test(password)) score++; // Contiene Símbolos

    // Aplicar Feedback Visual según Score
    if (score <= 2) {
        strengthText.textContent = "TOO WEAK!";
        strengthText.style.color = "#b80505"; // Rojo
    } else if (score === 3) {
        strengthText.textContent = "WEAK";
        strengthText.style.color = "#ce870c"; // Amarillo
    } else if (score === 4) {
        strengthText.textContent = "MEDIUM";
        strengthText.style.color = "#eeeb46"; // Verde suave (puedes ajustarlo)
    } else {
        strengthText.textContent = "STRONG!";
        strengthText.style.color = "#00d819"; // Verde neón
    }
}

// 3. FUNCIÓN DE GENERACIÓN
function generatePassword() {
    let staticPassword = "";
    let randomPassword = "";
    let passLength = parseInt(lengthSlider.value);

    
    if (uppercaseCb.checked) staticPassword += charset.upper;
    if (lowercaseCb.checked) staticPassword += charset.lower;
    if (numbersCb.checked) staticPassword += charset.numbers;
    if (symbolsCb.checked) staticPassword += charset.symbols;

    // Validación: Si no hay opciones marcadas
    if (staticPassword === "") {
        passwordDisplay.textContent = "SELECT OPTIONS";
        passwordDisplay.style.color = "#fb7c7c";
        updateStrength(""); 
        return;
    }

   
    for (let i = 0; i < passLength; i++) {
        let randomIndex = Math.floor(Math.random() * staticPassword.length);
        randomPassword += staticPassword[randomIndex];
    }

    // Inyectar en el HTML
    passwordDisplay.textContent = randomPassword;
    passwordDisplay.style.color = "#e6e5ea";

    updateStrength(randomPassword);
}

// 4. FUNCIÓN DE COPIADO
async function copyToClipboard() {
    const text = passwordDisplay.textContent;

    // Evitar copiar placeholders o errores
    if (text === "P4$5W0rD!" || text === "SELECT OPTIONS") return;

    try {
        await navigator.clipboard.writeText(text);

     
        const svgIcon = copyBtn.querySelector('svg');
        const originalFill = svgIcon.getAttribute('fill');
        
        svgIcon.setAttribute('fill', '#a4ffaf'); // Cambia a verde al copiar
        
        setTimeout(() => {
            svgIcon.setAttribute('fill', originalFill); // Vuelve al color original
        }, 1000);

        console.log("Password copied!");
    } catch (err) {
        console.error("Error al copiar:", err);
    }
}

// 5. MANEJO DEL SLIDER 
function handleSlider() {
    const val = lengthSlider.value;
    const min = lengthSlider.min;
    const max = lengthSlider.max;
    const percentage = (val - min) * 100 / (max - min);

    // Actualizar número en pantalla
    lengthValue.textContent = val;

    // Pintar el fondo del slider dinámicamente
    lengthSlider.style.background = `linear-gradient(to right, #a4ffaf ${percentage}%, #18171f ${percentage}%)`;
}

// 6. EVENT LISTENERS
lengthSlider.addEventListener('input', handleSlider);

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', copyToClipboard);

// Inicializar vista del slider al cargar
handleSlider();