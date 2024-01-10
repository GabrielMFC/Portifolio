let valor = localStorage.getItem("value")
let usuario = document.getElementById("usuario")
let cancelarchat = undefined
let pararchat = 0
let impedirQueasOpcoesPare = 0
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
 let identificador7 = 0
 var identificador8 = 0
 var identificador9 = 0
 var identificador10 = 0


function Digitarsejabemvindo() {
    if(pararchat == 1){
        return
    }
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
        if(pararchat == 1){
            return
        }
        document.getElementById("topico").innerHTML += msgtopico.charAt(identificador2)
        identificador2++
        setTimeout(topico, 130)
     }, 9820)
     Digitarsejabemvindo()
      function todosOstopicos() {
        document.getElementById("topico").innerHTML = ""
        if(pararchat == 1){
            return
        }
            if(identificador3 < msgsobremim.length){
                document.getElementById("sobremim").innerHTML += msgsobremim.charAt(identificador3)
                identificador3++ 
            }
            if(identificador3 >= msgsobremim.length) {
            if(identificador4 < msghabilidade.length){
                document.getElementById("habilidades").innerHTML += msghabilidade.charAt(identificador4)
                identificador4++
            }}
            if(identificador4 >= msghabilidade.length){
            if(identificador5 < msgportifolio.length){
                document.getElementById("portifolio").innerHTML += msgportifolio.charAt(identificador5)
                identificador5++
            }}
            setTimeout(todosOstopicos, 130)
      }
setTimeout(todosOstopicos, 15500)
     document.getElementById("sobremim").addEventListener("click", function descSobremim() {
        pararchat = 1
        if(impedirQueasOpcoesPare == 1){
            return
        }
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
        }, 2000)

        setTimeout(() => {
            document.getElementById("centralizarflexip").classList.remove("FazerAqlIconeIDeImagemIndisponivelDesaparecer")
            document.getElementById("chatdousuario").src = "chatdousuario.png"
            document.getElementById("afirmacao").innerHTML = "Voltar"
            document.getElementById("afirmacao").style.color = "lightblue"
            document.getElementById("afirmacao").style.textDecoration = "underline"
            document.getElementById("afirmacao").style.cursor = "pointer"
        }, 9000)
        document.getElementById("afirmacao").addEventListener("click", function FazerDesDesaparecer(){
            document.getElementById("descricaosobremim").innerHTML = ""
         })
     })
     
     document.getElementById("afirmacao").addEventListener("click", function fazeropcaoaparecer(){
        setTimeout(() => {document.getElementById("centralizarflexip").classList.add("FazerAqlIconeIDeImagemIndisponivelDesaparecer")
        document.getElementById("chatdousuario").src = "#"}, 1000)
        impedirQueasOpcoesPare = 1
        if(identificador8 < msgsobremim.length){
            document.getElementById("sobremim").innerHTML += msgsobremim.charAt(identificador8)
            identificador8++ 
        }
        if(identificador8 >= msgsobremim.length){
        if(identificador9 < msghabilidade.length){
            document.getElementById("habilidades").innerHTML += msghabilidade.charAt(identificador9)
            identificador9++
        }}
        if(identificador9 >= msghabilidade.length){
        if(identificador10 < msgportifolio.length){
            document.getElementById("portifolio").innerHTML += msgportifolio.charAt(identificador10)
            identificador10++
        }}
            setTimeout(fazeropcaoaparecer, 130)
    })

let imagem = document.getElementById("chat")
