let a, b, temp 

a = parseInt(prompt("Digite um número por favor"))
b = parseInt(prompt("Digite outro número por favor"))

document.write(`O valor de A: ${a} e B: ${b} <br>`)
document.write(`${a - b } <br>`)

temp = a
a = b 
b = temp

document.write(`O valor de A: ${b} e B: ${a} <br>`)
document.write(`${a - b} <br>`)  
