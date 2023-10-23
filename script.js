let esqueleto = "off"
let esqueletoStop = document.getElementById("pararEsqueleto")
let btnSonido = new Audio("sonidos/botonBailar.mp3")

let btnAudio = new Audio("sonidos/audio.mp3")

function bailar() {
    if (esqueleto == "off") {
        esqueleto = "on"
        esqueletoStop.classList.add("on")
        esqueletoStop.addEventListener("click",()=>{
            btnSonido.play()
        })

        esqueletoStop.addEventListener("click",()=>{
            btnAudio.play()
        })
    }else{
        esqueleto = "off"
        esqueletoStop.classList.remove("on")
        esqueletoStop.addEventListener("click",()=>{
            btnAudio.pause()
        })
    }
}
