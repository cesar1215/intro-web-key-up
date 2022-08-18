
/* Ejercicio 1. 
1. Crear una variable bird con el valor del elemento con clase .bird
2. Crea una variable birdBottom que tenga el valor del numero 100
*/
let bird = document.querySelector(".bird")
let birdBottom = 100
/*
Ejercicio 2.
Crea la función alertaKeyUp()
Cuando se llame a la función alertaKeyUp(), el siguiente código debe correr:
alert("keyup!")
*/
function alertaKeyUp(){
    alert("Keyup!")
}

/*
Ejercicio 3.
Crea la función birdMueveArriba()
Cuando se llame a la función birdMueveArriba():
- La variable birdBottom debe incrementar por 40
- El valor de la propiedad bottom de bird debe ser el nuevo valor de birdBottom
*/
function birdMueveArriba(){
    birdBottom += 40
    bird.style.bottom = birdBottom + 'px'
    alertaKeyUp()
    console.log(birdBottom)
}


/* Ejercicio 4. 
Agrega un eventListener para que cuando se presione cualquier tecla,
se llame a la función birdMueveArriba y bird se mueva hacia arriba.
*/
document.addEventListener("keyup", birdMueveArriba)

