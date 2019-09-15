const express = require('express');
const app = express();
const HomeController = require('../controllers/home');

const port = 1337

// set app port
app.set('port', port);

//app.use(express.static(__dirname + '../views'));

// set up main routes
app.use(HomeController)

// 404 middleware
app.use((req, res) => {
    res.status(404).send("Unable to find that");
});


module.exports = app;