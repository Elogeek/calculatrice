// Search btns of the calculator
const buttons = document.querySelectorAll(".button") as NodeListOf<Element>;
const output = document.querySelector(".output") as HTMLElement;

// tests btns
const arrayButtons: number = buttons.length;
console.log(arrayButtons); // it's correct

let number1: string = "";
let number2: string = "";
let operator: string;

for (let i: number = 0; i < buttons.length; i++) {
   buttons[i].addEventListener("click", ()=>{
        switch (buttons[i].innerHTML) {
            case "+":
                operator = "+";
                output.innerHTML += " " + operator
                break;
            case "-":
                operator = "-";
                output.innerHTML += " " + operator
                break;
            case "*":
                operator = "*";
                output.innerHTML += " " + operator
                break;
            case "/":
                operator = "/";
               output.innerHTML += " " + operator
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
                if (!operator){
                    number1 += ".";
                    output.innerHTML = number1;
                }
                else {
                    number2 += ".";
                    output.innerHTML = number1 + " " + operator + " " + number2
                }
                break;
            case "=":
                let nbr1: number = parseFloat(number1);
                let nbr2: number = parseFloat(number2);
                if (operator === "+"){
                    output.innerHTML = (nbr1 + nbr2).toString()
                    number1 = "";
                    number2 = "";
                }
                else if (operator === "-"){
                    output.innerHTML = (nbr1 - nbr2).toString()
                    number1 = "";
                    number2 = "";
                }
                else if (operator === "*"){
                    output.innerHTML = (nbr1 * nbr2).toString()
                    number1 = "";
                    number2 = "";
                }
                else if (operator === "/"){
                    output.innerHTML = (nbr1 / nbr2).toString()
                    number1 = "";
                    number2 = "";
                }
                break;
            default:
                if (!operator){
                    number1 += buttons[i].innerHTML;
                    output.innerHTML = number1;
                }
                else {
                    number2 += buttons[i].innerHTML;
                    output.innerHTML = number1 + " " + operator + " " + number2
                }
                break;
        }
    })
}
