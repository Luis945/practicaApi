'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
var jwt= require('jsonwebtoken')
class Autenticacion {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request,response },next) {
    // call next to advance the request

    let etiqueta = request.header('autor')

      if( etiqueta != undefined){
        let split;
        split= etiqueta.split(' ')? split:'';
        request.token  = split[1];
        jwt.verify(request.token,"llavesecreta",await next());

      }
      else{
       return  response.status(403);
      }


  }
}

module.exports = Autenticacion
