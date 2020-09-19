exports.up = function (knex) {
  return knex.schema.createTable('pets', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.string('breed');
    table.integer('genre').defaultTo(false);
    table.float('age', 2, 1).notNullable();
    table.string('photo_name').notNullable();
    table.boolean('special_cares').defaultTo(false);
    table.boolean('castrated').defaultTo(false);
    table.boolean('dewormed').defaultTo(false);

    table
      .integer('specie_id')
      .notNullable()
      .references('id')
      .inTable('species');

    // ? Seria interessante anexar os dados de vacinação?
    // ? Caso sim, seria mais melhor pensar como uma entidade? Provavelmente.

    // TODO transformar em chave estrangeira com a tabela referente às instituições.
    table.string('ong').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('pets');
};
