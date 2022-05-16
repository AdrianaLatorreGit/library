// Solução 1

// split separa todos os elementos da string
// reverse analisa a palavra de tras pra frente
// join reune novamente o array de plavras em uma string
function verificarPalindromo(string) {
    if (!string) return;

    return string.split("").reverse().join("") === string;
}

console.log(verificarPalindromo("gato"));

// Solução 2

// lenght -1 para se igualar a condição do 0 do looping, já que array começa no 0 e lenght no 1

function verificarPalindromo2(string) {
    if (!string) return "string inexistente";

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(verificarPalindromo2("ovo"));
