import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'Docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovarEstudante = (estudante, curso) => {
        return `Estudante ${estudante} aprovado no curso ${curso}`
    }
}

const docente = new Docente('Docente 1', 'd@d.com', '2021-01-01')
console.log(docente.aprovarEstudante('Estudante mais empenhado', 'JS'))