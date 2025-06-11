# SDK Mercado Pago (Estudo)

Este repositório é um estudo sobre como integrar o SDK oficial do [Mercado Pago](https://www.mercadopago.com.br/) em uma aplicação Node.js.


## 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/sdk-mercadopago.git
cd sdk-mercadopago
```
## 2. Instalar as dependências

```bash
npm install
```


## 3. Configurar variáveis de ambiente

Copie o arquivo .env.example para .env:

```bash
cp .env.example .env
```

Abra o arquivo .env e adicione seu Access Token do Mercado Pago:

```ini
ACCESS_TOKEN="SEU_ACCESS_TOKEN_AQUI"
```

Como conseguir seu Access Token
Acesse: https://www.mercadopago.com.br/developers/panel

- Faça login com sua conta do Mercado Pago

- Vá até a seção Credenciais

- Copie o Access Token de produção ou sandbox

## ▶️ Rodando o projeto
Execute o servidor com:

```bash
node server.js
```

Depois acesse no navegador:

```arduino
http://localhost:3000
```