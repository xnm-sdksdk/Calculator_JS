

class Calculator {
    constructor(previousOpTextElement, currentOpTextElement) {
        this.previousOp = previousOpTextElement;
        this.currentOp = currentOpTextElement;
        this.clear();
    }


    clear(){
        this.currentOp = '';
        this.previousOp = '';
        this.operation = undefined;
    }

    delete(){
        this.currentOp = this.currentOp.toString().slice(0, -1);
    }

    addNumber(number) {
        if(number === '.' && this.currentOp.includes('.')) return
        this.currentOp = this.currentOp.toString() + number.toString();
    }

    chooseOperation(operation) {
    }

    compute(){

    }

    updateDisplay(){
        this.currentOpTextElement.innerText = this.currentOp;
    }








}



const numberButtons = document.querySelectorAll("[data-number]");
const operatorsButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-del]");
const previousOp = document.querySelector("[data-previous]");
const currentOp = document.querySelector("[data-current]");



const calculator = new Calculator(previousOp, currentOp)

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.addNumber(button.innerText);
        calculator.updateDisplay();
    })

})





