// funcion al hacer click
function accion() {
    //variable obtenida por nombre de clase
    var ancla = document.getElementsByClassName('nav-enlace');
    //ciclo de cada ancla
    for(var i = 0; i < ancla.length; i++){
        //agrega y quita las propiedades de la clase desaparece
        ancla[i].classList.toggle('desaparece');
    }
}