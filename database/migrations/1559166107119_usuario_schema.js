'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioSchema extends Schema {
  up () {
    this.create('usuarios', (table) => {
      table.increments()
      table.string('Nombre',40).notNullable()
      table.string('Apellido', 40).notNullable()
      table.string('Correo',60).notNullable().unique()
      table.string('password').notNullable()
      table.timestamps()

    })
  }

  down () {
    this.drop('usuarios')
  }
}

module.exports = UsuarioSchema
