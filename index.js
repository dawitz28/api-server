'use strict';

//mongoose is the connector between our app and the MongoDB database 
const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost:27017/mongo-db-lab'; //mongo-db-lab is the name of the database
const server = require('./src/server.js');

const options = {useNewUrlParser: true, useUnifiedTopology: true }; //always pass in these options
mongoose.connect(MONGODB_URI, options);

//CLARITY!!
// MONGODB is the DBMS
//mongoose is ORM -> commector between our app and MongoDB 

const PORT = process.env.PORT || 3000;
server.start(PORT);