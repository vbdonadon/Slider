const Slider = function (value) {
    // Retuns the array of items
    const SlideArray = document.querySelectorAll('.slide .item')

    // Return the UL
    const SlideUL = document.querySelector('.slide')

    // Margin size 
    let Margin = value.Margin || 10;
    let DoubleMargin = Margin * 2;

    // Items on screen
    let ItemsOnScreen = value.ItemsOnScreen || 1;

    // Width from window
    let WindowSize = 0;
    WindowSize = window.innerWidth;

    // Item size
    let WindowInner = 0;
    WindowInner = (WindowSize / ItemsOnScreen);

    // Stores the Element Width
    SlideArray.forEach((element) => {
        element.setAttribute("style", `width: ${WindowInner - (Margin + (Margin/ItemsOnScreen))}px; margin-right: ${Margin}px`)
    });

    // Setting the margin for first and last child
    const FirstChild = SlideArray[0]
    FirstChild.setAttribute("style", `width: ${WindowInner - (Margin + (Margin/ItemsOnScreen)) }px; margin-right: ${Margin}px; margin-left: ${Margin}`)

    // const LastChild = SlideArray[SlideArray.length - 1]
    // LastChild.setAttribute("style", `width: ${WindowInner - (Margin + (Margin/ItemsOnScreen))}px; margin-right: ${Margin}px; margin-left: ${Margin}`)

    // Array Length
    let SlideLength = SlideArray.length

    // Stores X-axis value
    let TranslateX = 0;

    // A counter to compare with array length
    let Counter = 0;

    // Slider Buttons
    const LeftButton = document.querySelector('.left-button')
    LeftButton.setAttribute("style", `opacity: 0.4; cursor: no-drop`)
    LeftButton.addEventListener('click', function () {
        RightButton.setAttribute("style", `opacity: 1`)
        if (Counter > 0 ) {
            if(Counter == 1){
                LeftButton  .setAttribute("style", `opacity: 0.4; cursor: no-drop`)    
            }
            TranslateX += (WindowSize / ItemsOnScreen) - (Margin/ItemsOnScreen)
            Counter--
            SlideUL.setAttribute("style", `transform: translateX(${TranslateX}px)`)
        }
    });

    const RightButton = document.querySelector('.right-button')
    RightButton.addEventListener('click', function () {
        LeftButton.setAttribute("style", `opacity: 1; cursor: no-drop`)
        if (Counter <= ((SlideLength - ItemsOnScreen) -1 )) {
            if(Counter == (SlideLength - ItemsOnScreen) - 1){
                    RightButton.setAttribute("style", `opacity: 0.4; cursor: no-drop`)    
            }
            TranslateX -= (WindowSize / ItemsOnScreen) - (Margin/ItemsOnScreen)
            Counter++
            SlideUL.setAttribute("style", `transform: translateX(${TranslateX}px)`)
        }
    })

    // If window resize
    let windowResize = window.addEventListener('resize', function(e){
        WindowSize = e.currentTarget.innerWidth
        WindowInner = (WindowSize / ItemsOnScreen) - DoubleMargin;

        SlideArray.forEach((element) => {
            element.setAttribute("style", `width: ${WindowInner}px; margin-left: ${Margin}px; margin-right: ${Margin}px`)
        });

        // Array Length
        let SlideLength = SlideArray.length

        // Stores X-axis value
        let TranslateX = 0;

        // A counter to compare with array length
        let Counter = 0;

        RightButton.addEventListener('click', function () {
            if (Counter < (SlideLength - ItemsOnScreen)) {
                TranslateX -= (WindowSize / ItemsOnScreen)
                Counter++
                SlideUL.setAttribute("style", `transform: translateX(${TranslateX - (Margin + (Margin/ItemsOnScreen))}px)`)
            }
        })

        LeftButton.addEventListener('click', function () {
            if (Counter > 0 ) {
                TranslateX += (WindowSize / ItemsOnScreen) - (Margin/ItemsOnScreen)
                Counter--
                SlideUL.setAttribute("style", `transform: translateX(${TranslateX + (Margin + (Margin/ItemsOnScreen))}px)`)
            }
        });
    })
}