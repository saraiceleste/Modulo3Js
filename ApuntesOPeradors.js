// 🌟 1. ENTRADA A CINE (tu ejemplo mejorado)
let edad = 16;
let tieneMembresia = false;
let estaAcompañadoPorAdulto = true;

console.log("🎬 Cine:", (edad >= 18 && tieneMembresia) || estaAcompañadoPorAdulto);
// false && false = false || true = TRUE ✅ ENTRA

// 🌟 2. COMPRA DE BEBIDA ALCOHÓLICA
let edadBebida = 21;
let tieneID = true;

console.log("🍺 Alcohol:", edadBebida >= 21 && tieneID);
// true && true = TRUE ✅ PUEDE COMPRAR

// 🌟 3. ACCESO A ÁREA VIP
let esMiembroVIP = false;
let gastoMinimo = true;

console.log("💎 VIP:", esMiembroVIP || gastoMinimo);
// false || true = TRUE ✅ ACCESO CONCEDIDO

// 🌟 4. CONTRASEÑA SEGURA (NO segura)
let tieneMayuscula = false;
let tieneNumero = true;
let tieneSimbolo = false;

console.log("🔐 Segura:", tieneMayuscula && tieneNumero && tieneSimbolo);
// false && true && false = FALSE ❌ NO ES SEGURA

// 🌟 5. ENVÍO GRATIS (combinación compleja)
let compraGrande = true;
let esClientePremium = false;
let usaCodigoDescuento = true;

console.log("🚚 Gratis:", (compraGrande || esClientePremium) && usaCodigoDescuento);
// (true || false) = true && true = TRUE ✅ ENVÍO GRATIS
