const express = require('express')
const app = express()
const cors = require('cors')
const { MercadoPagoConfig, Preference } = require('mercadopago')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    console.log(`\n> Servidor chamado \n`)
    res.sendFile(__dirname + './public/index.html')
})



app.listen(3000, () => {
    console.log(`> Servidor rodando na porta 3000`)
})