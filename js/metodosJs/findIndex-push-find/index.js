const {
    adicionarNovoSuperHeroi,
    adicionarOutroSuperHeroi,
    buscarIndiceSuperHeroiId,
    buscarsuperHeroisId,
} = require("./metodos");

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

const novoSuperHeroi = {
    id: 4,
    nome: "Bruce Wayne",
    identidade: "Batman",
    editora: "DC",
};

// console.log(adicionarNovoSuperHeroi(superHerois, novoSuperHeroi));
// console.log(
//     adicionarOutroSuperHeroi(4, "Bruce Wayne", "Batman", "DC", superHerois)
// );
// console.log(buscarsuperHeroisId(2, superHerois));
// console.log(buscarIndiceSuperHeroiId(2, superHerois));
