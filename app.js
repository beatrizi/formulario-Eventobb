const parrafo = document.querySelector('p');//queremos ver el cambio

const input = document.querySelector('input');

//anadiendo eventlistener to const input
/** change  (cada vez que cambie algo en el input se activa*/
/**tomar el valor del input con .target.value */
input.addEventListener('change', evento)

function evento(eventoInput) {
    parrafo.textContent = eventoInput.target.value;
}

// -----------------
const cuadro = document.getElementById("cuadroColor")
//mouseenter (cada vez que pasa el mouse encima del evento se activa)
cuadro.addEventListener("mouseenter", cambiaEntrando)
// input.addEventListener('change', evento)

function cambiaEntrando() {
    //cada vez que el mouse entra cambiamos de color
    cuadro.style.backgroundColor="pink";

}

//cuando el mouse salga del cuadrado volvera a estar amarillo
cuadro.addEventListener('mouseleave',cambiaSalir)

function cambiaSalir() {
    cuadro.style.backgroundColor="yellow"
    
}
