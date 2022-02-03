let result = document.querySelector(".result") as HTMLElement;
const buttons = document.querySelectorAll("button") as NodeListOf<Element>;

let i: boolean = true;

// Action touch buttons
function actionBtn() {
    // @ts-ignore
    buttons.addEventListener("click", function () {
        console.log("tadamm");
    })
    console.log("tadamm");
}

type Operator = "+" | "-" | "*"| "/" ;

/**
 * Special calculator button clicks
 */
const reset = document.getElementById("reset") as HTMLButtonElement;
reset.addEventListener("click", e => result.innerText = " ")

const deleteBtn = document.getElementById("delete") as HTMLButtonElement;
deleteBtn.addEventListener("click", ev => {
    result.innerText = result.innerHTML.slice(0, result.innerHTML.length - 1)
});

const equal = document.querySelector("#equal") as HTMLButtonElement;
equal.addEventListener("click", ev => result.innerHTML = eval(result.innerHTML));


// Check if number and transform in number if not a number
function isNumber(str: string) : boolean {
    const a = parseInt(str);
    return !isNaN(a);
}

// Check is operator in the calc
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
        default:
            return false;
    }
}

// Return compute (result of the calc)
function compute(numberA: number, operator: Operator, numberB: number) : number | undefined {

    switch (operator) {

        case "+":
            result.innerHTML = String(numberA + numberB);
            return numberA + numberB;
        case "-":
            result.innerHTML = String(numberA - numberB);
            return numberA - numberB;
        case "*":
            result.innerHTML = String(numberA * numberB);
            return numberA * numberB;
        case "/":
            result.innerHTML = String( numberA / numberB);
            return numberA / numberB;
        default:
           return 0;
    }
}




