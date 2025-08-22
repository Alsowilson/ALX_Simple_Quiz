function add(n1, n2) { return n1 + n2; }
function subtract(n1, n2) { return n1 - n2; }
function multiply(n1, n2) { return n1 * n2; }
function divide(n1, n2) { return n1 / n2; }

function getInputs() {
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0;
  return { number1, number2 };
}

const output = document.getElementById('calculation-result');

document.getElementById('add').addEventListener('click', () => {
  const { number1, number2 } = getInputs();
  output.textContent = add(number1, number2);
});

document.getElementById('subtract').addEventListener('click', () => {
  const { number1, number2 } = getInputs();
  output.textContent = subtract(number1, number2);
});

document.getElementById('multiply').addEventListener('click', () => {
  const { number1, number2 } = getInputs();
  output.textContent = multiply(number1, number2);
});

document.getElementById('divide').addEventListener('click', () => {
  const { number1, number2 } = getInputs();
  output.textContent = divide(number1, number2);
});
