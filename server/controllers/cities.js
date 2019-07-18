var express = require('express');
var app = express();
const mongoose = require('mongoose');
City = mongoose.model('City');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
module.exports = {
    
}