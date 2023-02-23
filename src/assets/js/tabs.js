

function tabs() {
    const li1 = document.getElementById("li1")
    const li2 = document.getElementById("li2")
    const li3 = document.getElementById("li3")
    const bloque1 = document.getElementById("bloquetabs1")
    const bloque2 = document.getElementById("bloquetabs2")
    const bloque3 = document.getElementById("bloquetabs3")
    
    document.getElementById("li1").onclick = () => {
        li2.classList.remove("activo")
        li3.classList.remove("activo")
        bloque2.classList.remove("activo")
        bloque3.classList.remove("activo")
        
        li1.classList.toggle("activo")
        bloque1.classList.toggle("activo")
    }
    document.getElementById("li2").onclick = () => {
        li1.classList.remove("activo")
        li3.classList.remove("activo")
        bloque1.classList.remove("activo")
        bloque3.classList.remove("activo")
        
        li2.classList.toggle("activo")
        bloque2.classList.toggle("activo")
    }
    document.getElementById("li3").onclick = () => {
        li1.classList.remove("activo")
        li2.classList.remove("activo")
        bloque1.classList.remove("activo")
        bloque2.classList.remove("activo")
        
        li3.classList.toggle("activo")
        bloque3.classList.toggle("activo")
    }
}
