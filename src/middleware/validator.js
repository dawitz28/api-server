'use strict';

// const {interface} = require("readline");

const validator = (req, res, next) => {
    let name = req.query.name;
    if (!name) {
        next ('name not provided')
    } else { res.status(500);
        next ();
    }
    console.log('name', req.query.name);
}

module.exports = validator; 