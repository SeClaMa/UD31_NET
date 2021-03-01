function parImpar(num) {
  if (num % 2 != 0) {
    return "impar";
  } else {
    return "par";
  }
}

function pedirNum() {
  var otro = "y";
  var numero = prompt("Introduce un numero para saber si es par o impar");
  var valor = parImpar(numero);

  while (
    otro != "n" ||
    otro != "N" ||
    otro != "no" ||
    otro != "No" ||
    otro != "NO"
  ) {
    alert("El número es " + valor);
    otro = prompt("¿Deseas sabes otro numero? (y o n) ");
    if (
      otro == "n" ||
      otro == "N" ||
      otro == "no" ||
      otro == "No" ||
      otro == "NO"
    ) {
      break;
    } else {
      numero = prompt("Introduce un numero para saber si es par o impar");
      valor = parImpar(numero);
    }
  }
}
