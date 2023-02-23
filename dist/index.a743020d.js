function acordeon() {
    const acordeon1 = document.getElementById("acordeon1");
    const acordeon2 = document.getElementById("acordeon2");
    const acordeon3 = document.getElementById("acordeon3");
    document.getElementById("acordeon1").onclick = function() {
        acordeon2.classList.remove("activo");
        acordeon3.classList.remove("activo");
        acordeon1.classList.toggle("activo");
    };
    document.getElementById("acordeon2").onclick = function() {
        acordeon1.classList.remove("activo");
        acordeon3.classList.remove("activo");
        acordeon2.classList.toggle("activo");
    };
    document.getElementById("acordeon3").onclick = function() {
        acordeon1.classList.remove("activo");
        acordeon2.classList.remove("activo");
        acordeon3.classList.toggle("activo");
    };
}

//# sourceMappingURL=index.a743020d.js.map
