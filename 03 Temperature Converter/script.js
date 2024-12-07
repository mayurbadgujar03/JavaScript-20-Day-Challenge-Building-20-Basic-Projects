const inputTemp = document.getElementById('inputTemp');
const toConvert = document.getElementById('toConvert');
const unitSelect = document.getElementById('unitSelect');

toConvert.addEventListener('click', () => tempConverter());

function tempConverter() {
    let temp = inputTemp.value;
    let output = document.getElementById('output');

    if (unitSelect.value === "celsius") {
        let fahrenheit = ( temp * 9 / 5) + 32;
        output.innerText = `The temperature in Fahrenheit is ${fahrenheit.toFixed(2)}`;
    } else {
        let Celsius = (temp - 32) * 5 / 9;
        output.innerText = `The temperature in Celsius is ${Celsius.toFixed(2)}`;
    }
}