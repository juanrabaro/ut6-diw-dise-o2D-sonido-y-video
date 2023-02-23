
function a() {
    console.log("fufa")
    const grande    = document.getElementById("carrusel__grande")
    const punto1     = document.getElementById("puntos__punto1")
    const punto2     = document.getElementById("puntos__punto2")
    const punto3     = document.getElementById("puntos__punto3")
    const punto4     = document.getElementById("puntos__punto4")

    console.log(grande)
    console.log(punto1)
    console.log(punto2)
    console.log(punto3)
    console.log(punto4)

    // Cuando CLICK en punto
        // Saber la posición de ese punto
        // Aplicar un transform translateX al grande
        // QUITAR la clase activo de TODOS puntos
        // AÑADIR la clase activo al punto que hemos hecho CLICK

    // Recorrer TODOS los punto
    punto1.forEach( ( cadaPunto , i )=> {
        // Asignamos un CLICK a cadaPunto
        punto1[i].addEventListener('click',()=>{

            // Guardar la posición de ese PUNTO
            let posicion  = i
            // Calculando el espacio que debe DESPLAZARSE el GRANDE
            let operacion = posicion * -50

            // MOVEMOS el grand
            grande.style.transform = `translateX(${ operacion }%)`

            // Recorremos TODOS los punto
            punto1.forEach( ( cadaPunto , i )=>{
                // Quitamos la clase ACTIVO a TODOS los punto
                punto1[i].classList.remove('activo')
            })
            // Añadir la clase activo en el punto que hemos hecho CLICK
            punto1[i].classList.add('activo')

        })
    })
}
