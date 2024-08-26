let menuVisible = false;
//funcion para ocultar o mostrar el menu 
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculta el menu cuando selecciona una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
// funcion de las habilidades 
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades")
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_habilidades >=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");

    }

}

//cuando pasa por la barra de hablidades 
window.onscroll = function(){
    efectoHabilidades();
}