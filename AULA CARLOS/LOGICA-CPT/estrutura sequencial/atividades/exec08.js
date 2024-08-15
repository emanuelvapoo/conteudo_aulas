let seg, dias, horas, min

seg = parseInt(prompt("Digite quantos segundos você quiser para eu converter"))

min = seg / 60
horas = min / 60
dias = seg / 86400

document.write(`O valor dos seus segundos em dias é de: ${dias} <br>
em horas é: ${horas } <br>
e em minutos é: ${min}`)