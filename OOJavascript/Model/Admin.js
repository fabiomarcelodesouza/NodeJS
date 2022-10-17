import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = 'Admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso = (nomeDoCurso, vagas) => {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}

const novoAdmin = new Admin('admin', 'a@a.cpm', '2021-01-01')
console.log(novoAdmin)
console.log(novoAdmin.exibirInfos(0))
console.log(novoAdmin.criarCurso('OO com JS', 666));