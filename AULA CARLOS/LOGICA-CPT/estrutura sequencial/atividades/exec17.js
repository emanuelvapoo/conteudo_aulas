let val1, val2, nome;

val1 = parseInt(prompt("Digite um valor de sua escolha"));
val2 = parseInt(prompt("Digite outro valor de sua escolha para finalizar"));

if (val1 > val2) {
  document.write(`${val1} é maior que ${val2}`);
} else if (val2 > val1) {
  document.write(`${val2} é maior que ${val1}`);
} else {
  document.write(`${val1} é igual a ${val2}`);
}
