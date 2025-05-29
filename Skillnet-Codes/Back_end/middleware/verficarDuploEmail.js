const db = require('../db/db.js')

 async function VerrificarEmail(request,response,next){

      const client =  await db.connect()

      console.log("estou no arquivo ",request.body)

      const {email} = request.body
      
      const sql ='SELECT email FROM usuarios WHERE email = $1 '

     const verrificarEmail = await client.query(sql,[email])   
     
    if( verrificarEmail.rows.length > 0){
        console.log('email ja cadastrado')
        console.log(verrificarEmail)

        return response.json({ message: true })// retorna que o email ja foi cadastrado é avisa no front passado pelo back

    }

    return next()

 }
 module.exports = VerrificarEmail