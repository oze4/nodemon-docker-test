const express = require('express');
const app = express();
const HomeController = require('../controllers/home');

const port = 1337;
const ip = '0.0.0.0';

// set app port
app.set('port', port);

// set app ip
app.set('ip', ip);

// set up main routes
app.use(HomeController)

// 404 middleware
app.use((req, res) => {
    res.status(404).send("Unable to find that");
});


module.exports = app;
