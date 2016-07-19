var mongoose= require('mongoose'),
Schema = mongoose.Schema;

var TestSchema= new Schema({
    date:
   {type:Date,
    default:Date.now}
,
    money:Number,
    like:Number,
    views:Number,
    share:Number
});
var Test=mongoose.model('Test',TestSchema);