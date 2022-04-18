// No fim de semana o elevador do nosso prédio quebrou, restringindo muito o fluxo de pessoas. Considerando isso, apenas os moradores dos apartamentos com número par poderão usar o elevador.

// Escreva um código que nos informe quais moradores poderão utilizar o elevador com base na variável moradores. O número do apartamento é a sua posição no array. O nome do morador é o valor.

// Imprima no console a seguinte frase: 'O morador <nome do morador> pode usar o elevador', substituindo <nome do morador> pelo nome do morador.

  var moradores = [
    "Fulano de Tal",
    "Beltrano da Cia",
    "Viajante do Tempo",
    "Morador da Lua",
    "Marciano Azul",
    "Et da Eslováquia",
    "Jedi do Lado Cinza da Força",
    "Baby Yoda Amarelo"
]
for(let i = 0; i<moradores.length; i++){
    if(i%2 == 0){
        console.log('O morador ' + moradores[i] + ' pode usar o elevador')
    }
}