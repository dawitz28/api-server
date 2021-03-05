'use strict';

const express = require('express');
const Clothes = require('../models/clothes.js');
const dawitCollection = require('../models/models-collection.js');
const Clothes = new dawitCollection(Clothes);

const router = express.Router();

//routes 
clothRouter.get('/clothes', getClothes); // 1: hit the route -> REST
clothRouter.get('/clothes/:id', getSomeClothes);
clothRouter.post('/clothes', createClothes);
clothRouter.put('/clothes/:id', updateClothes);
clothRouter.delete('/clothes/:id', deleteClothes);


function getClothes(req, res) {
    //2: get all items from the database -> CRUD
    let all = cloth.get();
    //3: send those items back to the user ->  RESPONSE
    res.status(200).json(all);
}

function getSomeClothes(req, res) {
    let id = passeInt(req.params.id);
    let cloth = clothes.get(id);
    res.status(200).json(cloth);
}

function createClothes(req, res) {
    let obj = req.body;
    let newCloth = Clothes.create(obj);
    res.status(200).json(newCloth);
}

function updateClothes(req, res) {
const id = parseInt(req.params.id);
const obj = req.body;
let updatedCloth = Cloth.update(id, obj)
res.status(200).json(updatedCloth);
}

function deleteClothes(req, res) {
    let id = parseInt(req.params.id);
    let deletedCloth = cloth.delete(id);
    res.status(200).json(deletedCloth);
}

module.exports = router;