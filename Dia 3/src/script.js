// Exercicio 1
console.log("Exercicio 1 👇")

const aluno = {
    nome: "Claudio",
    curso: "Front-End PROA",
    matriculado: true
};

const estaMatriculado = "matriculado";

console.log(aluno.nome);
console.log(aluno.curso);

console.log(aluno[estaMatriculado]);

console.log("")
console.log("Exercicio 2 👇")

// Exercicio 2

const aluno2 = {
    nome: "Aluno2",
    curso: "Design",
};

aluno2.curso = "ADS";
aluno2.ativo = true;
delete aluno2.nome;

console.log(aluno2)

console.log("")
console.log("Exercicio 3 👇")

// Exercicio 3

const produto = {
    nome: "Teclado",
    valor: 120,
    descrever: function () {
        return `O ${this.nome} está pelo preço de ${this.valor}`;
    }
};

console.log(produto.descrever());

console.log("")
console.log("Exercicio 4 👇")

// Exercicio 4

let porcentagemDesconto = Number(prompt("Digite a porcentagem de desconto para o produto de 120 reais"));

produto.descontarDesconto = function (desconto) {
    
    let valorDesconto = this.valor * desconto / 100;
    let valorDescontado = this.valor - valorDesconto;
    this.valor = valorDescontado;

    return `Preço após o desconto é: ${this.valor}`
    
}

console.log(produto.descontarDesconto(porcentagemDesconto));
console.log(produto);

console.log("")
console.log("Exercicio 5 👇")

// Exercicio 5

console.log(Object.keys(aluno2));
console.log(Object.values(aluno2));
console.log(Object.entries(aluno2));

const pares = Object.entries(produto);

for (let p = 0; p < pares.length; p++) {
    console.log(`${pares[p][0]}: ${pares[p][1]}`)
};

console.log("")
console.log("Exercicio 6 👇")

// Exercicio 6

const produtos = [
    { nome: "Mouse", preco: 85 },
    { nome: "Teclado", preco: 180 },
    { nome: "Headset", preco: 95 }
];

for (let p = 0; p < produtos.length; p++) {
    if (produtos[p].preco < 100) {
        console.log(produtos[p].nome)
    }
};

console.log("")
console.log("Exercicio 7 👇")

// Exercicio 7

const livro = {
    nome: "A arte da guerra",
    autor: "Sun Tzu"
};

const keys = Object.keys(livro);

console.log(keys);

for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
};

console.log("")
console.log("Exercicio 8 👇")

// Exercicio 8 

const values = Object.values(livro);

for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
};
