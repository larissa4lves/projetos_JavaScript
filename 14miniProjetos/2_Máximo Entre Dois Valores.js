//Escreva uma função que usa 2 numeros e retorna o maior entre eles 

let valorMaior = max(5, 9)
console.log(valorMaior);

function max(num1, num2) {
    if (num1 > num2)
        return num1;
    else return num2;
}