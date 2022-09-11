let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML"]
let tablero = document.getElementById().getContext("2D");
let palabraSecreta = "";

function escogerPalabraSecreta (){
    let palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);

}



function inciarJuego(){
    document.getElementById ("iniciar-juego").style.display ="none";

}