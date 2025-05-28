require('dotenv').config({ path: './secrets/.env' })
const express = require('express')
const App = express() 
const cors = require('cors')
const { Socket } = require('socket.io')
const { Server } = require('socket.io')
const port = process.env.PORT 
const db = require('./db/db.js')
const VerrificarEmail = require('./middleware/verficarEmail.js')


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

   
})
App.post('/cadastrar_user',VerrificarEmail,async(req,res)=>{

    try{
        const client = req.body   
           
          const user = await db.cadastrarUsuarios(client)
          res.json({message:false,usuario:user})
     
      
    }catch(erro){

        res.json({message:true,usuario:user})
        console.log('ta aqui')
       
         
    }
})

App.delete('/delete_user/:id', async(req,res)=>{

    const id = req.params.id

    await db.deleteUser(id)

    res.json('sucesso')
    


})
App.put('/put_user',async(req,res)=>{

    const user = req.body

    const Usuario =await db.updateUser(user)

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


io.on("connection", socket =>{
  

    socket.on("mandarMensagem", data =>{
        console.log(data)

           
            mensagens.push(data)
            io.emit('mensagemRecebida',data)

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
App.post('postComentario',(req,res)=>{
    
    const coments = req.body


})




server.listen(3000,()=>{})