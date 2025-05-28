
function verrificarFinalEmail(req,res,next){

    const user = req.body 

    const {email} = user
 

    if( email.endsWith('@gmail.com')==true || email.endsWith("@hotmail.com"==true)){
        return next()
    }
    
    return res.json({message:true,erro:"porfavor utilize @ ou use um email valido"})

}

module.exports = verrificarFinalEmail