const mongoose = require('mongoose');



const portfolioSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    slug:  String,
    description: String,
    challenge: String,
    technology: Array,
    features: Array,
    video: String,
    img: String,
    github: String,
    url: String
}, {
    versionKey: false,
    collection : 'portfolio'
});

let Portfolio = module.exports = mongoose.model('Portfolio', portfolioSchema);

