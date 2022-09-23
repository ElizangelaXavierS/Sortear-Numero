var numeroSorteado = parseInt(Math.random()*11);
var elementoResultado = document.getElementById("resultado");
var tentativas = 3
function Chutar(){
    var chute = parseInt(document.getElementById("valor").value);
    if (tentativas > 0){
        tentativas = tentativas - 1;
    

        if(chute == numeroSorteado){
        elementoResultado.innerHTML = "Acertou";

        }else if (chute > 10 || chute < 0){
        elementoResultado.innerHTML = "Digita números entre 0 e 10";

        }else {
        elementoResultado.innerHTML =  "Errou";
        }
    }else {
        elementoResultado.innerHTML = "Suas tentativas acabaram!"
    }
    }


