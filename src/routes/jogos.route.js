const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const express = require('express');
const router = express.Router();
const jogosController = require ('../controllers/jogos.controller')
const { validId, validObjectBody } = require ('../middlewares/jogo.middleware')

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));
router.get('/all-jogos', jogosController.findJogosController);
router.get('/one-jogo/:id', validId, jogosController.findJogoByIdController);
router.post('/create-jogo', validObjectBody, jogosController.createJogoController);
router.put('/update-jogo/:id', validId, validObjectBody, jogosController.updateJogoController);
router.delete('/delete-jogo/:id', validId, jogosController.deleteJogoController);

module.exports = router;
