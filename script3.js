let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML"]
// let tablero = document.getElementById("2D");
var palabraSecreta = "";

let pantalla = document.querySelector("canvas");

let pincel = pantalla.getContext("2d");
let espacio = 5;


function escogerPalabraSecreta (){
    let palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);

}

function guion (inicio,fin){
    pincel.beginPath();
    pincel.lineWidth = 3;
    pincel.strokeStyle = "blue";
    pincel.moveTo(inicio,300);
    pincel.lineTo(fin,300);
    pincel.stroke();
}

function borrarCanvas(){
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
}

function inciarJuego(){
    document.getElementById ("inciarJuego").style.display ="none";
    escogerPalabraSecreta();
    let largo = palabraSecreta.length;
    var inicio = 200;
    let delta = 0;
    let espaciado = (largo-1)* 5;
    let ancho = (200 - espacio)/largo;
    
    
    borrarCanvas();

    for (var i = 0; i < largo; i++) {
        guion(inicio,inicio+ancho);
        inicio = inicio + ancho + espaciado;
     }

}