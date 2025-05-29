require('dotenv').config({ path: './secrets/.env' })
const port = process.env.PORT 
const db = require('./db_teste')
const express = require('express')
const cors = require('cors')
const App = express() 
App.use(express.json())
App.use(cors())
// Rota raiz
App.get('/', (req, res) => {
  res.json({ message: 'funfa' })
})

// Rota para obter serviços
App.get('/servicos/:id', async (req, res) => {
  const Servico = await db.selectServico(req.params.id)
  res.json(Servico)
})



// Rota para obter serviços
App.get('/servicos', async (req, res) => {
  const Servicos = await db.selectServicos()
  res.json(Servicos)
})


// Rota para obter serviços
App.post('/servicos', async (req, res) => {
 await db.insertServico(req.body); 
  res.sendStatus(201)


})


// Rota para obter serviços
App.patch('/servicos/:id', async (req, res) => {
 await db.updateServico(req.params.id,req.body); 
  res.sendStatus(200)


})

// Rota para obter serviços
App.delete('/servicos/:id', async (req, res) => {
 await db.deleteServico(req.params.id); 
  res.sendStatus(204)


})

