var Test = require('mongoose').model('Test');


exports.list = function (req, res, next) {
    Test.find({date:{$gte:new Date('2016-06-01T04:00:00.000Z'),$lt:new Date('2017-08-01T04:00:00.000Z')}
      
    },
        function (err, testBetween) {
            if (err) { 
                return next(err);
            }
            else {
                res.json(testBetween);
            }
        });
};
exports.read = function (req, res) {
    res.json(req.tests);
};
