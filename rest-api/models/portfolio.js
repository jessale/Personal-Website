const mongoose = require('mongoose');



const portfolioSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    slug: {type: String, slug : "title"},
    description: String,
    technology: Array,
    video: String,
    github: String,
    url: String
}, {
    versionKey: false,
    collection : 'portfolio'
});

let Portfolio = module.exports = mongoose.model('Portfolio', portfolioSchema);

