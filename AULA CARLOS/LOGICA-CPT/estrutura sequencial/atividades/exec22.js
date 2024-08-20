let num 

num = parseInt(prompt("Digite um número e eu vou dizer se ele é multiplo de 3 e 5"))

if (num %3 ==0 && num %5 ==0) {
    document.write(`O número ${num} é um multiplo de 3 e de 5`)
} else {
    document.write(`O número ${num} não é um multiplo de 3 e 5 `)
}