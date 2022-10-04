const express = require('express');
const cors = require('cors');
const port = 3001;
const app = express();
const router = require('./src/routes/jogos.route');
const connectToDatabase = require('./src/database/database');

connectToDatabase();
app.use(express.json());
app.use(cors());
app.use('/jogos', router);

app.get('/jogos/find-jogos', (req, res) => {
  res.send(jogos);
});

app.get('/jogos/find-jogo/:id', (req, res) => {
  const idParam = req.params.id;
  const chosenJogo = jogos.find((jogo) => jogo.id == idParam);
  res.send(chosenJogo);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
