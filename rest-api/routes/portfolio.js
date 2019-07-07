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

router.get('/', (req, res) => {
    
});


router.get('/:slug', (req, res) => {
    Promise.all([
        Portfolio.findOne({'slug' : req.params.slug}),
    ]).then(([portfolio]) => {
        let videos = 0;
        if(portfolio.img === ""){
            console.log("Empty!");
            videos = portfolio.video;
        };
        res.render('index', {
            title: portfolio.title,
            description: portfolio.description,
            challenge: portfolio.challenge,
            technology: portfolio.technology,
            video: videos,
            img: portfolio.img
        }, console.log(portfolio.technology));
    });
});

//     Portfolio.find((err, portfolio) => {
//         if (err) {
//             console.log(err);
//         }else {
//             let result = portfolio.map(a => a.title);
//             res.render('index', {
//                 title : result,
//                 technology: result.technology
//             });
//         }
//     });
// });


module.exports = router;

