const express = require('express')
const App = express() 
const cors = require('cors')

let vetorObras=[{
    id:1,
    nome:'Lorram',
    curtidas:12
}]


App.use(express.json())
App.use(cors())

App.post('/postarPortifolio',(req,res)=>{

    const {nome,curtidas} = req.body
    

    try{
        const Portifolio={
            id:vetorObras.length+1,
            nome:nome,
            curtidas:curtidas
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