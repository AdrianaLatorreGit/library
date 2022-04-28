const superHerois = [
    {
        id: 1,
        nome: "Peter Parker",
        identidade: "Spiderman",
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
    {
        id: 4,
        nome: "Bruce Wayne",
        identidade: "Batman",
        editora: "DC",
    },
];

// ?findIndex
// !SPREAD OPERATOR
// const alterarEditora = (id, editora) => {
//     let indexSuperHeroi = superHerois.findIndex(
//         (superHerois) => superHerois.id === id
//     );
//     superHerois[indexSuperHeroi] = { ...superHerois[indexSuperHeroi], editora };
//     return superHerois[indexSuperHeroi];
// };

// console.table(alterarEditora(2, "DC"));

// ? filtrar personagens
// !INCLUDES
// !FILTER

const buscarSuperHerois = (texto, chave) => {
    const filtroSuperHeroi = superHerois.filter((superheroi) =>
        superheroi[chave].includes(texto)
    );

    return filtroSuperHeroi;
};
// console.log(buscarSuperHerois("Bruce", "nome"));
console.log(buscarSuperHerois("DC", "editora"));
