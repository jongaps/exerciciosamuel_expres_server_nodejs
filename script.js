//POST GET POST PATCH DELETE

let produtos = [
  { id: 1, nome: 'Teclado', preco: 100 },
  { id: 2, nome: 'Mouse', preco: 50 },
  { id: 3, nome: 'Mousepad', preco: 20 },
  { id: 4, nome: 'Geladeira eletrolux', preco: 2000 },
  { id: 5, nome: 'Shampoo Nathan', preco: 12.99 }
];

import express from "express";
const app = express()

app.listen(3000);

app.get("/", (req, res) => {
    res.send('ola');
});

app.get("/sobre", (req, res) => {
    res.send('informação da empresa')
});

app.get("/cursos", (req, res) => {
    res.send('informação sobre os cursos')
});

app.get("/professores", (req, res) => {
    res.send('informacao dos professores')
});

app.get("/contato", (req, res) => {
    res.send('informações de contato')
});

app.get("/produtos", (req, res) => {
    res.send(produtos)
});

app.get("/produtos/:id", (req, res) => {
    const id = Number(req.params.id);
    res.send(produtos);
});