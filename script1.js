// querySelector funciona para poder seleccionar con la misma sintaxix que en CSS los elementos de HTML
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const button = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

form.addEventListener('submit', buttonOnClick);

// button.addEventListener('click', buttonOnClick);

function buttonOnClick(event) {
    event.preventDefault();
    pResult.innerText = parseInt(input1.value) + parseInt(input2.value);
}