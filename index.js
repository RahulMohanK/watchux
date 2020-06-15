let express = require('express');
let mongoose = require('mongoose');
let bodyParser= require('body-parser');
let router = require('./router');
var cors = require('cors');
var app = express();
var port = process.env.PORT || 8000;  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended :true
}));
app.use(cors());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8000/api/stopwatch"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

mongoose.connect('mongodb://localhost/stopwatch',
{useUnifiedTopology: true,
    useNewUrlParser: true   }
);

var db = mongoose.connection;
if(db)
{
    console.log('good');
}
else
{
    console.log('bad');
}
app.get('/',function(req,res){
    res.send("Ok")
    // res.redirect('/api');
});
 app.use('/api',router);
app.listen(port,function(err,result){
    if(err)
        console.log(err);
    console.log(port);

});
