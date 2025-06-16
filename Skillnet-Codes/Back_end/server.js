require('dotenv').config({ path: './secrets/.env' })
const express = require('express')
const App = express() 
const cors = require('cors')
const { Socket } = require('socket.io')
const { Server } = require('socket.io')
const port = process.env.PORT 
const db = require('./db/db.js')
const VerrificarEmail = require('./middleware/verficarDuploEmail.js')
const verrificaFinalEmail = require('./middleware/verrficarEMail.js')


App.use(express.json({ limit: '50mb' }))
App.use(cors({
    origin: 'http://localhost:5173'
}))
const http = require('http');
const server = http.createServer(App);
const io = new Server(server,{
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST']
    },
    pingInterval: 25000, // envia ping a cada 25 segundos
    pingTimeout: 60000, // espera até 60 segundos antes de desconecta
     
})
App.use(express.urlencoded({ extended: true }));
let messages 
let mensagens=[]

App.post('/postarPortifolio',(req,res)=>{
   

})


App.get('/',(req,res)=>{
 res.json("oi")
   
})
App.post('/cadastrar_user',VerrificarEmail,verrificaFinalEmail,async(req,res)=>{

  
    
         const client = req.body   
           
          user = await db.cadastrarUsuarios(client)

          res.json({message:false,usuario:user})
     
})

App.delete('/delete_user/:id', async(req,res)=>{

    const id = req.params.id

    await db.deleteUser(id)

    res.json('sucesso')
    


})
App.put('/put_user',async(req,res)=>{

    const user = req.body

    const Usuario = await db.updateUser(user)
    console.log(Usuario)

    res.json({user:Usuario})

})

App.post('/login_user',async(req,res)=>{

    const user = req.body
    
    const result = await db.loginUser(user)

    if(result==false){
        res.json(false)

    }else{
        res.json(result)
    }



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
  







io.on("connection", socket =>{
  

    socket.on("mandarMensagem", data =>{
        console.log(data)
            mensagens.push(data)
            io.emit('mensagemRecebida',data)

    })
    socket.on('criarSala',async (user1,user2,callback) =>{
        console.log(user1)

        console.log('criou ',{
            id:user1.id_usuario1
            ,nome:user1.nome
        },{
            id:user2.id_usuario2,
            nome:user2.nome})
        const sala_id =  await db.createSalasChat({ id:user1.id_usuario1  ,nome:user1.nome},{ id:user2.id_usuario2, nome:user2.nome})
        console.log("id da sla de chat",sala_id)
        socket.join(sala_id)

        callback({sucesso:true,sala_id})

    })
    socket.on('salasUsuario', async (id_usuario,callback)=>{

        
         console.log("salas",socket.rooms)

        const salasUsuario = await db.findSala(id_usuario)


        callback({salas:salasUsuario})



    })
    socket.on('menssagens',async (obj,callback) =>{
        console.log('passoui aqui')
        console.log("objeto",obj)
        await db.salvarMenssagen(obj.mensagen)


        callback({mensagens:obj.mensagen,horario:obj.horas})


    })

    socket.on('puxarMenssagen',async(id_sala,callback) =>{

       const res = await db.selecionarMenssagens(id_sala.id_sala)

       callback({res})

    })
     
    socket.on('salas', (id_sala, callback) => {
    socket.join(id_sala)
    console.log(`Socket ${socket.id} entrou na sala ${id_sala}`)
    callback({ sucesso: true })
  })
    socket.on("disconnect", (reason) => {
        console.log(`Cliente desconectado (${socket.id}): ${reason}`);
    });

})


App.get('/mensagens',(req,res)=>{
    res.json(mensagens)
})

App.get('/cadastra_usuario',(req,res)=>{

    const client = req.body
    
    console.log(client.data)

})


App.get('/servicos',(req,res)=>{

 res.send('sdasd')
})

App.post('/postComentarioServico',async(req,res)=>{
    
    const coments = req.body
    await db.createComentServico(coments)
    res.json("funfou 🥲🥲🥲")


})

App.delete('/deleteComentarioServico/:id',async(req,res)=>{
    const id = req.params.id

    await db.deleteCommentServico(id)
    
    res.json('deu certo')
})



// CRUD SERVICOS


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


// Criar portfolio
App.post("/portfolios", async (req, res) => {
    try {
      await db.insertPorti(req.body);
      res.sendStatus(201);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao inserir portfolio" });
    }
  });
  
  // Listar todos portfolios
  App.get('/portfolios', async (req, res) => {
    try {
      const portfolios = await db.selectPorti();
      res.json(portfolios);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao listar portfolios" });
    }
  });
  
  // Buscar portfolio por ID
  App.get('/portfolios/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const porti = await db.selectPortiById(id);
      if (porti) {
        res.json(porti);
      } else {
        res.status(404).json({ error: 'Portfólio não encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar portfolio" });
    }
  });
  
  // Atualizar portfolio por ID
  App.put('/portfolios/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await db.updatePorti(id, req.body);
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao atualizar portfólio' });
    }
  });
  
  // Deletar portfolio por ID
  App.delete('/portfolios/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await db.deletePorti(id);
      res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao deletar portfólio' });
    }
  });
server.listen(3000,()=>{})