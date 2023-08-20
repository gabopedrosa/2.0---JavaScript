function showNumber1() {
    var resposta = document.getElementById('resposta-1').value
    if(resposta % 2 == 0){
        document.getElementById('resultado-1').innerHTML = `O número "${resposta}" que você inseriu é par`
    }else{
        document.getElementById('resultado-1').innerHTML = `O número "${resposta}" que você inseriu é impar`
    }
}

function showNumber2(resposta1,resposta2){
    var resposta1 = document.getElementById('resposta-2.1').value;
    var resposta2 = document.getElementById('resposta-2.2').value;

    if(resposta1 > resposta2) {
        document.getElementById('resultado-2.1').innerHTML = `1º:  ${resposta1} <br> 2º:  ${resposta2}`
        document.getElementById('resultado-2.2').innerHTML = `O 1º número é maior que o 2º número.`
    }
    else if(resposta1 == resposta2){
        document.getElementById('resultado-2.1').innerHTML = `Número 1 e 2 foram iguais, troque os valores.`
    }
    else {
        document.getElementById('resultado-2.1').innerHTML = `1º:  ${resposta1} <br> 2º:  ${resposta2}`
        document.getElementById('resultado-2.2').innerHTML = `O 2º número é maior que o 1º número.`
    }
}
    
function showNumber3(dataNascimento) {
    var dataNascimento = new Date(document.getElementById("resposta-3").value);
    var anoNascimento = dataNascimento.getFullYear()
    var anoAtual = new Date().getFullYear()
    var idade = anoAtual - anoNascimento

    if(idade >= 16) {
        document.getElementById('resultado-3').innerHTML = `Você já está apto a votar.  <br/>
        Você tem ${idade} anos.`

    }
    else if(isNaN(dataNascimento)){
        document.getElementById('resultado-3').innerHTML = `Data inválida, escolha alguma data.`
    }
    else {
        document.getElementById('resultado-3').innerHTML = `Você não pode votar esse ano.`
    }
}

function showNumber4(){
    var salarioAtual = parseFloat(document.getElementById('resposta-4-salario').value)
    var percentualReajuste = parseFloat(document.getElementById('resposta-4-reajuste').value)

    var reajuste = (salarioAtual * percentualReajuste) / 100 
    var novoSalario = salarioAtual + reajuste;

    if (isNaN(salarioAtual)) {
        document.getElementById('resultado-4').innerHTML = `Cálculo inválido, insira um número.`
    } else {
        document.getElementById('resultado-4').innerHTML = `
        Seu salário bruto: ${salarioAtual}  <br/>
        Seu reajuste: ${reajuste}   <br/>
        Seu salário total: ${novoSalario}`
    }
}

function showNumber5() {
    var numero = parseInt(document.getElementById('resposta-5').value) 

    if(numero == 1) {
        document.getElementById('resultado-5').innerHTML = `${numero} equivale a Domingo`
    }
    else if(numero == 2){
        document.getElementById('resultado-5').innerHTML = `${numero} equivale a Segunda`
    }
    else if(numero == 3){
        document.getElementById('resultado-5').innerHTML = `${numero} equivale a Terça`
    }
    else if(numero == 4){
        document.getElementById('resultado-5').innerHTML = `${numero} equivale a Quarta`
    }
    else if(numero == 5){
        document.getElementById('resultado-5').innerHTML = `${numero} equivale a Quinta`
    }
    else if(numero == 6){
        document.getElementById('resultado-5').innerHTML = `${numero} equivale a Sexta`
    }
    else if(numero == 7){
        document.getElementById('resultado-5').innerHTML = `${numero} equivale a Sábado`
    }
    else{
        if(numero < 1){
            document.getElementById('resultado-5').innerHTML = `Insira um número maior que 0.`
            alert('erro')
        }
        else if(numero > 7){
            document.getElementById('resultado-5').innerHTML = `Insira um número de 1 a 7.`
            alert('erro')
        }  
    }
}

function showNumber6() {
    var numero = parseInt(document.getElementById('resposta-6').value)
    const resultado = document.getElementById("resultado-6");
    resultado.innerHTML = "";

    for (let i = 1; i <= numero; i++) {
        resultado.innerHTML += i + "<br>"
    }
}

function showNumber7() {
    var numero = parseInt(document.getElementById('resposta-7').value)
    var soma = 0;

    if (isNaN(numero) || numero <= 0) {
        document.getElementById("resultado-7").innerHTML = `número inteiro positivo inválido.`;
        return;
    }
    
    for (let i = 1; i < numero; i++) {
        soma += i;
    }
    document.getElementById("resultado-7").innerHTML = `A soma de todos os números menores que ${numero} é ${soma}.`;
}

function showNumber8(){
    var numero = parseInt(document.getElementById('resposta-8').value)
    var impar = [];
    
    for (var i = 1; i <= numero; i += 2){
        impar.push(i);
    }
    document.getElementById("resultado-8").innerHTML = `Números ímpares até ${numero}: <br/>${impar.join(", ")}`;
}

function showNumber9(){
        var numero = document.getElementById('resposta-9').value;
        var numeroArray = numero.split("-").map(Number);
        
        var soma = 0;
        for (var i = 0; i < numeroArray.length; i++){
            if  (numeroArray[i] < 30) {
                soma += numeroArray[i];
            }
        }
        document.getElementById('resultado-9').innerHTML = `A soma dos números menores que 30 é: ${soma}`;
}


function showNumber10() {
        var numero = document.getElementById('resposta-10').value;
        var numeroArray = numero.split("/").map(Number);

        var cont = 0;
        var num = 0;
        for (var i = 0; i < numeroArray.length; i++) {
            if (numeroArray[i] > 50) {
                num = numero;
                cont++; 
            }
        }
        document.getElementById('resultado-10').innerHTML = `Qtd de valores maior que 50: ${cont}<br/> Números inseridos: ${numero}`;
    }

function showNumber11() {
    var numero = document.getElementById('resposta-11').value;
    var valorInverso = "";

    for (var i = numero.length - 1; i >= 0; i--) {
        valorInverso += numero[i];
    }
    document.getElementById("resultado-11").innerHTML = `Valor invertido: ${valorInverso}`;
}

function showNumber12() {
    var string = document.getElementById('resposta-12').value;

    if (string.length > 0){
        var primeira = string.charAt(0).toUpperCase();
        var ultima = string.charAt(string.length - 1).toUpperCase();
        var resultado = primeira + string.slice(1, -1) + ultima;
        document.getElementById('resultado-12').innerHTML = `Resposta: ${resultado}`;
    } else {
        document.getElementById('resultado-12').innerHTML = `String invalidada`;
    }
}

function transformarMinusculas() {
    var inputElement = document.getElementById('resposta-12');
    inputElement.value = inputElement.value.toLowerCase();
}