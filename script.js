var numeroSorteado = parseInt(Math.random()*11);
var elementoResultado = document.getElementById("resultado");
function Chutar(){
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);
    if(chute == numeroSorteado){
        elementoResultado.innerHTML = "Acertou";

    }else if (chute > 10 || chute < 0){
        elementoResultado.innerHTML = "Digita números entre 0 e 10";

    }else {
        elementoResultado.innerHTML =  "Errou";
    }

}


