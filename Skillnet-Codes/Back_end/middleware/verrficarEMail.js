
function verrificarFinalEmail(req,res,next){

    const user = req.body 

    const {email} = user

    if( email.endsWith('@gmail.com')==true || email.endsWith("@hotmail.com"==true)){
        next()
        console.log("passsou aqui ")

    }
    console.log('passu aqui')
    return res.json({message:false})

}

module.exports = verrificarFinalEmail