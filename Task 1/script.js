/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const form = document.querySelector('form');
const weightInput = document.getElementById('search');
const calculateButton = document.getElementById('submit-btn');
const output = document.getElementById('output');

let dataOutput = {
    weightInLb: null,
    weightInG: null,
    weightInOz: null
};

function updateOutput() {
    output.innerHTML = '';

    output1 = document.createElement('div');
    output1.innerHTML = dataOutput.weightInLb + ' lb';
    output.append(output1);

    output2 = document.createElement('div');
    output2.innerHTML = dataOutput.weightInG + ' g';
    output.append(output2);

    output3 = document.createElement('div');
    output3.innerHTML = dataOutput.weightInOz + ' oz';
    output.append(output3);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    dataOutput.weightInLb = weightInput.value * 2.2046;
    dataOutput.weightInG = weightInput.value / 0.0010000;
    dataOutput.weightInOz = weightInput.value * 35.274;

    updateOutput();
});