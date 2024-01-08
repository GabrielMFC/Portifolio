let valor = localStorage.getItem("value")
let usuario = document.getElementById("usuario")
let cancelarchat = 0
if(valor == "1"){
    usuario.src = "Manudecostas.png"
}
if(valor == "2"){
    usuario.src = "Enzodecostas.png"
}

let msg = "Seja bem vindo(a) ao meu portifólio, Meu nome é Gabriel."

let msgtopico = "Por qual tópico devemos começar?"
let msgsobremim = "Sobre mim"
let msghabilidade = "Habilidades"
let msgportifolio = "Portifólio"
let sobremimdesc = "Eu sou um homem de 17 anos. Não tenho muita experiência na área de TI ainda, mas estou dando o meu melhor."
var identificador = 0 /* Apresentação */
 var identificador2 = 0 /* "Por qual tópico..." */

 var identificador3 = 0 /* Sobre mim */
 var identificador4 = 0 /* Habilidades */
 var identificador5 = 0 /* Projetos */

 var identificador6 = 0 /* Descrição do Sobre mim */

function Digitarsejabemvindo() {
    if (identificador < msg.length) {
        document.getElementById("apresentacao").innerHTML += msg.charAt(identificador)
        identificador++
        setTimeout(Digitarsejabemvindo, 130)
    }else{
        setTimeout(function() {
            document.getElementById("apresentacao").innerHTML = ""}, 1500)
        }
    } 
    setTimeout( function topico(){
        document.getElementById("topico").innerHTML += msgtopico.charAt(identificador2)
        identificador2++
        setTimeout(topico, 130)
     }, 9820)

     setTimeout(function todosTopicos() {
        document.getElementById("topico").innerHTML = ""
        document.getElementById("sobremim").innerHTML += msgsobremim.charAt(identificador3)
        setTimeout( function(){
        document.getElementById("habilidades").innerHTML += msghabilidade.charAt(identificador4)
        identificador4++
    }, 1190)
        setTimeout(function(){
        document.getElementById("portifolio").innerHTML += msgportifolio.charAt(identificador5) 
        identificador5++}, 2640)
        identificador3++
        setTimeout(todosTopicos, 130)
     }, 15500)
     
     
     document.getElementById("sobremim").addEventListener("click", function descSobremim() {
        document.getElementById("sobremim").innerHTML = ""
        document.getElementById("habilidades").innerHTML = ""
        document.getElementById("portifolio").innerHTML = ""
        document.getElementById("descricaosobremim").innerHTML += sobremimdesc.charAt(identificador6)
        identificador6++

        setTimeout(descSobremim, 130)
     })

     document.getElementById("sobremim").addEventListener("click", function fazerfaladousuarioaparecer() {
        document.getElementById("centralizarflexip").classList.remove("FazerAqlIconeIDeImagemIndisponivelDesaparecer")
        document.getElementById("chatdousuario").src = "chatdousuario.png"
        document.getElementById("afirmacao").innerHTML = "SOBRE MIM!"
        setTimeout(() => {
            document.getElementById("centralizarflexip").classList.add("FazerAqlIconeIDeImagemIndisponivelDesaparecer")
            document.getElementById("chatdousuario").src = "#"
        }, 3000)
     })
     document.getElementById("habilidades").addEventListener("click", function abrirHabilidades() {
        
     })
let imagem = document.getElementById("chat")
Digitarsejabemvindo()