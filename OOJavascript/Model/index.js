import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User('Fabio', 'F2F.com', '2021-01-01')
console.clear()
console.log(novoUser.exibirInfos())
