
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.string('VIN', 128).notNullable()
      tbl.string('make').notNullable()
      tbl.string('model').notNullable()
      tbl.decimal('mileage').notNullable()
      tbl.string('transmission_type')
      tbl.string('title_status')

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
