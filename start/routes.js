'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/ver','RutaController.verdatos').middleware('verificacion');

Route.post('/nuevo','RutaController.agregar').middleware('verificacion');

Route.delete('/borrar/:id','Rutacontroller.borrar').middleware('verificacion');

Route.put('nuevo/','RutaController.actualizar').middleware('verificacion');

Route.post('verificar/','TokenController.token');

Route.post('salir/','TokenController.salir');

Route.get('verificar/','TokenController.verificar');

