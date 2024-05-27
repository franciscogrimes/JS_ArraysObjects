function calcularProduto(numeros) {
  const valorInicial = 1;

  const produtoValores = numeros.reduce(
    (numero, produto) => numero * produto,
    valorInicial
  );
  console.log(produtoValores);
}

let numeros = [1, 2, 3, 4, 5];
console.log(calcularProduto(numeros)); // 120
