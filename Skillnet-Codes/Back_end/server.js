require('dotenv').config({ path: './secrets/.env' })
const express = require('express')
const App = express() 
const cors = require('cors')
const { Socket } = require('socket.io')
const { Server } = require('socket.io')
const port = process.env.PORT 

App.use(express.json({ limit: '50mb' }))
App.use(cors({
     origin: 'http://localhost:5173'
}))
const http = require('http');
const server = http.createServer(App);
const io = new Server(server);

let vetorObras=[{
    id:1,
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKrEhtb61lx3JBGlJdHvIgxK1mfcTVP-sedQ&s',
    nome:'Cuidar de cachorros',
    autor:'João ',
    avaliacao:1.5
}]
let usuarioLogado
let messages = []




App.post('/postarPortifolio',(req,res)=>{

    const {nome,autor,img,avaliacao} = req.body
    
   
    try{
        const Portifolio={
            id:vetorObras.length+1,
            img:img,
            nome:nome,
            autor:autor,
            avaliacao:avaliacao,
            
        }

        vetorObras.push(Portifolio)
        res.status(201).json({ message: 'Obra adicionada com sucesso!' });

    }catch(err){
        console.log('o erro foi '+ err)
        res.status(500).json({message:'erro ao inserir Portifolio'})
    }

})

App.get('/',(req,res)=>{

    res.json(vetorObras)
    
})
App.post('/UsuarioLogado',(req,res)=>{
    const resultado =req.body
    usuarioLogado=resultado
    
})

App.get("/UsuarioLogado",(req,res)=>{
    
    res.json(usuarioLogado)
})

io.on("connection", socket =>{
  

    socket.on("mandarMensagem", data =>{
        console.log(data)

            messages.push(data)
            io.emit('mensagemRecebida',messages)

    })

})
App.get('/Mensagens',(req,res)=>{
    res.json(messages)
})




server.listen(port,()=>{})