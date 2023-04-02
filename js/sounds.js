
export default function Sound(){
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const soundFlorest = new Audio("https://github.com/lucasfagundesf/focus-time2.0/blob/main/sounds/Floresta.wav?raw=true")
    const soundRain = new Audio("https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2?raw=true")
    const soundCoffeeShop = new Audio("https://github.com/lucasfagundesf/focus-time2.0/blob/main/sounds/Cafeteria.wav?raw=true")
    const soundFirePlace = new Audio("https://github.com/lucasfagundesf/focus-time2.0/blob/main/sounds/Lareira.wav?raw=true")

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