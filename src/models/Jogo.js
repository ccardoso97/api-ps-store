const mongooose = require('mongoose');

const JogoSchema = new mongooose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  foto: { type: String, required: true },
  preco: { type: Number, required: true },
  genero: { type: String, required: true },
  disribuidora: { type: String, required: true },
});
const Jogo = mongooose.model('jogos', JogoSchema);

module.exports = Jogo;
