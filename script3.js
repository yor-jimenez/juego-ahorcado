let palabras = ['Estudiar','Espectador','Suave','Culpa','Cena','Caballo','Combate','Maestro',' Extenso','Rueda','Vacante','Erecta','Fundador','Escribir','Angel','Collar','Vapor','Dormir','Capital','Corona','Libertad','Robusto','Guantes','Equivocado','Comer','Soñar','Volar','Bromista','Corral','Amarillo','Barco','Elefante','Oso','Granulado','Postre','Sopa','Caminar','Miercoles','Diciembre','Cantar']
// let tablero = document.getElementById("2D");

window.onload = function(){
    console.log('Cargar windows');
    document.onkeyup = leercaracter;
}
var palabraSecreta = "";

let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");
let espacio = 5;
var parteMuneco = 1;
var finjuego = false;

const valores = window.location.search;
//Creamos la instancia
const urlParams = new URLSearchParams(valores);
//Accedemos a los valores
var palabraRecibida = null; //atob(urlParams.get('palabra'));
var posicionLetras = [];
var arreglo = [];
var poserror = 360;
var letrasErradas = []

function cancelar(){
    
}

function leercaracter(event){
    var caracter = event.key.toUpperCase();
    var posicion;

    if(finjuego){
        return;
    }

    console.log(caracter);
    if(palabraSecreta==""){
        return;
    }

    if (!arreglo.includes(caracter)){
        //Se equivoco de letra..
        
        if(!letrasErradas.includes(caracter)){
            letrasErradas[letrasErradas.length]=caracter;
            pincel.font='20px normal'
            pincel.fillStyle = "#EE4B2B";
            pincel.fillText(caracter,poserror,530);
            poserror = poserror + 15;
        }

        if(parteMuneco==1){
            dibujar1();
            parteMuneco = parteMuneco + 1;
            return;
        }
        if(parteMuneco==2){
            dibujar2();
            parteMuneco = parteMuneco + 1;
            return;
        }
        if(parteMuneco==3){
            dibujar3();
            parteMuneco = parteMuneco + 1;
            return;
        }
        if(parteMuneco==4){
            dibujar4();
            parteMuneco = parteMuneco + 1;
            return;
        }
        if(parteMuneco==5){
            dibujar5();
            parteMuneco = parteMuneco + 1;
            return;
        }
        if(parteMuneco==6){
            dibujar6();
            parteMuneco = parteMuneco + 1;
            return;
        }
        if(parteMuneco==7){
            dibujar7();
            parteMuneco = parteMuneco + 1;
            return;
        }
        if(parteMuneco==8){
            dibujar8();
            parteMuneco = parteMuneco + 1;
            return;
        }
        if(parteMuneco==9){
            dibujar9();
            parteMuneco = parteMuneco + 1;
            return;
        }
        if(parteMuneco==10){
            dibujar10();
            parteMuneco = parteMuneco + 1;
            pincel.font='50px serif';
            pincel.fillStyle = "#0000FF";
            pincel.fillText("VUELVE A INTENTARLO!!!",200,200)
            finjuego = true;
            return;
        }
    }else{
        //Si esta la letra en el arreglo..
        
        do {
            posicion = arreglo.indexOf(caracter);
            arreglo[posicion] =  null;
            pincel.font='30px serif';
            pincel.fillStyle = "#0000FF";
            pincel.fillText(caracter,posicionLetras[posicion],480);
          } while (posicion > -1);

          if(arreglo.toString().replaceAll(',','').length==0){
            //lo logrates..
            pincel.font='50px serif';
            pincel.fillStyle = "#0000FF";
            pincel.fillText("LO LOGRASTES!!!",300,200)
            finjuego = true;
            return;
        }

    }
}

function escogerPalabraSecreta (){
    let palabra = palabras[Math.floor(Math.random()*palabras.length)];
    console.log(palabras.length);
    console.log(Math.floor(Math.random()*palabras.length));
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
    // document.getElementById ("inciarJuego").style.display ="none";

    //document.onkeyup = leercaracter;

    parteMuneco = 1;

    finjuego = false;
    
    palabraRecibida = atob(urlParams.get('palabra'))

    if (urlParams.has('palabra') & palabraRecibida!=''){
        //Hay una palabra nueva.
        //agregar a la lista..
        palabras[palabras.length] = palabraRecibida;
    }

    escogerPalabraSecreta();

    //convertir la palabra a mayuscula
    palabraSecreta = palabraSecreta.toUpperCase();

    //agregar la palabra en el arreglo..

    arreglo = palabraSecreta.split('');

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
        posicionLetras[i] = inicio;
        guion(inicio,inicio+ancho);
        inicio = inicio + ancho + espaciado;
     }

}

// Disenando el muneco

function dibujar1(){
    pincel.beginPath();
    pincel.lineWidth = 3;
    pincel.strokeStyle = "black";
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

