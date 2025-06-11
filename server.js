const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const { MercadoPagoConfig, Preference } = require('mercadopago')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname))
app.use(cors())


// Aqui ele anexa a api do mercado livre ao token da sua conta
const client = new MercadoPagoConfig({ 
    accessToken: process.env.ACESS_TOKEN
})

app.get('/', (req, res) => {
    console.log(`\n> Servidor chamado \n`)
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/pagar', async (req, res) => {
    const arrayProdutos = req.body.arrayProdutos
    
    const preference = new Preference(client)

    try {
        const result = await preference.create({
            body: {
                items: arrayProdutos,
                "back_urls": {
                    "success": "localhost:3000/success",
                    "failure": "localhost:3000/failure",
                    "pending": "localhost:3000/pending"
                },
                "auto_return": "approved",
            }
        })
        res.status(200).json({ preferenceId: result.id })

    } catch (err) {
        console.error(`X Erro ao pagar: ${JSON.stringify(err)}`)
        return res.status(500).json({ error: 'Erro ao pagar' })

    }
})

// Back_urls é o endereço que o mercado pago joga o usuario depois de pagar.
// auto_return approved significa que assim que o usuario conseguir pagar, o 
// site automaticamente redireciona ele para o site que tava 


app.listen(3000, () => {
    console.log(`> Servidor rodando na porta 3000`)
})