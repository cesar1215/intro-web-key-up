# Lab: Moviendo a Bird con el Evento Keyup

## Objetivos
- Utilizar el evento `keyup` para mover un elemento de una página web.
- Seleccionar elementos utilizando `.querySelector()`
- Cambiar el estilo de un elemento utilizando `.style`

## Introducción
Hemos aprendido que a través del método `.addEventListener()`, podemos hacer que un elemento DOM escuche cuando succeda un evento específico y ejecute un bloque de código cuando se detecte el evento. Es hora de poner en práctica nuestros aprendizajes. 

### Funcionalidad del Código

En éste lab harás que `bird` se mueva hacia arriba cuando presiones alguna tecla.

## Instrucciones
Bifurca (fork) y clona (clone) este lab en tu entorno local. Navega a su directorio en la terminal, luego ejecuta el comando `code .` para abrir sus archivos en Visual Studio Code. 

1. Creaa una variable `bird` con el valor del elemento con clase `.bird`

2. Creaa una variable `birdBottom` con el valor del numero `100`

3. Crea la función `alertaKeyUp()`. Cuando se llame a la función `alertaKeyUp()`, el siguiente código debe correr: 

`alert("keyup!")`

4. Crea la función `birdMueveArriba()`. Cuando se llame a la función `birdMueveArriba()`:
- La variable `birdBottom` debe incrementar por `40`
- El valor de la propiedad `bottom` de `bird` debe ser el nuevo valor de `birdBottom`

5. Agrega un eventListener para que cuando se presione cualquier tecla, se llame a la función `birdMueveArriba` y `bird` se mueva hacia arriba.


