const mongoose = require('mongoose');
City = mongoose.model('City');
const city = require('../controllers/cities.js')
module.exports = function(app){
    app.get('*');
}