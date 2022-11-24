function calculate() {
  let cuerpo = document.getElementById("cuerpo")

  let calcu = document.createElement("tr")
  let primeraCifra = document.createElement("td")
  let segundaCifra = document.createElement("td")
  let resultadoFinal = document.createElement("td")

  primeraCifra.textContent = valueant.value
  segundaCifra.textContent = valuepost.value
  resultadoFinal.textContent = resultado.value

  calcu.appendChild(primeraCifra)
  calcu.appendChild(segundaCifra)
  calcu.appendChild(resultadoFinal)

  cuerpo.appendChild(calcu)
}

function ingresoNumAnt() {

}

function ingresoNumPost() {

}



let numeros = document.getElementsByClassName("numero")
let operadores = document.getElementsByClassName("operador")








valueant.textContent = appendChild(numeros);
valuepost.textContentt = appendChild(numeros);
resultado.textContent = prompt();
switch (operadores) {
  case "+":
    operadores = valueant + valuepost;
    break;
  case "-":
    if (valueant > valuepost) {
      operadores = valueant - valuepost;
    } else {
      operadores = valuepost - valueant;
    }
    break;
  case "/":
    if (valuepost = 0) {
      mensaje = "Error! No se puede dividir entre cero"
    } else {
      operadores = valueant / valuepost
    }
    break;
  case "*":
    operadores = valueant * valuepost;
    break;
  default:
    mensaje = "Ingrese solo numeros por favor";
    break;
}







resultadoFinal.textContent = resultado.value



let valueant = document.getElementById("value-ant")
let valuepost = document.getElementById("value-post")
let resultado = document.getElementById("resultado")