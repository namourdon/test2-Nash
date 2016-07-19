var Test = require('mongoose').model('Test');


exports.list = function (req, res, next) {
    Test.find({date:{$lt:new Date('2016-08-01T04:00:00.000Z')}
      
    },
        function (err, testLess) {
            if (err) { 
                return next(err);
            }
            else {
                res.json(testLess);
            }
        });
};
exports.read = function (req, res) {
    res.json(req.tests);
};
