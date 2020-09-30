exports.up = function (knex) {
  return knex.schema.createTable('ongs', table => {
    table.string('cnpj').notNullable().primary();
    table.string('email').notNullable();
    table.string('name').notNullable();
    table.string('address').notNullable();
    table.string('whatsapp');
    table.string('phone').notNullable();
    table.string('hash_password').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('ongs');
};
