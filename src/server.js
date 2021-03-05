'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const errors = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');

//global -> app levle middleware
//allways stick this in your server file
app.use(express.json());
app.use(logger); 

//new way - with request parameter
//http://localhost:3333/coach/football
app.get('/person', validator,logger, (req, res) => {
    console.log(req.query);
    res.send(`person ${req.query.name}`);
});
    // function square (n) {
    //     return (req, res, next) => {
    //         if (typeof n !== 'name') {
    //             next('name not provided');
    //         } else {
    //           req.name = n * n;
    //           next();  
    //         }
    //     }
    // }

    // app.get('/nameless', name(D), (req,res) =>{
    //     res.send(`the real name of D is: ${req.name}`);
    // });
    
app.use(errors);
app.use('*', notFound);

    module.exports = {
        server:app,
        start:port => {
            app.listen(port, () => {
                console.log(`listening: ${port}`);
            })
        }
    }
    
    
