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
     
    //origin: 'http://localhost:5173'
}))
const http = require('http');
const server = http.createServer(App);
const io = new Server(server,{
    pingInterval: 25000, // envia ping a cada 25 segundos
    pingTimeout: 60000,  // espera até 60 segundos antes de desconecta
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

    res.json(Usuario)

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
    socket.on('criarSala',async (id_usuario1,id_usuario2,callback) =>{

        const sala_id =  await db.createSalasChat(id_usuario1,id_usuario2)

        socket.join(sala_id)

        callback({sucesso:true,sala_id})

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
//rotas para o portifolio
App.post("/portfolio", async function(requisition, response) {
    
    console.log (requisition.body)

      await db.insertPorti(requisition.body)
      
       //Retornar algo que deu certo
      response.sendStatus(201)
  })

  // Rota para listar todos os portfolios
App.get('/portfolio', async (req, res) => {

    // Chama a função que seleciona os portfolios no banco de dados
    const portfolios = await db.selectPorti();

    // Envia a resposta em formato JSON contendo os portfolios
    res.json(portfolios);

    });








server.listen(3000,()=>{})