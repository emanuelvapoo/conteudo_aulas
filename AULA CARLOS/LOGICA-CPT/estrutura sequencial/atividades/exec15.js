let filme, min, horas, usuario, tempo

usuario = prompt("Qual seu nome de usuario?")
filme = prompt("Qual filme você assistiu?")
tempo = parseInt(prompt("Quantos minutos o filme tem?"))

horas = Math.floor(tempo/60)
min = tempo%60

document.write(`${usuario}, o tempo do filme: ${filme} em horas é de:${horas}:${min}`) 