exports.up = function (knex) {
  return knex.schema.createTable('pets', table => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.string('breed');
    table.integer('genre').notNullable();
    table.float('age', 2, 1).notNullable();
    table.string('image_url').notNullable();
    table.boolean('special_cares').defaultTo(false);
    table.boolean('castrated').defaultTo(false);
    table.boolean('dewormed').defaultTo(false);

    table
      .integer('specie_id')
      .notNullable()
      .references('id')
      .inTable('species');

    table.string('ong_cnpj').notNullable().references('cnpj').inTable('ongs');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('pets');
};
