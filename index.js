
var SetaEsquerda = window.document.getElementById("Seta-Esquerda")
var Casa = window.document.getElementById("Casa")
var Interiorcasa = window.document.getElementById("Interior-Casa")
var SetaDireita = window.document.getElementById("Seta-Direita")

function RolarParaEsquerda(){
    Casa.style = "display:none"
    Interiorcasa.style = "display:flex"
    SetaEsquerda.style = "display:none"
    SetaDireita.style = "display:flex"
}
function RolarParaDireita(){
    Interiorcasa.style = "display:none"
    Casa.style = "display:flex"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex"
}


