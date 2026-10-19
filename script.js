const campoValor = document.getElementById("valor");
const campoTipo = document.getElementById("tipo");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function converter() {
  const valor = parseFloat(campoValor.value);

  if (isNaN(valor)) {
    resultado.textContent = "Digite um número válido.";
    return;
  }

  const tipo = campoTipo.value;
  let convertido;

  if (tipo === "c-f") {
    convertido = valor * 9 / 5 + 32;
    resultado.textContent = valor + " °C = " + convertido.toFixed(2) + " °F";
  } else if (tipo === "f-c") {
    convertido = (valor - 32) * 5 / 9;
    resultado.textContent = valor + " °F = " + convertido.toFixed(2) + " °C";
  } else if (tipo === "c-k") {
    convertido = valor + 273.15;
    resultado.textContent = valor + " °C = " + convertido.toFixed(2) + " K";
  }
}

botao.addEventListener("click", converter);