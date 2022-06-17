// Somar todos os números de um array

// Com previousValue e currentValue
// function somaNumeros(arr) {
//     return arr.reduce(function (prev, current) {
//         console.log({ prev });
//         console.log({ current });
//         return prev + current;
//     });
// }

// const arr = [1, 2];

// console.log(somaNumeros(arr));

// Criar função que recebe uma lista de preços e o número representando o saldo disponível (valor inicial). Calcule qual será o saldo final após subtrair todos os preços da lista enviada
// oq sobra do saldo inicial depois de subtrair os preços de uma lista

const lista = [
    {
        name: "sabão em pó",
        preco: 30,
    },
    {
        name: "cereal",
        preco: 12,
    },
    {
        name: "toalha",
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current, index) {
        console.log("rodada ", index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));
