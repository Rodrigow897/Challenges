// 01-Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
function challenge01() {
    window.alert("Hello world!")
}
// 02-Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
function challenge02() {
    var n1 = parseInt(window.prompt("Digite o primeiro número: "));
    if (isNaN(n1) || n1 === null) {
        window.alert("Você não digitou um número!")
        return;
    }
    var n2 = parseInt(window.prompt("Digite o segundo número: "))
    if (isNaN(n2) || n2 === null) {
        window.alert("Você não digitou um número!")
        return;
    }
    window.alert(`O resultado de ${n1} + ${n2} é ${n1 + n2}`);
}

// 03 - Crie um script que declara uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
function challenge03() {
    var num = window.prompt("Digite um numero: ")
    if (isNaN(num) || num === null){
        window.alert("Não é um número!")
    } else {
        window.alert("é um numero!")
    }
}

// 04 - Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
function challenge04() {
    var nome = window.prompt("Digite algo para verificar se 'e uma string: ")

    if(typeof String(nome) === 'string' && !Number(nome)) {
        window.alert("eh uma string!")
    } else {
        window.alert("Nao eh uma string")
    }
}

// 05 - Crie um script que declara uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
function challenge05() {
    var verf = prompt("Digite para verificar booleano!")
    if (verf === "true" || verf === "false" || verf == 0 || verf == 1) {
        window.alert("Eh booleano!")
    } else {
        window.alert("não eh booleano!")
    }
}

// 06 - Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
function challenge06() {
   var n1 = parseInt(window.prompt("Digite um numero: "))
   if(isNaN(n1) || n1 === null){
    window.alert("Você não digitou um número: ")
    return;
   }
   var n2 = parseInt(window.prompt("Digite o segundo numero: "))
    if(isNaN(n2) || n2 === null){
    window.alert("Você não digitou um número: ")
    return;
    }
   window.alert(`o resultado de ${n1} - ${n2} é ${(n1 - n2)}`)
}

// 07 - Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
function challenge07() {
   var n1 = parseInt(window.prompt("Digite um numero: "))
   if(isNaN(n1) || n1 === null) {
    window.alert("Você nào digitou um número!")
    return;
   }
   var n2 = parseInt(window.prompt("Digite o segundo numero: "))
   if(isNaN(n2) || n2 === null) {
    window.alert("Você nào digitou um número!")
    return;
   }

   window.alert(`o resultado de ${n1} * ${n2} é ${(n1 * n2)}`)
}

// 08 - Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
function challenge08() {
   var n1 = parseInt(window.prompt("Digite um numero: "))
   if(isNaN(n1) || n1 === null) {
    window.alert("Você nào digitou um número!")
    return;
   }
   var n2 = parseInt(window.prompt("Digite o segundo numero: "))
   if(isNaN(n2) || n2 === null) {
    window.alert("Você nào digitou um número!")
    return;
   }

   if(n2 === 0) {
    window.alert("Não é possivel dividir por 0")
    return;
   }

   window.alert(`o resultado de ${n1} ÷ ${n2} é ${(n1 / n2)}`)
}

// 09 - Crie um script que declara uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
function challenge09() {
    var num = parseInt(window.prompt("Digite um numero: "))

    if(isNaN(num) || num === null) {
        window.alert("você não digitou um numero: ")
    } else if (num % 2 === 0) {
        window.alert("É um número par")
    } else {
        window.alert("Não é um número par")
    }
}

// 10-  Crie um script que declara uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
function challenge10() {
    var num = parseInt(window.prompt("Digite um numero: "))

    if(isNaN(num) || num === null) {
        window.alert("você não digitou um numero: ")
    } else if (num % 2 != 0) {
        window.alert("É um número impar")
    } else {
        window.alert("Não é um número impar")
    }
}
