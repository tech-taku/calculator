let displayDiv = document.querySelector(".cal-display");
let num1 = "";
let num2 = "";
let operator = "";
let displayResult = false;

const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const deleteBtn = document.querySelector(".clear");

function appendDisplay(value) {
    displayDiv.textContent += value;
}

function clearDisplay() {
    displayDiv.textContent = "";
    num1 = "";
    num2 = "";
    operator = "";
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate() {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let result = "";

    switch (operator) {
        case "+":
            result = add(number1, number2);
            break;
        case "-":
            result = subtract(number1, number2);
            break;
        case "*":
            result = multiply(number1, number2);
            break;
        case "/":
            result = divide(number1, number2);
            break;
        default:
            result = "";
    }
    
    displayDiv.textContent = result;
    displayResult = true;
}

numberBtns.forEach((element) => {
    element.addEventListener("click", () => {
        if (displayResult) {
            clearDisplay();
            displayResult = false;
        }
        appendDisplay(element.textContent);
        if (!operator) {
            num1 += element.textContent;
        } else {
            num2 += element.textContent;
        }
    });
});

operatorBtns.forEach((element) => {
    element.addEventListener("click", () => {
        if (num1 && !operator) {
            operator = element.textContent;
            appendDisplay(operator);
        }
    });
});

equalsBtn.addEventListener("click", () => {
    if (num1 && num2 && operator) {
        operate();
    }
});

deleteBtn.addEventListener("click", () => {
    clearDisplay();
});
