//SERVER IS CREATED ...

require('./config/db');

// import express (after npm install express)
var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
const path = require("path");
var routes=require('./routes/userRoutes');

//const session = require('express-session');
mongoose.set('useCreateIndex', true);

// create new express app and save it as "app"
const app = express();
app.use("/uploads", express.static(path.join(__dirname,"/uploads")));
const cors = require("cors");
app.use(cors({origin:'http://localhost:4200'}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//for providing permission to backend for accepting data

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
  });

//Default path that open the routes(server side routing) middleware for all routes of the app
app.use('/',routes);


// server configuration
const port=process.env.PORT || 3000


// make the server listen to requests
app.listen(port,()=>{
    console.log("Server is running at http://localhost:"+port);
});
