'use strict'
const usuario= use('App/Models/Usuario')
class RutaController {
  async verdatos({request,response}){
    return response.status(200).json(await usuario.all())
  }
  async agregar({request,response}){
    let nuevo= new usuario();
    nuevo.Nombre= request.input('Nombre')
    nuevo.Apellido= request.input('Apellido')
    nuevo.Correo= request.input('Correo')
    nuevo.password= request.input('password')
     await nuevo.save();

    return response.status(200).json(await usuario.all())
  }
  async borrar({params,request,response}){
    let objetivo=  await usuario.find(params.id)
    await objetivo.delete()
    return response.status(200).json(await usuario.all())

  }
  async actualizar({request,response}){
    let objetivo= await usuario.find(request.input('id'))
      objetivo.Nombre= request.input('Nombre')
      objetivo.Apellido= request.input('Apellido')
      objetivo.Correo= request.input('Correo')
      objetivo.password= request.input('password')
      await objetivo.save();
      return response.status(200).json(await usuario.all())

  }
}

module.exports = RutaController
