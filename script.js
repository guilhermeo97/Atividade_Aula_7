let saida = document.getElementById("saida")
let htmlNumero = document.getElementById("numero")
let htmlExpoente = document.getElementById("expoente")
let numero = 2;
let expoente = -3;
let resultado = "";

function potencia(numero, expoente) {
    if(numero == 0 && expoente == 0) {
        return "Não definido";
    }
    if(numero != 0 && expoente == 0) {
        return 1;
    }
    return numero ** expoente
    
}
htmlNumero.innerHTML = numero;
htmlExpoente.innerHTML = expoente; 
saida.innerHTML = potencia(numero, expoente)

/*    switch(resultado) {
        case numero != 0 && expoente == 0:
            console.log(1);
            break;
        case numero && expoente == 0:
            console.log(0);
            break;
         default:
            resultado = numero ** expoente;
            break;
    }
alert(resultado)
//alert(potencia(0, 0))
    
    /*if(numero && expoente === 0) {
        return 0;
    }
    if(expoente === 0) {
        return 1;
    }
    let resultado = numero
    for(let i = 0; i < expoente; i++) {
        resultado *= numero;
    }
    return resultado;
}

alert(potencia(0,0));*/