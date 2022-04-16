const somar = (numeroA, numeroB) => numeroA + numeroB;
const subtrair = (numeroA, numeroB) => numeroA - numeroB;
const multiplicar = (numeroA, numeroB) => numeroA * numeroB;
const dividir = (numeroA, numeroB) => numeroA / numeroB;

const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);

console.log(calculadora(10, 5, somar));
