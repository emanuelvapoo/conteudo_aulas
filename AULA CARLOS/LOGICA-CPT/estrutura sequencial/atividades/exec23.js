let lado1, lado2, lado3

lado1 = parseInt(prompt("Digite o valor da distancia do lado 1 do seu triangulo"))
lado2 = parseInt(prompt("Digite o valor da distancia do lado 2 do seu triangulo"))
lado3 = parseInt(prompt("Digite o valor da distancia do lado 3 de seu triangulo"))

if (lado1 + lado2 > lado3) {
    document.write(`O seu triangulo é certo`)
} else {
    document.write(`O seu triangulo não funciona pois a soma dos dois primeiros lados não é maior que o terceiro lado`)  
}

