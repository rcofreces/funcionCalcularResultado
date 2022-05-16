let número1: number = Number(prompt("Ingrese el primer número"));
let número2: number = Number(prompt("Ingrese el segundo número"));
let opciónMenú: number = Number(prompt("Ingrese 1 para sumar, ingrese 2 para restar ó ingrese otro comando para terminar"));
let resultado = calcularResultado (número1, número2, opciónMenú);

function calcularResultado (número1, número2, opciónMenú): number {
  let resultado: number;
  if (opciónMenú === 1) {
    resultado = número1 + número2;
  } else (opciónMenú === 2) {
      resultado = número1 - número2;
  }
  return resultado;
}
console.log("El resultado es:", resultado);
