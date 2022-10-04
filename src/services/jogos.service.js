const Jogos = require('../models/Jogo');


const findJogosService = async () => {
  const jogos = await Jogos.find();
  return jogos;
};
const findJogoByIdService = async (idParam) => {
  const jogo = await Jogos.findById(idParam)
  return jogo;
};
const createJogoService = async (newJogo) => {
  const jogoCriada = await Jogos.create(newJogo)
  return jogoCriada;
};
const updateJogoService = async (id, jogoEdited) => {
  const jogoAtualizada = await Jogos.findByIdAndUpdate(id, jogoEdited);
  return jogoAtualizada;
};
const deleteJogoService = async (id) => {
  return await Jogos.findByIdAndDelete(id);
};
module.exports = {
  findJogosService,
  findJogoByIdService,
  createJogoService,
  updateJogoService,
  deleteJogoService
};
