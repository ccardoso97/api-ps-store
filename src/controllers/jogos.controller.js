const jogosService = require('../services/jogos.service');
const mongooose = require('mongoose');

const findJogosController = async (req, res) => {
  const allJogos = await jogosService.findJogosService();
  if (allJogos.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhuma jogo cadastrado!' });
  }
  res.send(allJogos);
};

const findJogoByIdController = async (req, res) => {
  const idParam = req.params.id;
  if (!mongooose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'ID não informado!' });
  }

  const chosenJogo = await jogosService.findJogoByIdService(idParam);

  if (!chosenJogo) {
    return res.status(404).send({ message: 'Jogo não encontrado!' });
  }

  res.send(chosenJogo);
};

const createJogoController = async (req, res) => {
  const jogo = req.body;
  const newJogo = await jogosService.createJogoService(jogo);
  res.status(201).send(newJogo);
};

const updateJogoController = async (req, res) => {
  const idParam = req.params.id;
  const jogoEdit = req.body;
  const updatedJogo = await jogosService.updateJogoService(idParam, jogoEdit);
  res.send(updatedJogo);
};

const deleteJogoController = async (req, res) => {
  const idParam = req.params.id;
  await jogosService.deleteJogoService(idParam);
  res.send({ message: 'Jogo deletado com sucesso!' });
};

module.exports = {
  findJogosController,
  findJogoByIdController,
  createJogoController,
  updateJogoController,
  deleteJogoController,
};
