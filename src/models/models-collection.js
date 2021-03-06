'use strict';

const model = require('./food-model');

//"wrapper" for our CRUD actions against the DB
class dawitCollection {
    constructor() {
        this.model = model;
        this.db = [];
    }
    //app.get('/cats/:id)
    //call one of your crud actions in this file
    // these crud actions do actual db work using mongoose methods

    get(_id) {
        if (_id) {
            return this.model.findOne({ _id}) // findOne is a mongoose method to find one specific item
        } else {
            return this.model.find({});
        }
    }

    create(record) {
        let newRecord = new this.model(record);
        return newRecord.save(); //.save() is a mongoose method to save an item to the db
        }

    update(_id, record) { 
        return this.model.findByIdAndUpdate(_id, record, { new: true}) //new: true is required to get back the newly updated thing
    }

    delete(_id) {
        return this.model.findByIdAndDelete(_id);
    }
}

module.exports = dawitCollection; 

//don't need it 
// class Cars extends FoodCollection { // this will automatically gives you get, create, update, delete 

// }