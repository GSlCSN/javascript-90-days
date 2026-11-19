// Exemplos 1

const frutas = ["Abacate", "Banana", "Mexirica", "Amora", "Jabuticaba"];

console.log(frutas);

console.log(frutas[0]);

console.log(frutas[2]);

const frutasLenght = frutas.length;

console.log(frutasLenght);

console.log(frutas[frutasLenght - 1]);

// Manipulação de Arrays

const jogos = ["COD", "Fortnite", "MLBB"];

jogos.push("Brawlhalla");

jogos.pop();

jogos.unshift("Roblox");

jogos.shift();

console.log(jogos);

// Percorrer Arrays com for

const jogos2 = ["COD", "Fortnite", "MLBB", "Need for Speed", "Clash Royale"];

for (let i = 0; i < jogos2.length; i++) {
    console.log(`O jogo ${jogos2[i]} está no índice ${i}`);
}

// Investigando a lista

let jogos2Includes = jogos2.includes("Fortnite");

console.log(jogos2Includes);

let jogos2IndexOf = jogos2.indexOf("Need for Speed");

console.log(jogos2IndexOf);

let jogos2Includes2 = jogos2.includes("GTA VI");

console.log(jogos2Includes2);

let jogos2LastIndexOf = jogos2.lastIndexOf("GTA VI");

console.log(jogos2LastIndexOf);

// Método map()

const precos = [10, 25, 50, 100, 200];

const precosDobrados = precos.map((numeros) => {
    return numeros * 2;
})

console.log(precos);

console.log(precosDobrados);

const nomes = ["claudio", "pedro", "mariana", "isabela"];

const nomesMaiusculos = nomes.map( (nomes) => {
    return nomes.toUpperCase();
})

console.log(nomes);
console.log(nomesMaiusculos);

// Método filter()

const numeros = [5, 12, 8, 20, 3, 15, 30, 7];

const numerosFiltrados = numeros.filter( (numero) => {
    return numero > 10;
});

console.log(numeros);

console.log(numerosFiltrados);

// Metodo find()

const produtos = [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 120 },
    { nome: "Monitor", preco: 900 },
    { nome: "Headset", preco: 200 }
];

const produto = produtos.find((item) => {
    return item.preco > 100;
});

console.log(produto);

// Desafio: catálogo de produtos

const produtos2 = [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 120 },
    { nome: "Monitor", preco: 900 },
    { nome: "Headset", preco: 200 },
    { nome: "Webcam", preco: 150 }
];

const maior100 = produtos2.filter( (produto) => {
    return produto.preco > 100;
});

console.log(maior100);

const produtosMais100 = maior100.map( (produto) => {
    return produto.nome; 
})

console.log(produtosMais100);

const preco500 = maior100.find( (produto) => {
    return produto.preco > 500;
});

console.log(preco500);