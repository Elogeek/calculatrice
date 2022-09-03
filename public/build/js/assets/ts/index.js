"use strict";
const buttons = document.querySelectorAll(".button");
const output = document.querySelector(".output");
const arrayButtons = buttons.length;
console.log(arrayButtons);
let number1 = "";
let number2 = "";
let operator;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        switch (buttons[i].innerHTML) {
            case "+":
                operator = "+";
                output.innerHTML += " " + operator;
                break;
            case "-":
                operator = "-";
                output.innerHTML += " " + operator;
                break;
            case "*":
                operator = "*";
                output.innerHTML += " " + operator;
                break;
            case "/":
                operator = "/";
                output.innerHTML += " " + operator;
                break;
            case "Clear":
                operator = "";
                number1 = "";
                number2 = "";
                output.innerHTML = "";
                break;
            case "Delete":
                operator = "";
                number1 = "";
                number2 = "";
                output.innerHTML = "";
                break;
            case ".":
                if (!operator) {
                    number1 += ".";
                    output.innerHTML = number1;
                }
                else {
                    number2 += ".";
                    output.innerHTML = number1 + " " + operator + " " + number2;
                }
                break;
            case "=":
                let nbr1 = parseFloat(number1);
                let nbr2 = parseFloat(number2);
                if (operator === "+") {
                    output.innerHTML = (nbr1 + nbr2).toString();
                    number1 = "";
                    number2 = "";
                }
                else if (operator === "-") {
                    output.innerHTML = (nbr1 - nbr2).toString();
                    number1 = "";
                    number2 = "";
                }
                else if (operator === "*") {
                    output.innerHTML = (nbr1 * nbr2).toString();
                    number1 = "";
                    number2 = "";
                }
                else if (operator === "/") {
                    output.innerHTML = (nbr1 / nbr2).toString();
                    number1 = "";
                    number2 = "";
                }
                break;
            default:
                if (!operator) {
                    number1 += buttons[i].innerHTML;
                    output.innerHTML = number1;
                }
                else {
                    number2 += buttons[i].innerHTML;
                    output.innerHTML = number1 + " " + operator + " " + number2;
                }
                break;
        }
    });
}
//# sourceMappingURL=index.js.map