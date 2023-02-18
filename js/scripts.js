const value1 = document.querySelector(".value1");
const value2 = document.querySelector(".value2");
const result = document.querySelector("#result");
const p = document.querySelector("p");

const somar = document.querySelector(".somar");
const subtrair = document.querySelector(".subtrair");
const multiplicar = document.querySelector(".multiplicar");
const dividir = document.querySelector(".dividir");

somar.addEventListener("click", () => {
  const resultado = (result.textContent =
    parseFloat(value1.value) + parseFloat(value2.value));

  p.textContent = `A soma de ${value1.value} + ${value2.value} é: ${resultado}`;
});

subtrair.addEventListener("click", () => {
  const resultado = (result.textContent =
    parseFloat(value1.value) - parseFloat(value2.value));

  p.textContent = `A subtração de ${value1.value} - ${value2.value} é: ${resultado}`;
});

multiplicar.addEventListener("click", () => {
  const resultado = (result.textContent =
    parseFloat(value1.value) * parseFloat(value2.value));

  p.textContent = `A multiplicação de ${value1.value} * ${value2.value} é: ${resultado}`;
});

dividir.addEventListener("click", () => {
  const resultado = (result.textContent =
    parseFloat(value1.value) / parseFloat(value2.value));

  p.textContent = `A divisão de ${value1.value} / ${value2.value} é: ${resultado}`;
});
