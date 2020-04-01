import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navi from "./client/components/navbar/navbar";
import Wrapper from "./client/components/wrapper/wrapper";
import About from "./client/components/pages/about";
import Contact from "./client/components/contact/contact";
import Portfolio from "./client/components/pages/portfolio";
import LandingPage from "./client/components/landingPage/landingPage";
import ContactForm from "./client/components/contact/contact";


var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('../routes/index');


var app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

function App() {
  return (
    
    <Router>
    <div className="App">
    <Navi/>
    
    <Wrapper>
          <Route exact path= "/" component={LandingPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          
        </Wrapper>
        <ContactForm />
    </div>
    </Router>
  );
}



export default App;
