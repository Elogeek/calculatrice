let result = document.querySelector(".result") as HTMLElement;
const buttons = document.querySelectorAll("button") as NodeListOf<Element>;

// Action touch buttons
// @ts-ignore
for(let button of buttons) {
    // @ts-ignore
    button.addEventListener('click', e => result.innerHTML );
    console.log(button + "on a clické sur moi");
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
function compute(x: number, operator: Operator, y: number) : number | undefined {

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
        default:
           return 0;
    }
}




