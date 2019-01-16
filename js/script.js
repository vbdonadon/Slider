// Retuns the array of items
const SlideArray = document.querySelectorAll('.slide li')

// Return the UL
const SlideUL = document.querySelector('.slide')

// Margin size 
let Margin = 20;
let DoubleMargin = Margin * 2;

// Items on screen
let ItemsOnScreen = 2;

// Width from window
let WindowSize = 0;
WindowSize = window.innerWidth;

// Item size
let WindowInner = 0;
WindowInner = (WindowSize/ItemsOnScreen) - DoubleMargin;

// Stores the Element Width
SlideArray.forEach((element) => {
    element.setAttribute("style", `width: ${WindowInner}px; margin-left: ${Margin}px; margin-right: ${Margin}px`)
});

// Array Length
let SlideLength = SlideArray.length

// Stores X-axis value
let TranslateX = 0;

// A counter to compare with array length
let Counter = 0;

// Slider Buttons
const LeftButton = document.querySelector('.left-button')
LeftButton.addEventListener('click', function(){
    if(Counter > 0){
    TranslateX += WindowSize/ItemsOnScreen
    Counter--
    SlideUL.setAttribute("style", `transform: translateX(${TranslateX}px)`)
    } else {
        TranslateX -= 0
    }
});

const RightButton = document.querySelector('.right-button')
RightButton.addEventListener('click', function(){
    if(Counter < (SlideLength - 1)){
        TranslateX -= WindowSize/ItemsOnScreen
        Counter++
        SlideUL.setAttribute("style", `transform: translateX(${TranslateX}px)`)
    } else {
        TranslateX += 0
    }
})