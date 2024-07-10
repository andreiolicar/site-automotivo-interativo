let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.lista .item')
let indicadores = document.querySelector('.indicadores')
let dots = indicadores.querySelectorAll('ul li')

let active = 0
let fistPosition = 0
let lastPosition = items.length - 1

function setSliders(){
    let itemOld = container.querySelector('.lista .item.active')
    itemOld.classList.remove('active') 

    let dotsOld = indicadores.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicadores.querySelector('.números').innerHTML = '0' + (active + 1)
}

nextButton.onclick = () => {
    active = active + 1 > lastPosition ? 0 : active + 1 
    setSliders()
    items[active].classList.add('active')
}

prevButton.onclick = () => {
    active = active - 1 < fistPosition ? lastPosition : active - 1 
    setSliders()
    items[active].classList.add('active')
}



