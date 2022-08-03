const display = document.getElementById("display")
display.textContent = ""
let currentDisplay = display.textContent
let waitVariable = true
let evaluate = false
let operator = ""
let num1 = 0
let num2 = 0
let multipleOperations = false

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    if (Math.floor(button.id) >= 0 || button.id === ".") {
        button.addEventListener("click", () => {
            display.textContent += button.id
            currentDisplay = Math.floor(display.textContent)
        })
    }
})
document.getElementById("clear").addEventListener("click", () => {
    clearDisplay()})
document.getElementById("backspace").addEventListener("click", () => {
    currentDisplay = display.textContent
    display.textContent = currentDisplay.slice(0, display.textContent.length - 1)})

document.getElementById("+").addEventListener("click", () => {
    if (multipleOperations) {
        num2 = Math.floor(display.textContent)
        num1 = operate(operator, num1, num2)
    } else {    
        num1 = Math.floor(display.textContent)
        multipleOperations = true
    }
    operator = "+"
    display.textContent = ""
})
document.getElementById("-").addEventListener("click", () => {
    if (multipleOperations) {
        num2 = Math.floor(display.textContent)
        num1 = operate(operator, num1, num2)
    } else {    
        num1 = Math.floor(display.textContent)
        multipleOperations = true
    }
    operator = "-"
    display.textContent = ""
})
document.getElementById("*").addEventListener("click", () => {
    if (multipleOperations) {
        num2 = Math.floor(display.textContent)
        num1 = operate(operator, num1, num2)
    } else {    
        num1 = Math.floor(display.textContent)
        multipleOperations = true
    }
    operator = "*"
    display.textContent = ""
})
document.getElementById("/").addEventListener("click", () => {
    if (multipleOperations) {
        num2 = Math.floor(display.textContent)
        num1 = operate(operator, num1, num2)
    } else {    
        num1 = Math.floor(display.textContent)
        multipleOperations = true
    }
    operator = "/"
    display.textContent = ""
})

document.getElementById("=").addEventListener("click", () => {
    num2 = Math.floor(display.textContent)
    display.textContent = operate(operator, num1, num2)
    multipleOperations = false
})

function clearDisplay() {
    display.textContent = 0
    num1 = 0
    num2 = 0
}
function operate(operator, num1, num2) {
    switch(operator) {
        case "+":
            answer = add(num1, num2)
            break
        case "-":
            answer = subtract(num1, num2)
            break
        case "*":
            answer = multiply(num1, num2)
            break
        case "/":
            answer = divide(num1, num2)
            break
        case "":
            answer = "nothing"
            break
    }
    return answer
}
function add(num1, num2) {return num1 + num2}
function subtract(num1, num2) {return num1 - num2}
function multiply(num1, num2) {return num1 * num2}
function divide(num1, num2) {return num1 / num2}