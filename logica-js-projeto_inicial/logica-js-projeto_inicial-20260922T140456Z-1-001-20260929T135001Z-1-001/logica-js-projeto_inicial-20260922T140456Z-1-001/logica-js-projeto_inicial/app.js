alert('Bem vindo ao jogo secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 0;

while(chute != numeroSecreto){
    chute = prompt(`Digite um número de 1 a ${numeroMaximo}`);

if(chute == numeroSecreto){
    break;
    alert(`Voce acertou! O numero secreto é ${numeroSecreto} com total de ${tentativas} tentativas`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
            } else {
                alert(`O numero secreto é maior que ${chute}`);
            }
        }
        tentativas++;
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
alert(`Voce acertou! O numero secreto é ${numeroSecreto} com total de ${tentativas} ${palavraTentativa}`);
//let palavraTentativa;
//if (tentativas > 1){
  // alert(`Voce acertou! O numero secreto é ${numeroSecreto} com total de ${tentativas} tentativas`);
//}else{
 //   alert(`Voce acertou! O numero secreto é ${numeroSecreto} com total de ${tentativas} tentativa`);
//}
