// Exercicio 1

const nome = prompt("Qual e seu nome?: ");
const idade = Number(prompt("Qual e a sua idade?: "));

if (idade >= 18) {
    console.log(`Ola, ${nome} você e maior de idade`);
} else {
    console.log(`Ola, ${nome} você e menor de idade`)
}

// Exercicio 2 

let num1 = parseInt(prompt("Qual e o primeiro número para o calculo?: "));
let num2 = parseInt(prompt("Qual e o segundo número para o calculo?: "));
let operacao = prompt("Qual operação quer fazer? (+ - * /): ");

if (operacao == "+") {
    console.log(`A soma entre ${num1} e ${num2} é: ${num1 + num2}`);
} else if (operacao == "-") {
    console.log(`A Subtração entre ${num1} e ${num2} é: ${num1 - num2}`);
} else if (operacao == "/"){
    if (num2 > 0) {
        console.log(`A divisão entre ${num1} e ${num2} é: ${num1 / num2}`);
    } else {
        console.log("Não e possivel dividir um número por 0");
    }
} else if (operacao == "*") {
    console.log(`A multiplicação entre ${num1} e ${num2} é: ${num1 * num2}`);
} else {
    console.log("Informe somente números");
}

// Exercicio 3

let imparOuPar = Number(prompt("Informe um número para saber se e par ou impar: "))

if (imparOuPar % 2 == 0) {
    console.log(`O número ${imparOuPar} é: Par`);
} else {
    console.log(`O número ${imparOuPar} é: Impar`);
}

// Exercicio 4

let maior = Number(prompt("Digite o 1° número: "));

for (let limite = 2; limite <= 5; limite++) {
    let numero = Number(prompt(`Fale o ${limite}° número: `))
    if (numero > maior) {
        maior = numero
    }
}

console.log(`O maior número foi o: ${maior}`)

// Exercicio 5

let tabuada = Number(prompt("Digite o número quer você quer ver a tabuada: "))

for (let numero = 1; numero <= 10; numero++) {
    console.log(`${tabuada} x ${numero}: ${tabuada * numero}`)
}