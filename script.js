// let invertButton = document.querySelector(".lightningbutton");
// let page = document.body;


// function invert() {
//     page.classList.toggle("invert");
// }

// invertButton.addEventListener("click", invert);

let whiteoutButton = document.querySelector(".colorbutton");
let page = document.body;


function whiteout() {
    page.classList.toggle("whiteout");
}

whiteoutButton.addEventListener("click", whiteout);

// let grayscaleButton = document.querySelector(".buttondarkmode");
// let page = document.body;


// function grayscale() {
//     page.classList.toggle("grayscale");
// }

// grayscaleButton.addEventListener("click", grayscale);

function runClock() {

    var now = new Date()

    var hour = now.getHours() %12
    var min = now.getMinutes()
    var sec = now.getSeconds()
    var ms = now.getMilliseconds()


    var clock = document.querySelector("div.clock")
    var hourHand = clock.querySelector("div.hour")
    var minHand = clock.querySelector("div.minute")
    var secHand = clock.querySelector("div.second")


    var hourRotation = 30 * hour + (0.5 * min)
    var minRotation = 6 * min + (0.1 * sec)
    var secRotation = 6 * sec + 0.006 * ms

    hourHand.style.transform = "rotate(" + hourRotation + "deg)"
    minHand.style.transform = "rotate(" + minRotation + "deg)"
    secHand.style.transform = "rotate(" + secRotation + "deg)"

	requestAnimationFrame(runClock)

}

runClock()

