const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const { MercadoPagoConfig, Preference } = require('mercadopago')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname))
app.use(cors())

const client = new MercadoPagoConfig({
    accessToken: process.env.ACESS_TOKEN
})

app.get('/', (req, res) => {
    console.log(`\n> Servidor chamado \n`)
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/pagar', (req, res) => {
    // const valorTotal = req.body.valorTotal
    const arrayProdutos = req.body.arrayProdutos
    
    const preference = new Preference(client)
    
    res.status(200).json(arrayProdutos)
})



app.listen(3000, () => {
    console.log(`> Servidor rodando na porta 3000`)
})