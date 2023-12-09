let valor = localStorage.getItem("value")
let usuario = document.getElementById("usuario")
if(valor == "1"){
    usuario.src = "Manudecostas.png"
}
if(valor == "2"){
    usuario.src = "Enzodecostas.png"
}
