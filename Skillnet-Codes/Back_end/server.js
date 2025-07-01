require('dotenv').config({ path: './secrets/.env' })
const express = require('express')
const App = express()
const cors = require('cors')
const { Server } = require('socket.io')
const http = require('http')
const db = require('./db/db.js')
const VerrificarEmail = require('./middleware/verficarDuploEmail.js')
const verrificaFinalEmail = require('./middleware/verrficarEMail.js')

App.use(express.json({ limit: '50mb' }))
App.use(cors({ origin: 'http://localhost:5173' }))
App.use(express.urlencoded({ extended: true }))

const server = http.createServer(App)
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
  },
  pingInterval: 25000,
  pingTimeout: 60000
})

let mensagens = []

App.get('/', (req, res) => res.json("oi"))

App.post('/cadastrar_user', VerrificarEmail, verrificaFinalEmail, async (req, res) => {
  const client = req.body
  const user = await db.cadastrarUsuarios(client)
  res.json({ message: false, usuario: user })
})

App.delete('/delete_user/:id', async (req, res) => {
  const id = req.params.id
  await db.deleteUser(id)
  res.json('sucesso')
})

App.put('/put_user', async (req, res) => {
  const user = req.body
  const Usuario = await db.updateUser(user)
  res.json({ user: Usuario })
})

App.post('/login_user', async (req, res) => {
  const user = req.body
  const result = await db.loginUser(user)
  res.json(result || false)
})

// CRUD serviços
App.get('/servicos', async (req, res) => {
  const Servicos = await db.selectServicos()
  res.json(Servicos)
})

App.get('/servicos/:id', async (req, res) => {
  const Servico = await db.selectServico(req.params.id)
  res.json(Servico)
})

// posta
App.post('/servicos', async (req, res) => {
  await db.insertServico(req.body)
  res.sendStatus(201)
})

App.patch('/servicos/:id', async (req, res) => {
  await db.updateServico(req.params.id, req.body)
  res.sendStatus(200)
})

App.delete('/servicos/:id', async (req, res) => {
  await db.deleteServico(req.params.id)
  res.sendStatus(204)
})

// CRUD portfólios (sem ligação com usuário)
App.post("/portfolios", async (req, res) => {
  try {
    await db.insertPorti(req.body)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Erro ao inserir portfolio" })
  }
})

App.get('/portfolios', async (req, res) => {
  try {
    const portfolios = await db.selectPorti()
    res.json(portfolios)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Erro ao listar portfolios" })
  }
})

App.get('/portfolios/:id', async (req, res) => {
  try {
    const porti = await db.selectPortiById(req.params.id)
    if (porti) {
      res.json(porti)
    } else {
      res.status(404).json({ error: 'Portfólio não encontrado' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Erro ao buscar portfolio" })
  }
})

App.put('/portfolios/:id', async (req, res) => {
  try {
    await db.updatePorti(req.params.id, req.body)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao atualizar portfólio' })
  }
})

App.delete('/portfolios/:id', async (req, res) => {
  try {
    await db.deletePorti(req.params.id)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao deletar portfólio' })
  }
})

// Comentários dos serviços
App.post('/postComentarioServico', async (req, res) => {
  await db.createComentServico(req.body)
  res.json("Comentário adicionado")
})

App.delete('/deleteComentarioServico/:id', async (req, res) => {
  await db.deleteCommentServico(req.params.id)
  res.json('Comentário deletado')
})

App.get('/getComentsServicos/:id', async (req,res)=>{
  const values = req.params.id
  
  const coments = await db.selectComentsServico(values)

  res.json({Comentarios:coments})

})

// WebSocket (chat, salas e mensagens)
io.on("connection", socket => {
  socket.on("mandarMensagem", data => {
    mensagens.push(data)
    io.emit('mensagemRecebida', data)
  })

  socket.on('criarSala', async (user1, user2, callback) => {

    const salaExistente = await db.findSalaEntreUsuarios(user1.id_usuario1, user2.id_usuario2);

  if (salaExistente) {
    // Já existe, retorna ela
    return callback({ salaExistente });
  }
    const sala_id = await db.createSalasChat(
      { id: user1.id_usuario1, nome: user1.nome },
      { id: user2.id_usuario2, nome: user2.nome }
    )
    socket.join(sala_id)
    return callback({ sucesso: true, sala_id })
  })

  socket.on('salasUsuario', async (id_usuario, callback) => {
    const salasUsuario = await db.findSala(id_usuario)
    callback({ salas: salasUsuario })
  })

  socket.on('menssagens', async (obj, callback) => {
    await db.salvarMenssagen(obj.mensagen)
    callback({ mensagens: obj.mensagen, horario: obj.horas })
  })

  socket.on('puxarMenssagen', async (id_sala, callback) => {
    
    const res = await db.selecionarMenssagens(id_sala.id_sala)
    
    callback({ res })
  })

  socket.on('salas', (id_sala, callback) => {
    socket.join(id_sala)
    callback({ sucesso: true })
  })

  socket.on('salaEspecifica',async(users,callback)=>{
    
    const resultado = await db.findSalaEspecifica(users)

    callback({resultado})


  })

  socket.on("disconnect", reason => {

  })
})

App.get('/mensagens', (req, res) => {
  res.json(mensagens)
})

App.get('/servicoEspecifico/:area',async(req,res)=>{

  const area = req.params.area

   const resultado = await db.getServicoEspecifico({area})

   res.json({resultado})


})

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})
