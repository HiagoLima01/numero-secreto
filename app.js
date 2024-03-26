let num = 29;
let chute

while(chute != num){
    chute = prompt("Escolha um número entre 1 e 10")
    
    if (num == chute){
        alert(`Parabéns você acertou o número secreto: ${num}`)
    }else{
        if(num>chute){
            alert(`O número secreto é menor que ${chute}`);
        }
        else{
            alert(`O número secreto é maior que ${chute}`);
        }
    }
}
