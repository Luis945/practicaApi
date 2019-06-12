'use strict'
var jwt= require('jsonwebtoken')
var Usuario= use('App/Models/Usuario.js')

class TokenController {
  async token({request,response}){
    const Correo= request.input('Correo');
    const password= request.input('password');
    const usuario= await Usuario.findBy('Correo',Correo);
      if(usuario!= undefined){
        if(usuario.password==password){
          return response.status(200).json({ verificacion:jwt.sign({usuario},"llavesecreta"),usuario: usuario.$attributes});
        }
        else{

          return response.status(403).json('contraseña incorrecta');
        }
      }else{
        console.log(usuario);
        return response.status(403).json('usuario no encontrado');
      }

  }

  async salir({request,response}){
    request.token=""
    return response.status(200).json('Salí');
  }

  async verificar({request,response}){
    let etiqueta = request.header('autor')
      if(typeof etiqueta !== 'undefined'){
        let split= etiqueta.split(' ');
        request.token  = split[1];
        return response.status(200).send(jwt.verify(request.token,"llavesecreta"));
      }
      else{
       return  response.status(403).send('error');
      }
  }

}

module.exports = TokenController
