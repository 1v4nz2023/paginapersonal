const boton = document.getElementById("boton");
const back = document.getElementById("back");

boton.addEventListener("click", function(){
    document.getElementById("presentacion").style.display="block";
    document.getElementById("boton").style.display="none";
    document.getElementById("title").style.display="none";
})

back.addEventListener("click", function(){
    document.getElementById("presentacion").style.display="none";
    document.getElementById("boton").style.display="block";
    document.getElementById("title").style.display="block";
})

