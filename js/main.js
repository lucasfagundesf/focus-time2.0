import Sounds from "./sounds.js"
import {
    html,
    minutesDisplay,
    secondsDisplay,
    buttonDark,
    buttonLight,
    buttonMinus,
    buttonPlay,
    buttonPlus,
    buttonStop,
    cardCoffeeShop,
    cardFirePlace,
    cardFlorest,
    cardRain
} from "./elements.js"

const sound = Sounds()
// Events
buttonLight.addEventListener('click', changeTheme)
buttonDark.addEventListener('click', changeTheme)
buttonPlay.addEventListener('click', clickOnPlay)
buttonStop.addEventListener('click', clickOnStop)
buttonPlus.addEventListener('click', clickOnPlus)
buttonMinus.addEventListener('click', clickOnMinus)
cardFlorest.addEventListener('click', clickOnFlorest)
cardRain.addEventListener('click', clickOnRain)
cardCoffeeShop.addEventListener('click', clickOnCoffeeShop)
cardFirePlace.addEventListener('click', clickOnFirePlace)

// Functions events
function changeTheme() {
    html.classList.toggle('dark-mode');
    buttonLight.classList.toggle('hide');
    buttonDark.classList.toggle('hide');
}
function clickOnPlay(){
    // controls.play()
    // timer.countdown()
    sound.pressButton()
}
function clickOnStop(){
    // controls.reset()
    // timer.reset()
    sound.pressButton()
}
function clickOnPlus(){
    // timer.plus()
    sound.pressButton()
}
function clickOnMinus(){
    // timer.minus()
    sound.pressButton()
}
function clickOnFlorest(){
    cardFlorest.classList.toggle('selected')
    sound.florest()
}
function clickOnRain(){
    cardRain.classList.toggle('selected')
    sound.rain()
}
function clickOnCoffeeShop(){
    cardCoffeeShop.classList.toggle('selected')
    sound.coffeeShop()
}
function clickOnFirePlace(){
    cardFirePlace.classList.toggle('selected')
    sound.firePlace()
}