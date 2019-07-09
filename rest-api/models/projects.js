const mongoose = require('mongoose');


const projectsSchema = mongoose.Schema({
    projectname : String,
    description : String,
    categorie : String,
    previewimg : String,
    date: String,
    slug: String,
    order: Number
    }, {
    versionKey: false,
    collection : 'projects'
});

module.exports = mongoose.model('Projects', projectsSchema);

