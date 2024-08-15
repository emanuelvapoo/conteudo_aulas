let custo, venda, lucro

custo = parseInt(prompt("Qual o custo que você gasta para comprar o produto?"))
lucro = parseInt(prompt("Quantos porcento você quer lucrar em cima desse produto?"))

venda = (custo + lucro)

document.write (`Você vai ter que vender por r$:  ${venda}`)
