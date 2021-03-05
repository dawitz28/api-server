'use strict';

//pul in mongoose so that we can create a db schema (aka blueprint for our data)
const mongoose = require('mongoose');

//create a new mongoose schema (blueprint) with a set of properties and constraints 
const clothesSchema = mongoose.Schema({
    name: {type: String, required: true},
    calories: {type: Number, required: true},
    type: {type: String, uppercase: true, enum: ['DESSERT', 'PROD', 'MEAT']}
}); 

const Clothes = mongoose.model('cloth', clothesSchema);


//create a mongoose model -> in the db, it creates a collection 

module.exports = Clothes;
 
