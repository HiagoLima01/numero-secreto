let dificuldade = 100;
let num = parseInt((Math.random() * dificuldade)+1);
let chute;
let tentativas = 1;

while(chute != num){
    chute = prompt(`Escolha um número entre 1 e ${dificuldade}`)
    if (num === chute){

        break
    }else{
        if(num>chute){
            alert(`O número secreto é menor que ${chute}`);
        }
        else{
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas += 1
    }

}

let palavraTentativa = tentativas > 1 ? "Tentativas" : "tentativa";
alert(`Parabéns você acertou o número secreto: ${num} com ${tentativas} ${palavraTentativa}`)


