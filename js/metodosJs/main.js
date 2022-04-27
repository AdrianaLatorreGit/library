const superHerois = [
    {
        id: 1,
        nome: "Peter Parker",
        identidade: "Homem Aranha",
        editora: "Marvel",
    },
    {
        id: 2,
        nome: "Bruce Banner",
        identidade: "Hulk",
        editora: "Marvel",
    },
    {
        id: 3,
        nome: "Barry Allen",
        identidade: "Flash",
        editora: "DC",
    },
];

//!Criar um novo objeto

const novoSuperHeroi = {
    id: 4,
    nome: "Bruce Wayne",
    identidade: "Batman",
    editora: "DC",
};
const adicionarNovoSuperHeroi = (superHeroi) => {
    superHerois.push(superHeroi);
    return superHerois;
};
adicionarNovoSuperHeroi(novoSuperHeroi);

// ?===Outra maneira===
// const adicionarNovoSuperHeroi = (id, nome, identidade, editora) => {
//     const superHeroi = {
//         id,
//         nome,
//         identidade,
//         editora,
//     };
//     superHerois.push(superHeroi);
//     return superHeroi;
// };
// adicionarNovoSuperHeroi(4, "Bruce Wayne", "Batman", "DC");

// console.log(superHerois);

// console.table(superHerois);

// !===Pra deixar lindo no inspecionar===
// console.log(
//     "%c Adriana Latorre",
//     "background:magenta; color: #fff; padding:7px; border-radius:5px"
// );

// !Buscar super Herois pelo ID

// const buscarsuperHeroisId = (id) => {
//     const superHeroi = superHerois.find((superHeroi) => superHeroi.id === id);
//     return superHeroi;
// };

// console.table(buscarsuperHeroisId(4));

// !Buscar indice super heroi pelo ID

const buscarIndiceSuperHeroiId = (id) => {
    const indiceSuperHeroi = superHerois.findIndex(
        (superHeroi) => superHeroi.id === id
    );
    // ? Validação caso o Id nao seja encontrado
    // método longo que não é usado
    //     if (indiceSuperHeroi < 0) {
    //         return "Super Herói não encontrado";
    //     }
    //     return indiceSuperHeroi;
    // }

    //  TERNARIO
    // ! condição ? true : false

    const resultado =
        indiceSuperHeroi < 0
            ? "Super herói não encontrado"
            : `O índice do super herói buscado é ${indiceSuperHeroi}`;
    return resultado;
};

console.log(buscarIndiceSuperHeroiId(7));
