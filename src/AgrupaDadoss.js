function agruparPorCategoria(produtos) {
  let resultado = {};

  produtos.forEach((produto) => {
    let categoria = produto.categoria;
    let preco = produto.preco;

    if (!resultado[categoria]) {
      resultado[categoria] = 0;
    }

    resultado[categoria] += preco;
  });
  return resultado;
}

let produtos = [
  { categoria: "eletrônicos", preco: 99.99 },
  { categoria: "livros", preco: 19.99 },
  { categoria: "eletrônicos", preco: 199.99 },
  { categoria: "livros", preco: 29.99 },
  { categoria: "roupas", preco: 49.99 },
];
console.log(agruparPorCategoria(produtos));
