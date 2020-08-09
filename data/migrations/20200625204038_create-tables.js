exports.up = async function (knex) {
  await knex.schema
    .createTable('reciepes', tbl => {
      tbl.increments(), tbl.text('name').notNullable();
    })
    .createTable('ingredients', tbl => {
      tbl.increments(), tbl.text('name').notNullable();
    })
    .createTable('steps', tbl => {
      tbl.increments(),
        tbl.integer('step_number').notNullable(),
        tbl.text('instructions').notNullable();
      tbl
        .integer('reciepe_id')
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('reciepes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('reciepes_ingredients', tbl => {
      tbl
        .integer('reciepe_id')
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('reciepes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE'),
        tbl
          .integer('ingredients_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('ingredients')
          .onUpdate('CASCADE')
          .onDelete('CASCADE'),
        tbl.text('amount').notNullable(),
        tbl.primary(['reciepe_id', 'ingredients_id']);
    });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('reciepes_ingredients');
  await knex.schema.dropTableIfExists('steps');
  await knex.schema.dropTableIfExists('ingredients');
  await knex.schema.dropTableIfExists('reciepes');
};
