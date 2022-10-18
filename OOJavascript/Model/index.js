import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User('Fabio', 'F2F.com', '2021-01-01')
console.clear()
console.log(novoUser.exibirInfos())


const novoAdmin = new Admin('Admin Rodrigo', 'a@a.com', '1986-13-04')
console.log(novoAdmin.exibirInfos())
console.log(novoAdmin.nome, novoAdmin.email, novoAdmin.nascimento, novoAdmin.role, novoAdmin.ativo)

novoAdmin.nome = "Coisas diferentes"
novoAdmin.ativo = false

console.log(novoAdmin.exibirInfos())