let  usuario=0;
let compu=0;

let puntos=0;

 document.addEventListener('DOMContentLoaded',()=>{

    let puntajes =document.getElementById("scores")

    
    let puntaje=sessionStorage.getItem("puntaje")
    
   
        

        if(puntaje>0){
            console.log(puntaje)
            puntajes.innerText=puntaje;

        }else{
            puntaje=0;
            puntajes.innerText=puntaje;
            console.log(puntaje)
            sessionStorage.setItem("puntaje",0)

        }

       
    
        
    

    
    
    
})  

function cargaPiedra(){
    usuario=1;
    console.log("usuario es piedra")
    sessionStorage.setItem("usuario", 1);
}
function cargaPapel(){
    usuario=2;
    console.log("usuario es papel")
    sessionStorage.setItem("usuario", 2);

   /*  mostrarVentanaPapel(); */
}
function cargaTijera(){
    usuario=3;
    console.log("usuario es tiejra")
    sessionStorage.setItem("usuario", 3);
}

function cargaCompu(){
    compu=Math.ceil(Math.random()*3);

    if(compu==1){
        console.log("compu es piedra")
    }else if(compu==2){
        console.log("compu es papel");
    }else{
        console.log("compu es tijera")
    }
}

function inicio(){
        alert("seleccione piedra,papel o tiejra")
    
}

function juego(){

    usuario = sessionStorage.getItem("usuario");
    let puntaje=sessionStorage.getItem("puntaje")
    puntos=parseInt(puntaje)
    

    console.log(usuario)
    console.log(compu)

    cerrar();

    cerrarVentanas()

    cargaCompu();
    
    if(usuario==1){
        if(usuario==1 && compu==2){
            console.log("gano compu")
            perdedor()
    
        }else if(usuario==1&&compu==1){
            console.log("empate!!")
            puntos=puntos+1;
            empate()
        }
        else{
            console.log("ganaste!!")
            puntos=puntos+3;
            ganador();
        }

    }else if(usuario==2){
        if(usuario==2 && compu==3){
            console.log("gano compu")
            perdedor()
        }else if(usuario==2&&compu==2){
            console.log("empate!!")
            puntos=puntos+1;
            empate()
        }else{
            console.log("ganaste!!")
            puntos=puntos+3;
            ganador();
        }

    }else{
        
    if(usuario==3 && compu==1){
        console.log("gano compu")
        perdedor()
    }else if(usuario==3&&compu==3){
        console.log("empate!!")
        puntos=puntos+1;
        empate()
    }else{
        console.log("ganaste!!")
        puntos=puntos+3;
        ganador();
    }
    }

    sessionStorage.setItem("puntaje",puntos);
    dibujarPuntos(); 
    mostrarOponente();
}


function dibujarPuntos(){




    let puntajes =document.getElementById("scores")

    
    let puntaje=sessionStorage.getItem("puntaje")
    puntajes.innerText=puntaje; 
    console.log(puntaje)
    console.log(puntos)
}

function mostrarVentanaPapel() {
    let ventanaEmergente = document.getElementById("mostrar-Papel");
    ventanaEmergente.style.display = "block";
  }

  function cerrarVentanaPapel(){
    let ventanaEmergente = document.getElementById("mostrar-Papel");
    ventanaEmergente.style.display = "none";

  }

  function mostrarOponente(){

    let ventana= document.getElementById("oponentes");
        ventana.style.display = "none";


    if (compu==1){
        let ventana= document.getElementById("oponente-piedra");
        ventana.style.display = "block";

    }else if(compu==2){
        let ventana= document.getElementById("oponente-papel");
        ventana.style.display = "block";

    }else{
        let ventana= document.getElementById("oponente-tijera");
        ventana.style.display = "block";

    }

  }

  function cerrarVentanas(){
    let ventana= document.getElementById("oponente-piedra");
        ventana.style.display = "none";

         ventana= document.getElementById("oponente-papel");
        ventana.style.display = "none";

         ventana= document.getElementById("oponente-tijera");
        ventana.style.display = "none";


  }

  function ganador(){
    let ventana= document.getElementById("win");
        ventana.style.display = "block";
  }
  function perdedor(){
    let ventana= document.getElementById("lose");
        ventana.style.display = "block";
  }
  function empate(){
    let ventana= document.getElementById("tie");
        ventana.style.display = "block";
  }

  function cerrar(){
    let ventana= document.getElementById("win");
        ventana.style.display = "none";

         ventana= document.getElementById("lose");
        ventana.style.display = "none";

         ventana= document.getElementById("tie");
        ventana.style.display = "none";


  }