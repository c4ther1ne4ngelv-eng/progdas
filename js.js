class Calculator {
    constructor() {
        this.display = document.querySelector('.display');
        this.buttons = document.querySelectorAll('.btn');
        this.currentValue = '0';
        this.previousValue = '';
        this.operator = null;
        this.shouldResetDisplay = false;

        this.setupEventListeners();
    }

    setupEventListeners() {
        this.buttons.forEach(button => {
            button.addEventListener('click', () => this.handleButtonClick(button));
        });
    }

    handleButtonClick(button) {
        const value = button.textContent;

        if (button.classList.contains('gray')) {
            this.handleFunction(value);
        } else if (button.classList.contains('operator')) {
            this.handleOperator(value);
        } else {
            this.handleNumber(value);
        }

        this.updateDisplay();
    }

    handleNumber(value) {
        if (value === '.' && this.currentValue.includes('.')) return;

        if (this.shouldResetDisplay) {
            this.currentValue = value;
            this.shouldResetDisplay = false;
        } else {
            if (this.currentValue === '0' && value !== '.') {
                this.currentValue = value;
            } else {
                this.currentValue += value;
            }
        }
    }

    handleOperator(value) {
        if (value === '=') {
            this.calculate();
        } else {
            if (this.previousValue !== '' && !this.shouldResetDisplay) {
                this.calculate();
            }
            this.operator = value;
            this.previousValue = this.currentValue;
            this.shouldResetDisplay = true;
        }
    }

    handleFunction(value) {
        if (value === 'AC') {
            this.currentValue = '0';
            this.previousValue = '';
            this.operator = null;
            this.shouldResetDisplay = false;
        } else if (value === '+/-') {
            this.currentValue = String(Number(this.currentValue) * -1);
        } else if (value === '%') {
            this.currentValue = String(Number(this.currentValue) / 100);
        }
    }

    calculate() {
        if (this.operator === null || this.previousValue === '') return;

        let result;
        const prev = Number(this.previousValue);
        const current = Number(this.currentValue);

        switch (this.operator) {
            case '+':
                result = prev + current;
                break;
            case '−':
                result = prev - current;
                break;
            case '×':
                result = prev * current;
                break;
            case '÷':
                result = prev / current;
                break;
            default:
                return;
        }

        this.currentValue = String(result);
        this.operator = null;
        this.previousValue = '';
        this.shouldResetDisplay = true;
    }

    updateDisplay() {
        this.display.textContent = this.currentValue;
    }
}

// Initialize calculator when page loads
document.addEventListener('DOMContentLoaded', () => {
    new Calculator();
});
