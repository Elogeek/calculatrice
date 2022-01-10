let result = document.querySelector("#result") as HTMLInputElement;
let buttons = document.querySelectorAll('button') as unknown as HTMLElement;

type Operator = "+" | "-" | "*"| "/" | "%";

// display the calcul of the #result
// @ts-ignore
for(const btn of buttons) {
    // @ts-ignore
    btn.addEventListener('click', function(evt) {
        // console.log(buttonsId.length); //ok
      return result.innerText;
    });
}

/**
 * Click calculator buttons
 */
const reset = document.getElementById("reset") as HTMLButtonElement;
reset.addEventListener("click", e => result.innerText = " ")

//const equal = document.getElementById("equal") as HTMLButtonElement;
//equal.addEventListener("click",ev => {
  //  return result.innerHTML;
//});

const deleteCalcul = document.getElementById("delete") as HTMLButtonElement;
deleteCalcul.addEventListener("click",ev => result.innerText = " 0 ");


// check que les numbers soit des numbers et qu'il y a bien un operator
function check(): void {

    let numberO: any;
    let secondN: any;

   // if(result === (isNumber("numberO") && Operator && isNumber("secondN"))) {
       // result.innerText = calculate(numberO,operator, secondN);
  //  }

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

