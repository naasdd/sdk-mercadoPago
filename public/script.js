let listaProdutos = document.getElementById('listaProdutos')
let valorTotalHTML = document.getElementById('valorTotalHTML')
let arrayProdutos = []


function addProduto(){
    let nomeProduto = document.getElementById('nomeProduto').value
    let valorProduto = Number(document.getElementById('valorProduto').value)
    let item = {
        nome: nomeProduto,
        valor: valorProduto
    }
    let somaTotal = 0

    arrayProdutos.push(item)

    let createCard = document.createElement('div')
    createCard.className = 'cardProduto'
    createCard.innerHTML = `<h1>${item.nome}</h1> <p>R$: ${item.valor}</p>`

    listaProdutos.appendChild(createCard)


    arrayProdutos.forEach(element => {
        somaTotal = somaTotal + element.valor
    });

    valorTotalHTML.innerHTML = `R$ ${somaTotal}`
}