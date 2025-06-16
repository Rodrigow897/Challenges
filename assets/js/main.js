// 01-Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
function challenge01() {
    window.alert("Hello world!")
}
// 02-Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
function challenge02() {
   var n1 = parseInt(window.prompt("Digite um numero: "))
   var n2 = parseInt(window.prompt("Digite o segundo numero: "))

   window.alert(`o resultado de ${n1} + ${n2} é ${(n1 + n2)}`)
}

// 03 - Crie um script que declara uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
function challenge03() {
    var num = window.prompt("Digite um numero: ")
    if (isNaN(num)) {
        window.alert("Não é um numero!")
    } else {
        window.alert("é um numero!")
    }
}

// 04 - Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
function challenge04() {
    var nome = window.prompt("Digite um nome: ")
    if (isNaN(nome)) {
        window.alert("é uma string!")
    } else {
        window.alert("não é uma string!")
    }
}


// 05 - Crie um script que declara uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".


// 06 - Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.


// 07 - Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.


// 08 - Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.


// 09 - Crie um script que declara uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".


// 10-  Crie um script que declara uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

