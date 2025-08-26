const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let centrosApoio = [
  {
    nome: "Casa da Mulher Brasileira",
    cidade: "Campo Grande",
    telefone: "(67) 3314-4000",
    horario: "08h às 18h"
  }
];

app.post('/centros', (req, res) => {
  const novoCentro = req.body;

  if (!novoCentro.nome || !novoCentro.cidade || !novoCentro.telefone || !novoCentro.horario) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios." });
  }

  centrosApoio.push(novoCentro);
  res.status(201).json({ mensagem: "Centro de apoio cadastrado com sucesso!", centro: novoCentro });
});

app.get('/centros', (req, res) => {
  res.json(centrosApoio);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
