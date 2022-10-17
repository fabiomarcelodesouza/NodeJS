// function User(nome, email){
//     this.nome = nome;
//     this.email = email;

//     this.exibirInfos = () => {
//         return `${this.nome}, ${this.email}`
//     }
// }

// const novoUser = new User('fabio', 'f@f.com')
// console.log(novoUser.exibirInfos())

// function Admin(role){
//     User.call(this, 'Juliana', 'j@j.com')

//     this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)
// const novoAdmin = new Admin('admin')
// novoAdmin.nome = 'Fabio'
// console.log(novoAdmin.exibirInfos())
// console.log(novoAdmin.role)

const user = {
    init: (nome, email) => {
        this.nome = nome,
        this.email = email
    },

    exibirInfos: (nome) => { return this.nome }
}

const novoUser = Object.create(user)
novoUser.init('robertao', 'r@r.com')
console.log(novoUser.exibirInfos())

// console.log(novoUser.exibirInfos('fabio'))
// console.log(user.isPrototypeOf(novoUser))

