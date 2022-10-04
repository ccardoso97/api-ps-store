require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./src/routes/jogos.route');
const connectToDatabase = require('./src/database/database');
const port = process.env.PORT || 3001;

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/jogos', router);

app.get('/jogos/all-jogos', (req, res) => {
  res.send(jogos);
});

app.get('/jogos/one-jogo/:id', (req, res) => {
  const idParam = req.params.id;
  const chosenJogo = jogos.find((jogo) => jogo.id == idParam);
  res.send(chosenJogo);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
