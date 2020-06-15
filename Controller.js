Stopwatch = require('./Model');

var Create = function(req,res){
    
    var watch = new Stopwatch();
    watch.time = req.body.time;
    watch.date = req.body.date;
    
    watch.save(function(err,todo){
        if(err)
        {
            res.send(err);
        }
        else
        {
            res.json({
                message:"value added",
                data : watch
            });
        }
    });

};

var Retrieve = function(req,res){
    Stopwatch.get(function(err,result)
    {
        if(err)
        {
            res.send(err);
        }
        else{
            res.json(
                {
                    status:"data fetched",
                    message :"gets value",
                    data:result
                }
            );
        }
    });
};

var Delete = function(req,res){
    Stopwatch.remove({_id : req.body.stopwatch_id},function(err,result){
        if(err)
            res.send(err)
        else{
            res.json(
                {
                    message:"Deleted successfully",
                    data : result

                }
            );
        }
    });
};
var DeleteAll = function(req,res)
{
    Stopwatch.remove({},function(err,result)
    {
        if(err)
            res.send(err)
        else{
            res.json(
                {
                    message:"All fields Deleted successfully",
                    data : result

                }
            );
        }

    })
};
exports.Create = Create;
exports.Retrieve = Retrieve;
exports.Delete = Delete;
exports.DeleteAll = DeleteAll;