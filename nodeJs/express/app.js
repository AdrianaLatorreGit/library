const express = require("express");
const app = express();
let contato1 = "Maria";
let contato2 = "Joana";
let contato3 = "Vanessa";
app.get("/", (req, res) => res.send("Olá, mundo"));
app.get("/contato", (req, res) => res.send([contato1, contato2, contato3]));
app.listen(3033, () => {
  console.log("Servidor rodando");
});



const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Retornando tela HOME');
});
app.listen(3330, () => {
  console.log('Iniciando servidor');
});
