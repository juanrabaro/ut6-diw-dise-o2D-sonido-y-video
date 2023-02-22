'use strict';


const bloque = document.querySelectorAll('.acordeon__bloque');
const h3 = document.querySelectorAll('.bloque__h3');
console.log('hello world!');

h3.forEach( (cadaH3, i) => {
    h3[i].addEventListener('click', () => {

        bloque.forEach( (cadaBloque, i) => {
            bloque[i].classList.remove('activo');
        })
        bloque[i].classList.add('activo');
        
    })
})
