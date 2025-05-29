
function verrificarFinalEmail(req,res,next){

    const user = req.body 

    const {email} = user
 

    if( email.endsWith('@gmail.com')==true || email.endsWith("@hotmail.com"==true)){
        return next()
    }
    
    return res.json({message:true})

}

module.exports = verrificarFinalEmail