
function verrificarFinalEmail(req,res,next){

    const user = req.body 

    const {email} = user
    console.log(email)

    if( email.endsWith('@gmail.com')==true || email.endsWith("@hotmail.com"==true)){
        next()
        console.log("passsou aqui ")
        return res.json({message:false})

    }
    console.log('passu aqui')
    return res.json({message:true})

}

module.exports = verrificarFinalEmail