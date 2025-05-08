require('dotenv').config({ path: './secrets/.env' })
const express = require('express')
const App = express() 
const cors = require('cors')
const { Socket } = require('socket.io')
const { Server } = require('socket.io')
const port = process.env.PORT 
const db = require('./db/db.js')
App.use(express.json({ limit: '50mb' }))
App.use(cors({
     
    origin: 'http://localhost:5173'
}))
const http = require('http');
const server = http.createServer(App);
const io = new Server(server,{
    pingInterval: 25000, // envia ping a cada 25 segundos
    pingTimeout: 60000,  // espera até 60 segundos antes de desconecta
})

let messages 
let mensagens=[]

App.post('/postarPortifolio',(req,res)=>{
   

})

App.get('/',(req,res)=>{

   
})
App.post('/cadastrar_user',async(req,res)=>{

    try{
        const client = req.body

        const verreficar = await db.verificarEmail(client)

        if(verreficar==true){
            
            res.json({message:true})// retorna que o email ja esta cadastrado no sistema

        }else{
            
            const user = await db.cadastrarUsuarios(client)
            res.json({message:false,usuario:user})

           
        }

    }catch(erro){
       console.log(erro)
         
    }
})

App.delete('/delete_user/:id', async(req,res)=>{

    const id = req.params.id

    await db.deleteUser(id)

    res.json('sucesso')
    


})
App.put('/put_user',async(req,res)=>{

    const user = req.body

    await db.updateUser(user)

    res.json("sucesso")

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




server.listen(3000,()=>{})