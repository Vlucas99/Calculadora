const display = document.getElementById('display');
let calculation = '';

function appendToDisplay(value) {
    calculation += value;
    display.value = calculation;
}

function handleOperator(operator) {
    if (calculation !== '' && !isOperator(calculation.slice(-1))) {
        appendToDisplay(operator);
    }
}

function clearDisplay() {
    calculation = '';
    display.value = '';
}

function calculate() {
    try {
        const result = eval(calculation);
        display.value = result;
        calculation = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
}

function isOperator(value) {
    return value === '+' || value === '-' || value === '*' || value === '/';
}



