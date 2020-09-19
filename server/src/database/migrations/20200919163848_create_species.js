exports.up = function (knex) {
  return knex.schema
    .createTable('species', table => {
      table.increments('id').primary();
      table.string('specie').notNullable();
    })
    .then(() => {
      return knex('species').insert([
        { specie: 'Cachorros' },
        { specie: 'Coelhos' },
        { specie: 'Hamsters' },
        { specie: 'Gatos' },
        { specie: 'Bovinos' },
        { specie: 'Equinos' },
        { specie: 'Aves' },
        { specie: 'Outros' },
      ]);
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable('species');
};
