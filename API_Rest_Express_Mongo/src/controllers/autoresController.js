import livros from "../models/Livro.js";

class AutoresController {
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        });
    }

    static listarAutorPorId = (req, res) => {
        const id = req.params.abobora;

        autores.findById(id, (err, autores) => {
            if(!err) {
                res.status(200).json(autores);
            }
            else {
                res.status(400).send({message: `${err.message} - Autor ${id} não encontrado.`})
            }
        });
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
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