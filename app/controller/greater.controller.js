var Test = require('mongoose').model('Test');

exports.renderIndex = function (req, res, next) {
    res.render('index', { title: 'Home Page' });
};

exports.list = function (req, res, next) {
    Test.find({date:{$gte:new Date('2017-10-01T04:00:00.000Z')}
      
    },
        function (err, testGreater) {
            if (err) { 
                return next(err);
            }
            else {
                res.json(testGreater);
            }
        });
};
exports.read = function (req, res) {
    res.json(req.tests);
};
