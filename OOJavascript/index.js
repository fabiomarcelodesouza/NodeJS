import User from "./Model/User.js";
import Docente from "./Model/Docente.js";
import Admin from "./Model/Admin.js";

console.clear()

const novoUser = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01')
console.log(novoUser.exibirInfos('Nome do(a) aminguinho(a)'))

const novoAdmin = new Admin('Rebeca', 'Araujo', 'r@r.com', '2021-01-01')
console.log(novoAdmin.exibirInfos('Nome do(a) aminguinho(a)'))