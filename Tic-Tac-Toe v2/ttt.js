const allCells = document.querySelectorAll("[data-cell]")
const board = document.getElementById("board")
const xClass = "x"
const oClass = "o"
let turn = 1
const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let endGame = false
let scoreX = 0
let scoreO = 0

function setBoard() {
    allCells.forEach(cell => {
        cell.classList.remove(xClass)
        cell.classList.remove(oClass)
        cell.addEventListener("click", clickCheck, {once: true})
    })
    setBoardHoverClass()
}
setBoard()

const winningText = document.querySelector("#winningText")
function clickCheck(e) {
    const cell = e.target
    // console.log("clicked! ", cell);
    const currentClass = (turn % 2 === 0) ? oClass : xClass
    claimTile(cell, currentClass)
    if (checkWin(currentClass)) {
        console.log("Winner", currentClass);    // currentCLass = x or o
        endGame = true
        const score = (currentClass === "x") ? scoreX++: scoreO++
        console.log("X: ", scoreX);
        console.log("O: ", scoreO);
        const xScore = document.querySelector(".scoreX")
        const oScore = document.querySelector(".scoreO")
        xScore.textContent = scoreX
        oScore.textContent = scoreO
        
        
        const winner = (currentClass === "x") ? winningText.textContent = "Player 1  [ X ] Wins!" : winningText.textContent = "Player 2 [ O ] Wins!"
        winningText.classList.add("show")
        setTimeout(() => {
            winningText.classList.remove("show")
        }, 1000)

    } 
    else if (checkDraw()) {
        endGame = true
        console.log("Draw");
        winningText.textContent = "Draw! LTry again!"
        winningText.classList.add("show")
        setTimeout(() => {
            winningText.classList.remove("show")
        }, 1000)
    }
    turn ++
    
    setBoardHoverClass()
    if (endGame === true) {
        allCells.forEach(cell => {
            cell.removeEventListener("click", clickCheck)
        })
        setTimeout(setBoard, 1000)
        endGame = false
    }
}


function claimTile(cell, currentClass) {
    cell.classList.add(currentClass)
}

function setBoardHoverClass() {
    board.classList.remove(xClass)
    board.classList.remove(oClass)
    if (turn % 2 === 0) {
        board.classList.add(oClass)
    } else {
        board.classList.add(xClass)
    }
}



function checkWin(currentClass) {
    return winCondition.some(combo => {
        return combo.every(index => {
            return allCells[index].classList.contains(currentClass)
        })
    })
}
function checkDraw() {
    return [...allCells].every(cell => {
        return cell.classList.contains(xClass) || cell.classList.contains(oClass)
    })
}





// creating night mode switch

// const checkBox = document.getElementById("checkbox")
// checkBox.addEventListener("change", () => {
//     document.getElementById("body").classList.toggle("night")
// })














