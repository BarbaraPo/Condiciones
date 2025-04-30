const  imagen=document.querySelector('#imagen');

imagen.onclick=function() {
    if (imagen.style.border ==="2px solid red") {

        imagen.style.border= "none";
    }

    else {
        imagen.style.border= "2px solid red"
    }
};