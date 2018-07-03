'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

// clear the console (just a convenience)
process.stdout.write('\x1Bc');

// Sample select 
// knex
//   .select()
//   .from('restaurants')
//   .limit(2)
//   .debug(true)
//   .then(results => console.log(JSON.stringify(results, null, 2)));



// 1. Get all restaurants
// knex('restaurants')
//   .select()
//   .then(console.log);



// 2. Get Italian restaurants
// knex('restaurants')
//   .select()
//   .where({ cuisine: 'Italian' })
//   .then(console.log);


// 3. Get 10 Italian restaurants, subset of fields
// knex('restaurants')
//   .select('id', 'name')
//   .where({ cuisine: 'Italian' })
//   .limit(10)
//   .then(console.log);


// 4. Count of Thai restaurants
// knex('restaurants')
//   .count()
//   .where({ cuisine: 'Thai' })
//   .then(console.log);

// 5. Count of restaurants
// knex('restaurants')
//   .count()
//   .then(console.log);


// 6. Count of Thai restaurants in zip code
// knex('restaurants')
//   .count()
//   .where({ cuisine: 'Thai', address_zipcode: 11372 })
//   .then(console.log);


// 7. Italian restaurants in one of several zip codes
// knex('restaurants')
//   .select('id', 'name')
//   .where({ cuisine: 'Italian' })
//   .whereIn('address_zipcode', [10012, 10013, 10014])
//   .orderBy('name')
//   .limit(5)
//   .then(console.log);

// 8. Create a restaurant
// knex('restaurants')
//   .insert({
//     name: 'Byte Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Atlantic Avenue',
//     address_zipcode: '11231'
//   })
//   .returning(['id', 'name'])
//   .then(console.log);


// 9. Create a restaurant and return id and name
// knex('restaurants')
//   .insert({
    // name: 'Roundhouse Cafe',
    // borough: 'Manhattan',
    // cuisine: 'pub',
    // address_building_number: '867',
    // address_street: 'Jenny Blvd',
    // address_zipcode: '53099'
//   }, ['id', 'name'])
//   .then(console.log);

// 10. Create three restaurants and return id and name
// knex('restaurants')
//   .insert([{
//     name: 'Fake Place 1',
//     borough: 'Manhattan',
//     cuisine: 'Thai',
//     address_building_number: '123',
//     address_street: 'Jenny Blvd',
//     address_zipcode: '53099'
//   },
//   {
//     name: 'Fake Place 2',
//     borough: 'Manhattan',
//     cuisine: 'pub',
//     address_building_number: '234',
//     address_street: 'Jenny Blvd',
//     address_zipcode: '53099'
//   },
//   {
//     name: 'Fake Place 3',
//     borough: 'Brooklyn',
//     cuisine: 'Italian',
//     address_building_number: '345',
//     address_street: 'Jenny Blvd',
//     address_zipcode: '53099'
//   }],
//   ['id', 'name']
//   )
//   .then(console.log);

// 11. Update a record
// knex('restaurants')
//   .update({name: 'DJ Reynolds Pub and Restaurant'})
//   .where({nyc_restaurant_id: '30191841'})
//   .then(console.log);


// 12. Delete by id
// knex('grades')
//   .where({ id: 10 })
//   .del()
//   .then(console.log);

// 13. A blocked delete
// knex('restaurants')
//   .where({ id: 22 })
//   .del()
//   .then(console.log);

// 13(a). Find the entries blocking the delete^
// knex('grades')
//   .select()
//   .where({ restaurant_id: 22 })
//   .then(console.log);

