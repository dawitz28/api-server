'use strict';

const mongoose = require('@code-fellows/supergoose');
const server = require('../src/server.js');

const Food = require('../models/food-collection.js');
const food = new Food();

const supertest = require('supertest');
const yourRequest = supertest(server.server);

describe('Food Collection', () => {
    //this test is independent from the test below
    //hence, why it is in it's own "it" block

    //404
    it('should return a 404 if no route found', () => {
        yourRequest.get('/not-a-route')
        .then(result => {
            expect(result.status).toBe(404);
        });
    })
    //500
    it('should return a 500 if the server is broke', () => {
        yourRequest.get('/not-a-routh')
        .then(results => {
            expect(results.status).toBe(404);
        });
    })

    //create
    it('can create a new record in the db', async () => {
        let testFood = {name: 'test food item', calories: 100, type: 'VEG'}
        let response = await yourRequest.post('/food').send(testFood).then(response => {})
        expect(response.status).toBe(201);
        expect(response.body._id).toBeDefined();
    })
    //create
    it('can create a new item food item', () => {
        let testFood = { name: 'test food item', calories: 9999, type: 'PROD'};
        let expected = { name: 'test food item', calories: 9999, type: 'PROD'};

        return food.create(testFood)
            .then(record => {
                console.log('test food item form DB:', record);
                Object.keys(testFood). forEach(key => {
                    expect(record[key]).toEqual(expexted[key]);
                });
            })
    });

    //delete
    it('can delete a record from the db', async () => {
        //we make a request to out app: DELETE /food/1
        await yourRequest.delete(/food/1)
        .then(response => {
            expect(response.status).toEqual(204);
            expect(response.body).toBeFalsy();
        })
    })

    
//     it('can get a food item', () => {
//         let testFood = { name: 'test food item', calories: 9999, type: 'PROD'};
//         let expected = { name: 'test food item', calories: 9999, type: 'PROD'};

//         return food.create(testFood)
//         .then(record => {
//             return food.get(record._id)
//             .then(item => {
//                 Object.keys(testFood). forEach(key => {
//                     expect(item[key]).toEqual(expected[key]);
//                 })
//             })
//         })
//     });
// });