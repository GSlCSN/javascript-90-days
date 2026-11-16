// Exercício 1 — for

for (let num = 0; num <= 10; num++) {
    console.log(num);
}

console.log("")

// Exercício 2 — while

let num1 = 10;

while (num1 >= 0) {
    console.log(num1);
    num1--;
}

console.log("")

// Exercício 3 — Desafio

let num2 = Number(prompt("Qual número você quer ver a soma de 2 em dois: "));

for (let numero = 0; numero <= num2; numero += 2){
    if (numero % 2 === 0){
        console.log(numero);
    }; 
}

