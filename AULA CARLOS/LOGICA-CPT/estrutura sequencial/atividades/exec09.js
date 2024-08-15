let dolar, real, usuario, conv

usuario = parseInt(prompt("Qual seu nome de usuário?"))
dolar = parseInt(prompt("Qual a cotação atual do dolar?"))
real = parseInt(prompt("Quantos reais vc tem"))

conv = (real / dolar) 

document.write (`O valor em dolar é de : U$${conv}`)