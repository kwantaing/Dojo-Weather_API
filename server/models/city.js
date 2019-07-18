const mongoose = require('mongoose')

module.exports = function(app){
    var CitySchema = new mongoose.Schema({
        city_name: {type:String}
    })
    mongoose.model('City',CitySchema);
    
}