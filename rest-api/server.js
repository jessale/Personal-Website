const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const pug = require('pug');
const path = require('path');

const aboutRoute = require('./routes/about.js');
const serverRoute = require('./routes/serverinfo.js');
const projectsRoute = require('./routes/projects.js');
const portfolioRoute = require('./routes/portfolio.js');
const exphbs = require('express-handlebars');

mongoose.connect('mongodb://localhost:27017/info', {useNewUrlParser : true});

//set views path
app.set('views', path.join(__dirname, './views'));

//set up express handlebars
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, './public')));



// Body Praser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//cors
app.use(cors());

//setting routs
app.use('/api/about', aboutRoute);
app.use('/api/serverinfo', serverRoute);
app.use('/api/projects', projectsRoute);

//template routes
app.use('/programs/projects', portfolioRoute);

app.use((req, res, next) => {
    const error = new Error('404 Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({msg: error.message});
});


app.listen(3000);

