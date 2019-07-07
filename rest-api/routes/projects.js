const express = require('express');
const router = express.Router();

const Projects = require('../models/projects.js');
const mongoose = require('mongoose');



router.get('/', (req, res) => {
    Projects.find({})
        .exec()
        .then(docs => {
            res.status(200).json(docs);
        });
});

// create slugs
function slug(text) {
    let myText = text.toString().toLowerCase()
        .replace(/\s+/g, '-')        // Replace spaces with -
        .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
        .replace(/\-\-+/g, '-')      // Replace multiple - with single -
        .replace(/^-+/, '')          // Trim - from start of text
        .replace(/-+$/, '');
    return myText; 
} 


router.post('/', (req, res, next) => {
    const project = new Projects({
        projectname :  req.body.projectname,
        describtion : req.body.describtion,
        categorie : req.body.categorie,
        previewimg : req.body.previewimg,
        url: req.body.url,
        date: req.body.date
    });
    res.status(200).json({msg: 'worked'});
});

router.patch('/:weight', (req, res, next) => {
    const weight = req.params.weight;
    Projects.update({firstname : "Florian"}, { $set: {weight : req.params.weight}})
        .exec()
        .then(res.status(200).json({'msg': "ok"}));
});


module.exports = router;

