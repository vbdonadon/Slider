// Selecionando todos os itens
const slide = document.querySelector('.slide')


// Tamanho da margem
const margin = 40
const doubMargin = margin * 2

// Max width
const maxWidth = window.innerWidth - doubMargin

// Se objeto for loop falso
// Loop false
let totalItem = 0;
let eachItem = 0;
let larguraMaxima = document.querySelectorAll('.slide li')
let length = larguraMaxima.length
larguraMaxima.forEach((element) => {
    eachItem = element.offsetWidth
    totalItem = totalItem + eachItem + doubMargin
})

// Se objeto for loop true

// Quantidade de itens 
let qnt = 2;
let qntItem = document.querySelectorAll('.slide li')
qntItem.forEach((element) => {
    element.setAttribute("style", `width:${maxWidth/qnt}px; margin-left: ${margin}px; margin-right: ${margin}px`)
})

// Tamanho dos itens
let item = document.querySelector('.slide li')
item = item.offsetWidth

// Variavel para armazenar valor final
let total = 0
let itens = 0

// Selecionando o botão esquerdo
const lButton = document.querySelector('.left-button')
lButton.addEventListener('click', function(){
    if(itens > 0){
    total += item + doubMargin
    itens--
    slide.setAttribute("style", `transform: translateX(${total}px)`)
    } else {
        total -= 0
    }
})

// Selecionando o botão direito
const rButton = document.querySelector('.right-button')
rButton.addEventListener('click', function(){
    if(itens < (larguraMaxima.length - 1)){
        total -= item + doubMargin
        itens++
        slide.setAttribute("style", `transform: translateX(${total}px)`)
    } else {
        total += 0
    }
})

