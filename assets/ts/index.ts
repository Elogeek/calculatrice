const buttons = document.querySelectorAll(".button") as NodeListOf<Element>;
const output = document.querySelector(".output") as HTMLElement;

// Search btn
const reset = document.getElementById("clear") as HTMLButtonElement;
const deleteBtn = document.getElementById("delete") as HTMLButtonElement;
const equal = document.getElementById("equals") as HTMLButtonElement;

let i: number = 0;

const arrayButtons: number = buttons.length;
console.log(arrayButtons); // it's correct

for(i = 0; i <arrayButtons; i++) {
    // @ts-ignore
    buttons[i].addEventListener("click", compute);
    //console.log(buttons[i]); it's correct
}

type Operator = "+" | "-" | "*"| "/" ;

/**
 * Action touch buttons
 */
function actionBtn(): void {
    const allButton: NodeListOf<Element> = document.querySelectorAll(".button");

    allButton.forEach(function (e:Element):void {

        e.addEventListener("click", function ():void {
            console.log(e.innerHTML);
            output.innerHTML = e.innerHTML;

            // Special calculator button clicks
            if(e.innerHTML === "clear") {
                reset.addEventListener("click", e => output.innerText = " ")
            }
            if(e.innerHTML === "delete") {
                deleteBtn.addEventListener("click", ev => {
                    output.innerText = output.innerHTML.slice(0, output.innerHTML.length - 1)
                });
            }
            // @ts-ignore
            if(e.innerHTML === "=") {
                equal.addEventListener("click", ev => {
                        output.innerHTML = eval(output.innerHTML)
                }
            )}
        })

    })

}

/**
 * Return compute (result of the calc)
 * @param numberA
 * @param operator
 * @param numberB
 */
function compute(numberA: number, operator: Operator, numberB: number) : number | undefined {

    switch (operator) {

        case "+":
            output.innerHTML = String(numberA + numberB);
            return numberA + numberB;
        case "-":
            output.innerHTML = String(numberA - numberB);
            return numberA - numberB;
        case "*":
            output.innerHTML = String(numberA * numberB);
            return numberA * numberB;
        case "/":
            output.innerHTML = String( numberA / numberB);
            return numberA / numberB;
        default:
            return 0;
    }
}

actionBtn();