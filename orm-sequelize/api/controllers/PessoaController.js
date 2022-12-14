const database = require('../models')

 class PessoaController {
    static async consultarTodas(req, res) {
        try {
            const pessoas = await database.Pessoas.findAll()
            return res.status(200).json(pessoas)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async consultarPessoa(req, res) {
        const { id } = req.params
        try {
            const pessoa = await database.Pessoas.findOne( { where: { id: Number(id) } } )
            return res.status(200).json(pessoa)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criarPessoa(req, res) {
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(201).json(novaPessoaCriada)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizarPessoa(req, res) {        
        const novasInfos = req.body
        const { id } = req.params

        try {
            await database.Pessoas.update(novasInfos, { where: { id: Number(id) } })
            return res.status(200).json(await database.Pessoas.findOne( { where: { id: Number(id) } } ))
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletarPessoa(req, res) {                
        const { id } = req.params

        try {
            await database.Pessoas.destroy({ where: { id: Number(id) } })
            return res.status(200).json({"mensagem":`Id ${id} Excluido com sucesso!`})
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController