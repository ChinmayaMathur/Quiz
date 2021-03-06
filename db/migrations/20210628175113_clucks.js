
exports.up = function(knex) {
      return knex.schema.createTable('clucks', table => {
            table.increments('id')
            table.string('username')
            table.text('img_url') //use text if the field might exceed 255 characters
            table.text('content')
            table.timestamp('createdAt').defaultTo(knex.fn.now())
            table.timestamp('updatedAt')
        })
  
};

exports.down = function(knex) {
      return knex.schema.dropTable('clucks')
  
};
