import livros from "../models/Livro.js";

class LivroController {
    static listarLivros = (req, res) => {
        livros.find()
            .populate('autor')
            .exec((err, livros) => {
                res.status(200).json(livros);
            });
    }

    static listarLivroPorId = (req, res) => {
        const id = req.params.abobora;

        livros.findById(id)
            .populate('autor', 'nome')
            .exec((err, livros) => {
                if(!err) {
                    res.status(200).json(livros);
                }
                else {
                    res.status(400).send({message: `${err.message} - Livro ${id} não encontrado.`})
                }
        });
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar o livro`});
            }
            else {
                res.status(201).send(livro.toJSON());
            }
        });
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: `Livro ${id} atualizado com sucesso.`});
            }
            else {
                res.status(500).send({message: `${err.message} - falha ao atualizar o livro ${id}.`})
            }
        });
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: `Livro ${id} excluido com sucesso.`});
            }
            else {
                res.status(500).send({message: `${err.message} - falha ao excluir o livro ${id}.`})
            }
        });
    }
}


export default LivroController;