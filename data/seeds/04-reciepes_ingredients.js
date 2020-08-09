exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('reciepes_ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('reciepes_ingredients').insert([
        { reciepe_id: '1', ingredients_id: '1', amount: '2lbs' },
        { reciepe_id: '1', ingredients_id: '4', amount: '2 tsp' },
        { reciepe_id: '1', ingredients_id: '6', amount: '1 bottle' },
        { reciepe_id: '2', ingredients_id: '2', amount: '2lbs' },
        { reciepe_id: '2', ingredients_id: '4', amount: '2 tsp' },
        { reciepe_id: '2', ingredients_id: '8', amount: '4 tblsp' },
        { reciepe_id: '3', ingredients_id: '3', amount: '2lbs' },
        { reciepe_id: '3', ingredients_id: '5', amount: '2 tsp' },
        { reciepe_id: '3', ingredients_id: '9', amount: '4 tblsp' },
        { reciepe_id: '3', ingredients_id: '7', amount: '4 tblsp' },
      ]);
    });
};
