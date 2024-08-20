let idade

idade = parseInt(prompt("Digite sua idade para eu ver se você pode dirigir"))

if (idade < 18 ) { document.write(`Você ainda não pode dirigir pois só tem ${idade} anos`)
    
} else { document.write(`Você pode dirigir já que vc já tem ${idade} anos`)
    
}