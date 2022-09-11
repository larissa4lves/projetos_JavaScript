const celular = {
    marcaCelular: 'Apple',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    capaidadeBateria: 5000,
    ligar: function () {
        console.log("Fazendo liganção...")
    }
}
//Função de fabrica
function criarCelular(marcaCelular, tamanhoTela, capaidadeBateria) {
    return {
        marcaCelular: 'Apple',
        tamanhoTela,
        capaidadeBateria,
        ligar() {
            console.log("Fazendo ligação ...")
        }

    }
}
const celular1 = criarCelular('Zenfone', 5.5, 5000);
console.log(celular1);
