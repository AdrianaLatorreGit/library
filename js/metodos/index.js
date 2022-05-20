// const usuarios = ["vegeta", "Goku", "trucks", "gohan"];

// for
// for (let i = 0; i < usuarios.length; i++) {
//     console.log(usuarios[i]);
// }

// forEach
// usuarios.forEach((usuario) => console.log(usuario));

// for of
// for (const usuario of usuarios) {
//     console.log(usuario);
// }

// for in
const usuarios = [
    {
        id: 1,
        nome: "goku",
        raca: "saiyajin",
    },
    {
        id: 2,
        nome: "vegeta",
        raca: "saiyajin",
    },
    {
        id: 3,
        nome: "kuririn",
        raca: "humano",
    },
    {
        id: 4,
        nome: "gohan",
        raca: "saiyajin",
    },
    {
        id: 5,
        nome: "picollo",
        raca: "namekuseijin",
    },
];

// for (const index in usuarios) {
//     console.log(usuarios[index]);
// }

// find (volta o elemento usuario)
// const findUsuario = usuarios.find((usuario) => usuario.id === 2);
// console.log(findUsuario);

// findIndex (volta posição do Array)
// const indexUsuario = usuarios.findIndex((usuario) => usuario.id === 2);
// console.log(indexUsuario);

// filter (volta como array todos que cumprem a condição )
// const arrayUsuario = usuarios.filter((usuario) => usuario.raca === "saiyajin");
// console.log(arrayUsuario);

// reduce
const numeros = [2, 3, 4, 8];

const somaNumeros = numeros.reduce((valorPrev, valorAtual) => {
    console.log(`Valor prévio: ${valorPrev}`);
    console.log(`Valor atual: ${valorAtual}`);
    return valorPrev + valorAtual;
}, 0);
console.log(somaNumeros);
