// Sistema de Gerenciamento de Produtos

const produtos = [
    { nome: "Mouse Gamer", preco: 85 },
    { nome: "Teclado Mecânico", preco: 180 },
    { nome: "Monitor 24 polegadas", preco: 750 },
    { nome: "Headset Gamer", preco: 95 },
    { nome: "Webcam Full HD", preco: 130 }
];

console.log(produtos);

const filtroAbaixoDe100 = produtos.filter( (produto) => {
    return produto.preco < 100;
});

console.log(filtroAbaixoDe100);

const nomesProdutos = produtos.map( (produto) =>{
    return produto.nome;
});

console.log(nomesProdutos);

const produtoEspecifico = produtos.find( (produto) => {
    return produto.nome === "Monitor 24 polegadas";
});

console.log(produtoEspecifico);

const quantidadeProdutos = produtos.length;

console.log(quantidadeProdutos);