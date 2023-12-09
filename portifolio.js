let valor = localStorage.getItem("value")
let usuario = document.getElementById("usuario")
if(valor == "1"){
    usuario.src = "Manudecostas.png"
}
if(valor == "2"){
    usuario.src = "Enzodecostas.png"
}

let identificador = 0
let msg = "Seja bem vindo(a) ao meu portifólio, Meu nome é Gabriel."
function Digitarsejabemvindo() {
    if (identificador < msg.length) {
        document.getElementById('texto').innerHTML += msg.charAt(identificador)
        identificador++
        setTimeout(Digitarsejabemvindo, 130)
    }
}
function sumir() {
    if(identificador >= msg.length) {
        imagem.src = "#"
    }
}
let imagem = document.getElementById("chat")
Digitarsejabemvindo()