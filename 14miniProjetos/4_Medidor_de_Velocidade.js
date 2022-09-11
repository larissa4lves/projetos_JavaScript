//(Mini-Projeto 4) - Medidor de Velocidade
// Velocidade maxima de 70 km
//a cada 5km acima do limite você ganha 1 ponto 

verificarVelocidade(130);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const KmPorPonto=5;
    if (velocidade <= 70)
        console.log('Ok');
    else{
        const pontos = Math.floor((velocidade - 70 ) / 5);
        if(pontos >= 12)
            console.log('carteira suapensa');
        else
            console.log('Pontoa',pontos);    
    }
}