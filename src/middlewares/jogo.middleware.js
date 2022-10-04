const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const jogo = req.body;
  if (
    !jogo ||
    !jogo.titulo ||
    !jogo.descricao ||
    !jogo.foto ||
    !jogo.preco ||
    !jogo.genero ||
    !jogo.descricao
  ) {
    return res
      .status(400)
      .send({ message: 'Envie o todos os campos do jogo!' });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
