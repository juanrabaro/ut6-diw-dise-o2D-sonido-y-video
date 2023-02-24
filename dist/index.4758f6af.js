function carrusel() {
    const punto1 = document.getElementById("puntos__punto1");
    const punto2 = document.getElementById("puntos__punto2");
    const punto3 = document.getElementById("puntos__punto3");
    const punto4 = document.getElementById("puntos__punto4");
    const grande = document.getElementById("carrusel__grande");
    punto1.onclick = ()=>{
        grande.style.transform = `translateX(0%)`;
        punto2.classList.remove("activo");
        punto3.classList.remove("activo");
        punto4.classList.remove("activo");
        punto1.classList.toggle("activo");
    };
    punto2.onclick = ()=>{
        grande.style.transform = `translateX(-25%)`;
        punto1.classList.remove("activo");
        punto3.classList.remove("activo");
        punto4.classList.remove("activo");
        punto2.classList.toggle("activo");
    };
    punto3.onclick = ()=>{
        grande.style.transform = `translateX(-50%)`;
        punto1.classList.remove("activo");
        punto2.classList.remove("activo");
        punto4.classList.remove("activo");
        punto3.classList.toggle("activo");
    };
    punto4.onclick = ()=>{
        grande.style.transform = `translateX(-75%)`;
        punto1.classList.remove("activo");
        punto2.classList.remove("activo");
        punto3.classList.remove("activo");
        punto4.classList.toggle("activo");
    };
}

//# sourceMappingURL=index.4758f6af.js.map
