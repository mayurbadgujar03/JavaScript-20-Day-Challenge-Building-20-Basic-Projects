const calculatorContainer = document.querySelector('.calculator-container');

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');

const resultDisplay = document.getElementById('result');

const pnum1 = document.getElementById('pnum1');
const pnum2 = document.getElementById('pnum2');

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => {
    num1.value = '';
    num2.value = '';
    pnum1.textContent = '';
    pnum2.textContent = '';
    resultDisplay.textContent = '0';
    calculatorContainer.classList.remove('shake');
});

add.addEventListener('click', () => addAns());
subtract.addEventListener('click', () => subtractAns());
multiply.addEventListener('click', () => multiplyAns());
divide.addEventListener('click', () => divideAns());

document.addEventListener('keydown', (event) => {
    if (event.key === '+' || event.key === 'a') addAns();
    if (event.key === '-' || event.key === 's') subtractAns();
    if (event.key === '*' || event.key === 'm') multiplyAns();
    if (event.key === '/' || event.key === 'd') divideAns();
});

function addAns() {
    let number1 = parseFloat(num1.value);
    let number2 = parseFloat(num2.value);

    if (isNaN(number1)) {
        pnum1.textContent = 'Invalid input^';
    }
    if (isNaN(number2)) {
        pnum2.textContent = 'Invalid input^';
    }

    if (isNaN(number1) || isNaN(number2)) {
        shakeCalculator();
        return;
    }

    let result = number1 + number2;
    displayResult(result);
}

function subtractAns() {
    let number1 = parseFloat(num1.value);
    let number2 = parseFloat(num2.value);

    if (isNaN(number1)) {
        pnum1.textContent = 'Invalid input^';
    }
    if (isNaN(number2)) {
        pnum2.textContent = 'Invalid input^';
    }

    if (isNaN(number1) || isNaN(number2)) {
        shakeCalculator();
        return;
    }

    let result = number1 - number2;
    displayResult(result);
}

function multiplyAns() {
    let number1 = parseFloat(num1.value);
    let number2 = parseFloat(num2.value);

    if (isNaN(number1)) {
        pnum1.textContent = 'Invalid input^';
    }
    if (isNaN(number2)) {
        pnum2.textContent = 'Invalid input^';
    }

    if (isNaN(number1) || isNaN(number2)) {
        shakeCalculator();
        return;
    }

    let result = number1 * number2;
    displayResult(result);
}

function divideAns() {
    let number1 = parseFloat(num1.value);
    let number2 = parseFloat(num2.value);

    if (isNaN(number1)) {
        pnum1.textContent = 'Invalid input^';
    }
    if (isNaN(number2)) {
        pnum2.textContent = 'Invalid input^';
    }

    if (number2 === 0) {
        pnum2.textContent = 'Cannot divide by zero^';
        shakeCalculator();
        return;
    }

    if (isNaN(number1) || isNaN(number2)) {
        shakeCalculator();
        return;
    }

    let result = number1 / number2;
    displayResult(result);
}

function shakeCalculator() {
    calculatorContainer.classList.add('shake');
    setTimeout(() => {
        calculatorContainer.classList.remove('shake');
    }, 500);
}

function displayResult(result) {
    resultDisplay.textContent = `${result}`;
    resultDisplay.style.color = result > 0 ? '#4CAF50' : result < 0 ? 'red' : '#333';
}