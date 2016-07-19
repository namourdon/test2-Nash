var Test = require('mongoose').model('Test');


exports.list = function (req, res, next) {
    Test.find({date:{$gte:new Date('2017-01-01T00:00:00.000Z'),$lt:new Date('2017-02-01T00:00:00.000Z')}
      
    },
        function (err, testEqual) {
            if (err) { 
                return next(err);
            }
            else {
                res.json(testEqual);
            }
        });
};
exports.read = function (req, res) {
    res.json(req.tests);
};
