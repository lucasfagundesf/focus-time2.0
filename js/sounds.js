export default function Sound(){
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const soundFlorest = new Audio("")
    const soundRain = new Audio("https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2/view")
    const soundCoffeeShop = new Audio("https://drive.google.com/file/d/1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA/view")
    const soundFirePlace = new Audio("https://drive.google.com/file/d/1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB/view")

    soundFlorest.loop = true
    soundRain.loop = true
    soundCoffeeShop.loop = true
    soundFirePlace.loop = true

    function pressButton(){
        buttonPressAudio.play()
    }
    function timeEnd(){
        kitchenTimer.play()
    }
    function florest(){
        soundFlorest.play()
    }
    function rain(){
        soundRain.play()
    }
    function coffeeShop(){
        soundCoffeeShop.play()
    }
    function firePlace(){
        soundFirePlace.play()
    }
    return{
        pressButton,
        timeEnd,
        florest,
        rain,
        coffeeShop,
        firePlace
    }
}