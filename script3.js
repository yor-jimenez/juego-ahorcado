let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML"]
// let tablero = document.getElementById("2D");


var palabraSecreta = "";

let pantalla = document.querySelector("canvas");

let pincel = pantalla.getContext("2d");
let espacio = 5;

const valores = window.location.search;
//Creamos la instancia
const urlParams = new URLSearchParams(valores);
//Accedemos a los valores
var palabraRecibida = atob(urlParams.get('palabra'));

function escogerPalabraSecreta (){
    let palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = palabra;

}

function guion (inicio,fin){
    pincel.beginPath();
    pincel.lineWidth = 3;
    pincel.strokeStyle = "blue";
    pincel.moveTo(inicio,500);
    pincel.lineTo(fin,500);
    pincel.stroke();
}

function borrarCanvas(){
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
}

function botonGuardar(){
    let palabra = document.getElementById("input-text").value;
    var encrypted = btoa(palabra);
    window.location.href="index3.html?palabra="+encrypted;
}

function inciarJuego(){
    document.getElementById ("inciarJuego").style.display ="none";
    
    escogerPalabraSecreta();

    if (palabraRecibida){
        palabraSecreta = palabraRecibida
    }

    console.log(palabraSecreta);

    let largo = palabraSecreta.length;
    let delta = 0;
    let espaciado = (largo-1)* 5;
    let ancho = (200 - espacio)/largo;
    // inicio = (1000 - ancho)
    let word = largo*ancho+(largo-1)*espaciado
    var inicio = (1000-word)/2;
    
    
    borrarCanvas();

    for (var i = 0; i < largo; i++) {
        guion(inicio,inicio+ancho);
        inicio = inicio + ancho + espaciado;
     }

}

// Disenando el muneco

function dibujar1 (){
    pincel.beginPath();
    pincel.lineWidth = 3;
    pincel.strokeStyle = "blue";
    pincel.moveTo(353,400);
    pincel.lineTo(647,400);
    pincel.stroke();    

}

function dibujar2 (){
    pincel.beginPath();
    pincel.lineWidth = 3;
    pincel.strokeStyle = "blue";
    pincel.moveTo(400,400);
    pincel.lineTo(400,40);
    pincel.stroke();    

}

function dibujar3 (){
    pincel.beginPath();
    pincel.lineWidth = 3;
    pincel.strokeStyle = "blue";
    pincel.moveTo(400,40);
    pincel.lineTo(577,40);
    pincel.stroke();    

}


function dibujar4 (){
    pincel.beginPath();
    pincel.lineWidth = 3;
    pincel.strokeStyle = "blue";
    pincel.moveTo(577,40);
    pincel.lineTo(577,90);
    pincel.stroke();    

}

function dibujar5 (){
        // pincel.stroke(); 
    pincel.beginPath();  
    pincel.arc(577,122, 32, 0,  Math.PI * 2);
// Hacemos que se dibuje
    pincel.stroke();

}

function dibujar6 (){
    pincel.beginPath();
    pincel.lineWidth = 3;
    pincel.strokeStyle = "blue";
    pincel.moveTo(577,152);
    pincel.lineTo(577,300);
    pincel.stroke();    

}


function dibujar7 (){
    pincel.beginPath();
    pincel.lineWidth = 3;
    pincel.strokeStyle = "blue";
    pincel.moveTo(577,300);
    pincel.lineTo(550,350);
    pincel.stroke();    

}

function dibujar8 (){
    pincel.beginPath();
    pincel.lineWidth = 3;
    pincel.strokeStyle = "blue";
    pincel.moveTo(577,300);
    pincel.lineTo(604,350);
    pincel.stroke();    

}

function dibujar9 (){
    pincel.beginPath();
    pincel.lineWidth = 3;
    pincel.strokeStyle = "blue";
    pincel.moveTo(577,200);
    pincel.lineTo(530,300);
    pincel.stroke();    

}

function dibujar10 (){
    pincel.beginPath();
    pincel.lineWidth = 3;
    pincel.strokeStyle = "blue";
    pincel.moveTo(577,200);
    pincel.lineTo(624,300);
    pincel.stroke();    

}

function dibujahasta(n){
    if(n>=1){
        dibujar1()
    }
    if(n>=2){
        dibujar2()
    }
    if(n>=3){
        dibujar3()
    }
    if(n>=4){
        dibujar4()
    }
    if(n>=5){
        dibujar5()
    }
    if(n>=6){
        dibujar6()
    }
    
    if(n>=7){
        dibujar7()
    }
    if(n>=8){
        dibujar8()
    }
    if(n>=9){
        dibujar9()
    }
    if(n>=10){
        dibujar10()
    }
}