
function acordeon() {
    const acordeon1 = document.getElementById("acordeon1")
    const acordeon2 = document.getElementById("acordeon2")
    const acordeon3 = document.getElementById("acordeon3")
    document.getElementById("acordeon1").onclick = function() {
        console.log("acordeon1")
        acordeon2.classList.remove("activo")
        acordeon3.classList.remove("activo")
        
        acordeon1.classList.toggle("activo")
    }

    document.getElementById("acordeon2").onclick = function() {
        console.log("acordeon2")
        acordeon1.classList.remove("activo")
        acordeon3.classList.remove("activo")
        
        acordeon2.classList.toggle("activo")
    }

    document.getElementById("acordeon3").onclick = function() {
        console.log("acordeon3")
        acordeon1.classList.remove("activo")
        acordeon2.classList.remove("activo")
        
        acordeon3.classList.toggle("activo")
    }
}