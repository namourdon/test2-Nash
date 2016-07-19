var  config=require('./config'),
express = require('express'),
morgan = require('morgan'),
compress= require('compression'),
bodyParser= require('body-parser'),
methodOverride=require('method-override'),
session= require('express-session');

module.exports = function(){
    var app = express();
    
    if(process.env.NODE_ENV==='development'){
        app.use(morgan('dev'));
        
    }
    else if(process.env.NODE_ENV==='production'){
        app.use(compress());
    }
    app.use(bodyParser.urlencoded({
        extended:true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
   
    
    app.set('views','./app/view');
    app.set('view engine','ejs')
    //require('../app/routes/index.js')(app);
    //require('../app/routes/thank.routes.js')(app);
    //require('../app/routes/users.server.routes.js')(app);
    require('../app/route/route.js')(app);
     app.use(express.static('./public'));
     app.use(session({
         saveUninitialized:true,
         resave:true,
         secret:config.sessionSecret
     }));
    return app;
};