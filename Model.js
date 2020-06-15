var mongoose  = require('mongoose');

var stopwatchSchema = mongoose.Schema(
    {
        time :{
            type :Object,
            required : true
        },
        date :{
            type : Date,
            default:Date.now,
            
        }
    }
);

var Model = mongoose.model('stopwatch',stopwatchSchema);
module.exports = Model;

Model.get = function(callback,limit){
    Model.find(callback).limit(limit);

};