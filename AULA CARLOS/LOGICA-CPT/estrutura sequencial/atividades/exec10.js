let valor, rendimento

valor = parseFloat(prompt("Digite o quanto você quer investir para render durante um mês"))

rendimento = ( valor * 1.007 )

document.write (`O seu dinheiro após um mês agora é: R$ ${rendimento}`)