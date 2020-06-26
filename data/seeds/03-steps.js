exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('steps')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          step_number: '1',
          instructions: 'Add it together R1',
          reciepe_id: '1',
        },
        { step_number: '2', instructions: 'Cook it R1', reciepe_id: '1' },
        {
          step_number: '1',
          instructions: 'Add it together R2',
          reciepe_id: '2',
        },
        { step_number: '2', instructions: 'Cook it R2', reciepe_id: '2' },
        {
          step_number: '1',
          instructions: 'Add it together R3',
          reciepe_id: '3',
        },
        { step_number: '2', instructions: 'Cook it R3', reciepe_id: '3' },
      ]);
    });
};
