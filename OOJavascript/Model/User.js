export default class User {
    #nome
    #sobrenome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
        this.#nome = nome,
        this.#sobrenome = sobrenome,
        this.#email = email,
        this.#nascimento = nascimento,
        this.#role = role || 'estudante',
        this.#ativo = ativo
    }

    get nome() {
        return `${this.#nome} ${this.#sobrenome}`
    }
     
    get sobrenome() {
        return this.#sobrenome
    }

    set nome(novoNome) {
        if (novoNome === '') {
            throw new Error('Nome não pode ser vazio')
        }

        let [nome, ...sobrenome] = novoNome.split(" ")
        sobrenome = sobrenome.join(' ')

        this.#nome = nome
        this.#sobrenome = sobrenome
    }    

    get email() {
        return this.#email
    }
    set email(email) {
        this.#email = email;
    }

    get nascimento() {
        return this.#nascimento
    }
    set nascimento(nascimento) {
        this.#nascimento = nascimento;
    }

    get role() {
        return this.#role
    }
    set role(role) {
        this.#role = role;
    }
     
    get ativo() {
        return this.#ativo
    }    
    set ativo(ativo) {
        this.#ativo = ativo;
    }    
    
    exibirInfos(label) {        
        return `${label}: ${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
    }
}