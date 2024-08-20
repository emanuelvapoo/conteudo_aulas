let nota1, nota2, nota3, media

nota1 = parseInt(prompt("Digite sua primeira nota"))
nota2 = parseInt(prompt("Digite sua segunda nota"))
nota3 = parseInt(prompt("Digite sua terceira nota"))

media = ((nota1 + nota2 + nota3) /3 )

if (media < 7) { document.write(`Você foi reprovado por que sua nota é: ${media}`)
    
} else { document.write(`Você foi aprovado por que sua nota é: ${media}`)
    
}