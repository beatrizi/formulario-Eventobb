const parrafo = document.querySelector('p');//queremos ver el cambio

const input = document.querySelector('input');

//anadiendo eventlistener to const input
/** change  (cada vez que cambie algo en el input se activa*/
/**tomar el valor del input con .target.value */
input.addEventListener('change', evento)

function evento(eventoInput) {
    parrafo.textContent = eventoInput.target.value;
}


