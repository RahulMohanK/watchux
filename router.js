var router = require('express').Router();

router.get('/',function(req,res){
    res.json({
        status:'okay',
        message : 'connected'
    });
});

var controller = require('./Controller');
router.route('/stopwatch')
.get(controller.Retrieve)
.post(controller.Create);

router.route('/stopwatch/delete/')
.post(controller.Delete);
router.route('/stopwatch/deleteall/')
.get(controller.DeleteAll);


module.exports = router;