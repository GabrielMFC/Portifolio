let botao1 = document.getElementById("apertar")
        let botao2 = document.getElementById("apertar2")
        let botao3 = document.getElementById("apertar3")
        let botao4 = document.getElementById("apertar4")

        botao1.addEventListener("click", function apertar() {
            botao1.style.backgroundColor = "white"

            setTimeout(function() {
            botao1.style.backgroundColor = "#A0255E"
        }, 500)
        })
        botao2.addEventListener("click", function apertar() {
            botao2.style.backgroundColor = "white"
            
            setTimeout(function() {
            botao2.style.backgroundColor = "#A0255E"
        }, 500)
        })
        botao3.addEventListener("click", function apertar() {
            botao3.style.backgroundColor = "white"
            
            setTimeout(function() {
            botao3.style.backgroundColor = "#A0255E"
        }, 500)
        })
        botao4.addEventListener("click", function apertar() {
            botao4.style.backgroundColor = "white"
            
            setTimeout(function() {
            botao4.style.backgroundColor = "#A0255E"
        }, 500)
        })

        let entrar = document.getElementById("botaodeentrar")
        let link = document.getElementById("link")
        let evento = 0
        entrar.addEventListener("click", function contador() {
            evento++
            if(evento == 2){
                link.href = "personagem.html"
            }
        })
        
        let botao = document.getElementById("A")
        let sombra = document.getElementById("manipularsombra")
        botao.addEventListener("click", function clicarnobotao() {
            sombra.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0)"

            setTimeout(function() {
                sombra.style.boxShadow = "0px 0px 0.5vh rgba(0, 0, 0, 0.981)"
            }, 500)
        })

        let botaob = document.getElementById("B")
        let sombra2 = document.getElementById("manipularsombra2")
        botaob.addEventListener("click", function clicarnobotao() {
            sombra2.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0)"

            setTimeout(function() {
                sombra2.style.boxShadow = "0px 0px 0.5vh rgba(0, 0, 0, 0.981)"
            }, 500)
        })
        let sair = document.getElementById("botaodesair")
        sair.addEventListener("click", function alertar() {
            alert("Eu sei que você não quer fazer isso, lhe darei outra chance 🙃")
        })
        let botaodoanalogicodecima = document.getElementById("apertar")
        let botaodoanalogicodebaixo = document.getElementById("apertar2")
        let validar = 0
        botaodoanalogicodecima.addEventListener("click", function mexernatela() {
            entrar.classList.add('hovertrue')
            sair.classList.remove('hovertrue')
            validar = 1
        })
        botaodoanalogicodebaixo.addEventListener("click", function mexernatelaparabaixo() {
            sair.classList.add('hovertrue')
            entrar.classList.remove('hovertrue')
            validar = 2
        })
        let linkA = document.getElementById("linkdobotaoA")
        linkA.addEventListener("click", function selecionarA() {
            if(validar == 0){
                sombra.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0)"

            setTimeout(function() {
                sombra.style.boxShadow = "0px 0px 0.5vh rgba(0, 0, 0, 0.981)"
            }, 500)
            }
            if(validar == 1){
                linkA.href = "personagem.html"
            }
            if(validar == 2){
                alert("Eu sei que você não quer fazer isso, lhe darei outra chance 🙃")
            }
        })
        let linkB = document.getElementById("linkdobotaoB")
        linkB.addEventListener("click", function selecionarB() {
            if(validar == 0){
                sombra2.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0)"

            setTimeout(function() {
                sombra2.style.boxShadow = "0px 0px 0.5vh rgba(0, 0, 0, 0.981)"
            }, 500)
            }
            if(validar == 1){
                linkA.href = "personagem.html"
            }
            if(validar == 2){
                alert("Eu sei que você não quer fazer isso, lhe darei outra chance 🙃")
            }
        })