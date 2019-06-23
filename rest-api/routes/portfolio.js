const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Portfolio = require('../models/portfolio.js');


let object = [{
              title : 'Testtitle',
              description: 'testdescription'
}];

let result = object.map(a => a.title);
console.log(result);


router.get('/:slug', (req, res) => {
    Portfolio.find((err, portfolio) => {
        if (err) {
            console.log(err);
        }else {
            let result = portfolio.map(a => a.title);
            res.render('index', {
                title : result,
            });
        }
    });
});


module.exports = router;
