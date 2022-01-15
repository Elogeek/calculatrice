"use strict";
let result = document.querySelector("#result");
let buttons = document.querySelectorAll('button');
let buttonsId = [
    "case-number-one", "case-number-two", "case-number-three", "case-number-four", "case-number-five",
    "case-number-six", "case-number-seven", "case-number-height", "case-number-nine", "case-number-null",
    "more", "less", "multiply", "parenthesize", "parenthesize2", "modulo", "divide", "point", "delete",
    "equal", "reset"
];
for (const btn of buttons) {
    btn.addEventListener('click', function (evt) {
        return result.innerText;
    });
}
const reset = document.getElementById("reset");
reset.addEventListener("click", e => result.innerText = " ");
const equal = document.getElementById("equal");
equal.addEventListener("click", ev => {
    return result.innerHTML;
});
const deleteCalcul = document.getElementById("delete");
deleteCalcul.addEventListener("click", ev => result.innerText = " 0 ");
function check() {
    let numberO;
    let secondN;
}
function isNumber(str) {
    const a = parseInt(str);
    return !isNaN(a);
}
function isOperator(operator) {
    switch (operator) {
        case "+":
            document.getElementById("more");
            break;
        case "-":
            document.getElementById("less");
            break;
        case "*":
            document.getElementById("multiply");
            break;
        case "/":
            document.getElementById("divide");
            break;
        case "%":
            document.getElementById("modulo");
            return true;
        default:
            return false;
    }
}
function calculate(x, operator, y) {
    switch (operator) {
        case "+":
            result.innerHTML = String(x + y);
            return x + y;
            break;
        case "-":
            result.innerHTML = String(x - y);
            return x - y;
            break;
        case "*":
            result.innerHTML = String(x * y);
            return x * y;
            break;
        case "/":
            result.innerHTML = String(x / y);
            return x / y;
            break;
        case "%":
            result.innerHTML = String(x % y);
            return x % y;
            break;
        default:
            break;
    }
}
//# sourceMappingURL=index.js.map