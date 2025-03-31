const express = require('express')
const App = express() 
const cors = require('cors')

let vetorObras=[{
    id:1,
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKrEhtb61lx3JBGlJdHvIgxK1mfcTVP-sedQ&s',
    nome:'Cuidar de cachorros',
    autor:'João ',
    avaliacao:4.5
}]


App.use(express.json())
App.use(cors())

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



App.listen(3000,()=>{
    console.log('server Rodando')
})