// no estaria de mas ordenar las variables de arriba a bajo como esta estrucuturado el html
const sectionMascotaJugador = document.getElementById("seleccionar-mokepon-jugador");
const hipodoge = document.getElementById("hipodoge");
const capipepo = document.getElementById("capipepo");
const ratigueya = document.getElementById("ratigueya");
const botonMascotaJugador = document.getElementById("seleccionar-mascota");

const sectionAtaque = document.getElementById("seleccionar-ataque");
const botonFuegoJugador = document.getElementById("boton-fuego");
const botonAguaJugador = document.getElementById("boton-agua");
const botonTierraJugador = document.getElementById("boton-tierra");

const sectionMensaje = document.getElementById("resultado");
const botonReiniciar = document.getElementById("boton-reiniciar");

const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");
const spanMascotaEnemigo = document.getElementById("mascota-enemigo");
const spanMascotaJugador = document.getElementById("mascota-jugador");
const ataquesDelJugador = document.getElementById("ataques-del-jugador");
const ataqueDelEnemigo = document.getElementById("ataques-del-enemigo");

let nombreMascotaEnemigo;
let nombreMascotaJugador;
let ataqueJugador;
let ataqueEnemigo;
let ataqueJugadorTipo;
let ataqueEnemigoTipo;
let vidasEnemigo = 3;
let vidasJugador = 3;

function iniciarJuego() {
    document.querySelectorAll("input[name='mascota']").forEach((input) => {
        input.checked = false;
    });
    
    sectionAtaque.style.display = "none";
    
    document.getElementById("boton-fuego").disabled = true;
    document.getElementById("boton-agua").disabled = true;
    document.getElementById("boton-tierra").disabled = true;
    
    botonReiniciar.addEventListener("click", reiniciarJuego);
    botonReiniciar.style.display = "none";
    
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
    botonFuegoJugador.addEventListener("click", ataqueFuego);
    botonAguaJugador.addEventListener("click", ataqueAgua);
    botonTierraJugador.addEventListener("click", ataqueTierra);
}

function seleccionarMascotaJugador() {
    nombreMascotaJugador;
    
    if (hipodoge.checked) {
        nombreMascotaJugador = "Tu hipodoge. ";
    } else if (capipepo.checked) {
        nombreMascotaJugador = "Tu capipepo. ";
    } else if (ratigueya.checked) {
        nombreMascotaJugador = "Tu ratigueya.";
    } else {
        alert("tienes que seleccionar una mascota para continuar BRO!");
        return;
    }
    
    spanMascotaJugador.innerHTML = nombreMascotaJugador;
    
    sectionAtaque.style.display = "flex";
    
    sectionMascotaJugador.style.display = "none";
    
    document.getElementById("boton-fuego").disabled = false;
    document.getElementById("boton-agua").disabled = false;
    document.getElementById("boton-tierra").disabled = false;
    
    seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1, 3);
    
    nombreMascotaEnemigo;
    if (mascotaAleatorio == 1) {
        nombreMascotaEnemigo = "Hipodoge del enemigo. ";
    } else if (mascotaAleatorio == 2) {
        nombreMascotaEnemigo = "Capipepo del enemigo. ";
    } else if (mascotaAleatorio == 3) {
        nombreMascotaEnemigo = "Ratigueya del enemigo. ";
    }
    
    spanMascotaEnemigo.innerHTML = nombreMascotaEnemigo;
}

function ataqueFuego() {
    ataqueJugadorTipo = "fuego🔥";
    ataqueJugador = `${nombreMascotaJugador}uso fuego 🔥`
    
    ataqueAleatorioEnemigo();
}

function ataqueAgua() {
    ataqueJugadorTipo = "agua💧";
    ataqueJugador = `${nombreMascotaJugador}uso agua 💧`
    
    ataqueAleatorioEnemigo();
}

function ataqueTierra() {
    ataqueJugadorTipo = "tierra🌎"
    ataqueJugador = `${nombreMascotaJugador}uso tierra 🌎`
    
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
    const n = aleatorio(1, 3);

    if (n == 1) {
        ataqueEnemigoTipo = "fuego🔥";
        ataqueEnemigo = `${nombreMascotaEnemigo}uso fuego 🔥`;
    } else if (n == 2) {
        ataqueEnemigoTipo = "agua💧";
        ataqueEnemigo = `${nombreMascotaEnemigo}uso agua 💧`;
    } else {
        ataqueEnemigoTipo = "tierra🌎";
        ataqueEnemigo = `${nombreMascotaEnemigo}uso tierra 🌎`;
    }

    combate();
}

function combate() {
    if (ataqueJugadorTipo === ataqueEnemigoTipo) {
        crearMensajes("empate 🤝🏼");
    } else if (
        (ataqueJugadorTipo === "fuego🔥" && ataqueEnemigoTipo === "tierra🌎") ||
        (ataqueJugadorTipo === "agua💧"  && ataqueEnemigoTipo === "fuego🔥")  ||
        (ataqueJugadorTipo === "tierra🌎" && ataqueEnemigoTipo === "agua💧")
    ) {
        crearMensajes("ganaste ✅");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else {
        crearMensajes("cagaste 🧻");
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
    }

    revisarVidas();
}


function revisarVidas() {
    if (vidasEnemigo === 0) {
        mensajeFinal("enhorabuena!!! 🫡");
    } else if (vidasJugador === 0) {
        mensajeFinal("perdiste brooo!!! 😮‍💨");
    }
}

function crearMensajes(resultado) {
    let parrafoAtaquejugador = document.createElement("p");
    let parrafoAtaqueEnemigo = document.createElement("p");
    
    sectionMensaje.innerHTML = resultado;
    parrafoAtaquejugador.innerHTML = ataqueJugador;
    parrafoAtaqueEnemigo.innerHTML = ataqueEnemigo;
    
    ataquesDelJugador.appendChild(parrafoAtaquejugador);
    ataqueDelEnemigo.appendChild(parrafoAtaqueEnemigo);
}

function mensajeFinal(resultadoFinal) {
    sectionMensaje.innerHTML = `
    <p>brooo ${resultadoFinal}</p>
    `;
    
    botonReiniciar.style.display = "block";
    
    desactivarBotones();
}

function reiniciarJuego() {
    location.reload();
}

function desactivarBotones() {
    document.getElementById("boton-fuego").disabled = true;
    document.getElementById("boton-agua").disabled = true;
    document.getElementById("boton-tierra").disabled = true;
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
