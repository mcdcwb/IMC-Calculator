var peso;
var altura;
var imc;
var resultado;


function calcular(event){
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura * altura);

    resultado = document.getElementById('resultado');
    
    if(imc < 17){
        resultado.innerHTML = "Seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado! Você está muito abaixo do peso!";
    }else if(imc > 17 && imc <= 18.49){
        resultado.innerHTML = "Seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado! Você está abaixo do peso!";
    }else if(imc >= 18.5 && imc < 24.99){
        resultado.innerHTML = "Seu resultado foi: " + imc.toFixed(2) + "<br/> Parabéns! Você está no peso ideal!";
    }else if(imc > 25 && imc <= 29.99){
        resultado.innerHTML = "Seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado! Você está acima do peso!";
    }else if(imc >= 30){
        resultado.innerHTML = "Seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado! Você está na obesidade!";
    }

    document.getElementById('peso').value = "";
    document.getElementById('altura').value = "";
}
