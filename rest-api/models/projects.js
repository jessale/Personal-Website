const mongoose = require('mongoose');


const projectsSchema = mongoose.Schema({
    projectname : String,
    describtion : String,
    categorie : String,
    previewimg : String,
    url: String,
    date: String
    }, {
    versionKey: false,
    collection : 'projects'
});

module.exports = mongoose.model('Projects', projectsSchema);

