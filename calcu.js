function calculate() {
  let valueant = document.getElementById("value-ant")
  let valuepost = document.getElementById("value-post")
  let resultado = document.getElementById("resultado")

  valueant.innerHTML = 5
  valuepost.innerHTML = 2
  resultado.textContent = valueant.textContent + valuepost.textContent



  let uno = document.getElementById("uno")
  let dos = document.getElementById("dos")
  let tres = document.getElementById("tres")
  let cuatro = document.getElementById("cuatro")
  let cinco = document.getElementById("cinco")
  let seis = document.getElementById("seis")
  let siete = document.getElementById("siete")
  let ocho = document.getElementById("ocho")
  let nueve = document.getElementById("nueve")
  let cero = document.getElementById("cero")
  let sumar = document.getElementById("sumar")
  let restar = document.getElementById("restar")
  let multiplicar = document.getElementById("multiplicar")

  let primeraCifra = document.createElement("td")
  let segundaCifra = document.createElement("td")
  let resultadoFinal = document.createElement("td")

  primeraCifra.textContent = valueant.value
  segundaCifra.textContent = valuepost.value
  resultadoFinal.textContent = resultado.value

  let operacion = prompt();
  switch (operacion) {
    case "+":
      operacion = valueant + valuepost;
      break;
    case "-":
      if (valueant > valuepost) {
        operacion = valueant - valuepost;
      } else {
        operacion = valuepost - valueant;
      }
      break;
    case "/":
      if (valuepost = 0) {
        mensaje = "Error! No se puede dividir entre cero"
      } else {
        operacion = valueant / valuepost
      }
      break;
    case "*":
      operacion = valueant * valuepost;
      break;
    default:
      mensaje = "Ingrese solo numeros por favor";
      break;
  }

}

