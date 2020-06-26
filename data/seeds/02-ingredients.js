exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'beef' },
        { name: 'pork' },

        { name: 'chicken' },

        { name: 'salt' },

        { name: 'pepper' },

        { name: 'bbq sauce' },

        { name: 'ketchup' },

        { name: 'mayo' },

        { name: 'garlic powder' },
      ]);
    });
};
