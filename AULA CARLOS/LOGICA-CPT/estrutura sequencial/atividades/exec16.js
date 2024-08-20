let usuario, carro, preco, parcela, entrada

usuario = prompt("Informe seu mome de usuario")
carro = prompt("Qual o modelo do carro que você deseja?")
preco = parseInt(prompt("Qual o preço desse carro?"))

entrada = (preco / 2)
parcela = ( (preco - entrada) /12)

document.write(`A entrada necessária para você comprar é: ${entrada} e as parcelas ficam por ${parcela} em 12 meses `)
