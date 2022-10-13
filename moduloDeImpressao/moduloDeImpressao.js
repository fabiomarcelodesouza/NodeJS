class ModuloDeImpressao {
    constructor() {
        this._codigo = 10;
    }
    imprime(nomes) {
        nomes.forEach(function(nome) {
        console.log(`${this._codigo}: ${nome}`);
     }.bind(this));
   }
}

module.exports = ModuloDeImpressao;