'use strict';

const express = require('express');
const Foods = require('../models/food.js');
const dawitCollection = require('../models/models-collection.js');
const router = express.Router();
const validator = require('../middleware/validator.js');
const meals = new dawitCollection(Foods);

//routes 
foodRouter.get('/foods', getFoods); // 1: hit the route -> REST
foodRouter.get('foods/:id', getSomeFoods);
foodRouter.post('/foods', createFood);
foodRouter.put('/foods/:id', updateFoods);
foodRouter.delete('/foods/:id', deleteFoods);


function getFoods(req, res) {
    //2: get all items from the database -> CRUD
    let all = meal.get();
    //3: send those items back to the user ->  RESPONSE
    res.status(200).json(all);
}

function getSomeFoods(req, res) {
    let id = passeInt(req.params.id);
    let meal = meals.get(id);
    res.status(200).json(meal);
}

function createFood(req, res) {
    let obj = req.body;
    let newMeal = meals.create(obj);
    res.status(200).json(newMeal);
}

function updateFoods(req, res) {
const id = parseInt(req.params.id);
const obj = req.body;
let updatedFood = meal.update(id, obj)
res.status(200).json(updatedFood);
}

function deleteFoods(req, res) {
    let id = parseInt(req.params.id);
    let deletedFood = meal.delete(id);
    res.status(200).json(deletedFood);
}

module.exports = router;