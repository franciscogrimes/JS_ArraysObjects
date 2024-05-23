function filtrarAdultos(pessoas) {

    let maiorIdade = pessoas.filter((pessoa) => pessoa.idade > 18)
    let nomes = maiorIdade.map((pessoa) => pessoa.nome)

    return nomes

    }
    
    let pessoas = [
    { nome: 'Alice', idade: 17 },
    { nome: 'Bob', idade: 22 },
    { nome: 'Charlie', idade: 16 },
    { nome: 'David', idade: 19 }
    ];
    console.log(filtrarAdultos(pessoas)); 