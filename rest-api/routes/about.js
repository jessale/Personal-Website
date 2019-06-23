const express = require('express');
const router = express.Router();

const About = require('../models/about.js');
const mongoose = require('mongoose');



router.get('/', (req, res) => {
    About.find({},{'_id': 0})
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        });
});

router.patch('/:weight', (req, res, next) => {
    const weight = req.params.weight;
    About.update({firstname : "Florian"}, { $set: {weight : req.params.weight}})
        .exec()
        .then(res.status(200).json({'msg': "ok"}));
    });

    
module.exports = router;

