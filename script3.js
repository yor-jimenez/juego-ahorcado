let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML"]
let tablero = document.getElementById("2D");
let palabraSecreta = "";

function escogerPalabraSecreta (){
    let palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);

}



function inciarJuego(){
    document.getElementById ("inciarJuego").style.display ="none";
    escogerPalabraSecreta();

}