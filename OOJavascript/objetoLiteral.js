const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

// user.exibirInfos('Infos do usuario:');
// const exibir = user.exibirInfos.bind(user);
// exibir('Infos do usuario:');

const admin = {
    nome: "Mariana",
    email: "m@m.com",
    role: "admin",
    criarCurso(){
        console.log("Curso criado com sucesso!")
    }
}

admin.nome = "Fabio";

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();

admin.__proto__;
