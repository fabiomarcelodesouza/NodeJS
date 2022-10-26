const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController.js')

const router = Router()

router.get('/pessoas', PessoaController.consultarTodas)
router.get('/pessoas/:id', PessoaController.consultarPessoa)
router.post('/pessoas', PessoaController.criarPessoa)

module.exports = router