//Criar funcção para mostrar os numeros primos
//Primos
//Compostos

exibirNumerosPrimos(15);

function exibirNumerosPrimos(limites) {
    for (let numero = 2; numero <= limites; numero++) {
        if (NumerosPrimos(numero)) console.log(numero);

    }

    function NumerosPrimos(numero){
        for (let divisor = 2; divisor < numero; divisor++) {
            if(numero % divisor === 0) {
                return false;
                
            }
        }

        return true;
}    }