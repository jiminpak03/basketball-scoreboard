document.getElementById("score-home").textContent = 0
document.getElementById("score-guest").textContent = 0

let homeScore = 0
let guestScore = 0

function homeFt() {
    homeScore++
    document.getElementById("score-home").textContent = homeScore
}

function home2p() {
    homeScore += 2
    document.getElementById("score-home").textContent = homeScore
}

function home3p() {
    homeScore += 3
    document.getElementById("score-home").textContent = homeScore
}

function guestFt() {
    guestScore++
    document.getElementById("score-guest").textContent = guestScore
}

function guest2p() {
    guestScore += 2
    document.getElementById("score-guest").textContent = guestScore
}

function guest3p() {
    guestScore += 3
    document.getElementById("score-guest").textContent = guestScore
}

function reset() {
    homeScore = 0
    guestScore = 0
    document.getElementById("score-home").textContent = homeScore
    document.getElementById("score-guest").textContent = guestScore
}