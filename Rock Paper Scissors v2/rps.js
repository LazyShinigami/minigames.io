

// function loserEffect(loser) {    //loser === userChoice or compChoice
//     loser.classList.add("loser")
//     setTimeout(() => {
//         loser.classList.remove("loser")
//     }, 1250)
// }

// document.addEventListener("click", versusEffect)
// const lost = document.querySelector(".compChoice")
// setInterval(loseEffect(lost) ,1500)
// document.addEventListener("click", loserEffect(lost))


const optionRock = document.querySelector("#rock")
const optionPaper = document.querySelector("#paper")
const optionScissor = document.querySelector("#scissor")
const optionsAll = [optionRock, optionPaper, optionScissor]
// console.log(optionsAll);
optionsAll.forEach(e => {
    e.addEventListener("click", versusEffect)
})
let win = lose = draw = 0
// console.log(win, lose, draw);

let playerChoice
let compChoice
//giving loser animation to whoever loses
const player = document.querySelector(".userChoice")
const computer = document.querySelector(".compChoice")


function versusEffect() {
    optionsAll.forEach(e => {
        e.removeEventListener("click", versusEffect)
    })
    playerChoice = this.id
    compChoice = generateCompChoice()
    // console.log(playerChoice);
    if (playerChoice === "rock") {
        player.src = "images/hRock.svg"
    } else if (playerChoice === "paper") {
        player.src = "images/hPaper.svg"
    } else if (playerChoice === "scissor") {
        player.src = "images/hScissor.svg"
    }

    if (compChoice === "rock") {
        computer.src = "images/rRock.svg"
    } else if (compChoice === "paper") {
        computer.src = "images/rPaper.svg"
    } else if (compChoice === "scissor") {
        computer.src = "images/rScissor.svg"
    }




    const v = document.querySelector(".v")
    const slash = document.querySelector(".slash")
    const s = document.querySelector(".s")
    const versus = [v, slash, s]
    versus.forEach(e => {
        e.classList.add("active")
    })


    setTimeout(checkWin, 1250)
    setTimeout(() => {
        versus.forEach(e => {
            e.classList.remove("active")
        })
        optionsAll.forEach(e => {
            e.addEventListener("click", versusEffect)
        })

    }, 2500)
}



function generateCompChoice() {
    const randomNo = Math.floor(Math.random() * 3);
    if (randomNo === 0) {
        return "rock"
    } else if (randomNo === 1) {
        return "paper"
    } else {
        return "scissor"
    }
}

function checkWin() {
    // scores
    const winScore = document.getElementById("win")
    const loseScore = document.getElementById("lose")
    const drawScore = document.getElementById("draw")

    // Main scripting

    // console.log(playerChoice, "--", compChoice);
    if (playerChoice === compChoice) {
        draw++
        drawScore.textContent = draw
        player.classList.add("draw")
        computer.classList.add("draw")
    } else if (playerChoice === "rock") {
        if (compChoice === "paper") {
            lose++
            loseScore.textContent = lose
            player.classList.add("loser")
        } else if (compChoice === "scissor") {
            win++
            winScore.textContent = win
            computer.classList.add("loser")
        }
    } else if (playerChoice === "paper") {
        if (compChoice === "scissor") {
            lose++
            loseScore.textContent = lose
            player.classList.add("loser")
        } else if (compChoice === "rock") {
            win++
            winScore.textContent = win
            computer.classList.add("loser")
        }
    } else if (playerChoice === "scissor") {
        if (compChoice === "rock") {
            lose++
            loseScore.textContent = lose
            player.classList.add("loser")
        } else if (compChoice === "paper") {
            win++
            winScore.textContent = win
            computer.classList.add("loser")
        }
    }

    setTimeout(() => {
        player.classList.remove("loser")
        computer.classList.remove("loser")
        player.classList.remove("draw")
        computer.classList.remove("draw")
        player.src = "images/question"
        computer.src = "images/question"
    }, 1250)
}



