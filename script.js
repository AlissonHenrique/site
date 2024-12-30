function deslizar() {
    let botaoNao = document.getElementById("nao")

    let larguraJanela = window.innerWidth
    let alturaJanela = window.innerHeight

    let maxX = larguraJanela - botaoNao.offsetWidth
    let maxY = alturaJanela - botaoNao.offsetHeight

    let aleatorioX = Math.random() * maxX 
    let aleatorioY = Math.random() * maxY 

    if (!botaoNao.style.left || !botaoNao.style.top) {
        botaoNao.style.left = `${botaoNao.offsetLeft} - ${60} px`
        botaoNao.style.top = `${botaoNao.offsetTop}- ${60}px`
    }

    requestAnimationFrame(() => {
        botaoNao.style.left = `${aleatorioX}px`
        botaoNao.style.top = `${aleatorioY}px`
    })
}

document.getElementById("nao").addEventListener("touchstart", deslizar)
const bc2 = document.querySelector('.bc-2')
const bc1 = document.querySelector('.bc-1')
bc2.style.display = "none";
const sim = document.querySelector('#sim')
sim.addEventListener('click', ()=>{
   bc2.style.display = "flex";
   bc1.style.display = "none";
})