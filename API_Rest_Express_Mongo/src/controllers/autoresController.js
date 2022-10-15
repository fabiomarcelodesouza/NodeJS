import autores from "../models/Autor.js";

class AutorController {
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
                res.status(500).send({message: `${err.message} - falha ao cadastrar o autor`});
            }
            else {
                res.status(201).send(autor.toJSON());
            }
        });
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: `Autor ${id} atualizado com sucesso.`});
            }
            else {
                res.status(500).send({message: `${err.message} - falha ao atualizar o autor ${id}.`})
            }
        });
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: `Autor ${id} excluido com sucesso.`});
            }
            else {
                res.status(500).send({message: `${err.message} - falha ao excluir o autor ${id}.`})
            }
        });
    }
}


export default AutorController;