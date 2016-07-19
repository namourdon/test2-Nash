var testGreater= require('../../app/controller/greater.controller');
var testLess= require('../../app/controller/less.controller');
var testBetween= require('../../app/controller/between.controller');
var testEqual= require('../../app/controller/equal.controller');

module.exports= function (app) {
   
    app.route('/greater').get(testGreater.list);
    app.route('/').get(testGreater.renderIndex);
    app.route('/less').get(testLess.list);
    app.route('/between').get(testBetween.list);
    app.route('/equal').get(testEqual.list);
   
};