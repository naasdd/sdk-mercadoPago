let listaProdutos = document.getElementById('listaProdutos')
let valorTotalHTML = document.getElementById('valorTotalHTML')
let arrayProdutos = []


function addProduto() {
    let nomeProduto = document.getElementById('nomeProduto').value
    let valorProduto = Number(document.getElementById('valorProduto').value)
    let item = {
        title: nomeProduto,
        quantity: 1,
        unit_price: valorProduto
    }
    let somaTotal = 0

    arrayProdutos.push(item)

    let createCard = document.createElement('div')
    createCard.className = 'cardProduto'
    createCard.innerHTML = `<h1>${item.title}</h1> <p>R$: ${item.unit_price}</p>`

    listaProdutos.appendChild(createCard)


    arrayProdutos.forEach(element => {
        somaTotal = somaTotal + element.unit_price
    });

    valorTotalHTML.innerHTML = `R$ ${somaTotal}`
}

function puxarCompra() {
    console.log(`[DEBBUG] arrayProdutos = ${arrayProdutos}`)
    fetch('/pagar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ arrayProdutos })
    })
        .then(response => response.json())
        .then(dados => {
            console.log(dados)
            renderWalletBrick(dados.preferenceId)
        })
}


// Isso aqui o propio mercado pago disponibiliza para você 

const publicKey = "TEST-31e780f4-1dfe-4e16-a2e0-e25f44005660"
  const mp = new MercadoPago(publicKey)
  const bricksBuilder = mp.bricks()

  async function renderWalletBrick(preferenceId) {
    await bricksBuilder.create("wallet", "walletBrick_container", {
      initialization: {
        preferenceId: preferenceId,
      },
      callbacks: {
        onReady: () => console.log("Brick pronto"),
        onError: (error) => console.error(error),
      },
    })
  }