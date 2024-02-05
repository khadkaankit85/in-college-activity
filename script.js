let displayValue = '';
const display = document.querySelector('.display');

function appendToDisplay(value) {
    displayValue += value;
    display.innerHTML = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        display.innerHTML = displayValue;
    } catch (error) {
        displayValue = '';
        display.innerHTML = 'Error';
    }
}

function negate() {
    if (displayValue !== '' && !isNaN(displayValue)) {
        displayValue = String(-parseFloat(displayValue));
        display.innerHTML = displayValue;
    }
}

function clearDisplay() {
    displayValue = '';
    display.innerHTML = '';
}
