const express = require('express')
const App = express() 
const cors = require('cors')

let vetorObras=[{
    id:1,
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQia3_-bhRut_ajBUbfz9pXyLVGMlt4KPhiMQ&s',
    nome:'Cuidar de cachorros',
    autor:'João '
}]


App.use(express.json())
App.use(cors())

App.post('/postarPortifolio',(req,res)=>{

    const {nome,autor,img} = req.body
    

    try{
        const Portifolio={
            id:vetorObras.length+1,
            img:img,
            nome:nome,
            autor:autor
        }

        vetorObras.push(Portifolio)
        res.status(201).json({ message: 'Obra adicionada com sucesso!' });

    }catch(err){
        console.log('o erro foi '+ err)
        res.status(500).json({message:'erro ao inserir obra'})
    }

})

App.get('/',(req,res)=>{

    res.json(vetorObras)
    
})



App.listen(3000,()=>{
    console.log('server Rodando')
})