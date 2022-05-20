class Pessoa {
    constructor(nome, idade, lindona) {
        this.nome = nome;
        this.idade = idade;
        this.lindona = lindona;
    }
}

const pessoa = new Pessoa("Adriana", 25, true);
const pessoa2 = new Pessoa("Dari", 83, true);

const { nome, idade, lindona } = pessoa;

console.log(pessoa, pessoa2);
