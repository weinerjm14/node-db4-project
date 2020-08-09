exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('reciepes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('reciepes').insert([
        { name: 'chicken yum' },
        { name: 'beef yum' },
        { name: 'pork yum' },
      ]);
    });
};
