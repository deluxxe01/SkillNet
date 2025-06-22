const{deleteUser} = require('../db/db')

it('Enviado uma string como id para ver o banco recusa',async()=>{
        const id = "coxinha"
  await expect(deleteUser(id)).rejects.toThrow();

})