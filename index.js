

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
        if (this.currentOp === '') return
        if (this.previousOp !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOp = this.currentOp;
        this.currentOp = '';
    }

    compute(){
        let computation
        const prev = parseFloat(this.previousOp)
        const current = parseFloat(this.currentOp)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case "+":
                computation = prev + current
                break;
            case "-":
                computation = prev - current
                break;
            case "*":
                computation = prev * current
                break;
            case "/":
                computation = prev / current
                break;
        
            default:
                return
        }
        this.currentOp = computation
        this.operation = undefined
        this.previousOp = ''
    }

    getNumber(number) {
        const string = number.toString()
        const int = parseFloat(string.split('.')[0])
        const dec = string.split('.')[1]
        let intDisplay
        if (isNaN(int)) {
            intDisplay = ''
        } else {
            intDisplay = int.toLocaleString('en', {maximumFractionDigits: 0})
        }

        if (dec != null) {
            return `${intDisplay}.${dec}`
        } else {
            return intDisplay
        }
    }

    updateDisplay(){
        this.currentOpTextElement.innerText = this.getNumber(this.currentOp)
        if (this.operation != null) {
            this.previousOpTextElement.innerText = this.previousOp
            `${this.getNumber(this.previousOp)} ${this.operation}`
        } else {
            this.previousOpTextElement.innerText = ''
        }
    }

}



const numberButtons = document.querySelectorAll("[data-number]");
const operatorsButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-del]");
const previousOpTextElement = document.querySelector("[data-previous]");
const currentOpTextElement = document.querySelector("[data-current]");



const calculator = new Calculator(previousOpTextElement, currentOpTextElement)

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.addNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operatorsButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})


equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})


clearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})


deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})

