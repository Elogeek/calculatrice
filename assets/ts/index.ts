let result = document.querySelector("#result") as HTMLInputElement;
const buttons = document.querySelectorAll('#calculator :not(#delete, #equal)');

type Operator = "+" | "-" | "*"| "/" | "%";

// display the calcul of the #result

for(const btn of buttons) {
    // @ts-ignore
    btn.addEventListener('click', e => result.innerHTML += e.target.innerText.trim());
        console.log("on m'a touché");
}

/**
 * Click calculator buttons
 */
const reset = document.getElementById("reset") as HTMLButtonElement;
reset.addEventListener("click", e => result.innerText = " ")



// check que les numbers soit des numbers et qu'il y a bien un operator
function check(): void {
    //const numberO: number;
    //const secondN: number;
    //if(result === numberO && Operator && secondN) {

    //}
}

// Check if number and transform in number if not a number
function isNumber(str: string) : boolean {
    const a = parseInt(str);
    return !isNaN(a);
}

// Operators
// @ts-ignore
function isOperator(operator: string) :boolean {

    switch (operator) {

        case "+":
            document.getElementById("more") as HTMLButtonElement;
            break;
        case "-":
            document.getElementById("less") as HTMLButtonElement;
            break;
        case "*":
            document.getElementById("multiply") as HTMLButtonElement;
            break;
        case "/":
            document.getElementById("divide") as HTMLButtonElement;
            break;
        case "%":
            document.getElementById("modulo") as HTMLButtonElement;
            return true;
        default:
            return false;
    }
}

// Calculate
function calculate(x: number, operator: Operator, y: number) : number | undefined {

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

