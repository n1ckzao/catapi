'use strict'

async function pesquisarFotos(){
    const url = `https://api.thecatapi.com/v1/images/search?limit=30`
    const response = await fetch(url)
    const data = await response.json()

    return data.map(cat => cat.url)
}

function criarImagem(link){
    const galeria = document.getElementById('galeria')
    const novaImg = document.createElement('img')
    novaImg.src = link

    galeria.appendChild(novaImg)
}

async function preencherFotos(){
    const fotos = await pesquisarFotos()
    const galeria = document.getElementById('galeria')

    galeria.replaceChildren('')
    fotos.forEach(criarImagem)
}

preencherFotos()