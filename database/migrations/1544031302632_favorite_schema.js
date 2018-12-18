'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FavoriteSchema extends Schema {
  up () {
    this.create('favorites', (table) => {
    	table.increments()
	    table.integer('user_id').unsigned().references('id').inTable('users')
        table.integer('tweet_id').unsigned().references('id').inTable('tweets')
	    table.timestamps()
    })
  }

  down () {
    this.drop('favorites')
  }
}

module.exports = FavoriteSchema
