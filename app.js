var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//Using Nodemailer
const nodemailer = require("nodemailer");
require("dotenv").config();

var indexRouter = require('./controllers/index');
var usersRouter = require('./controllers/users');
var contactRouter = require('./controllers/contact');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contact', contactRouter)


//This is the address where the post formData will be recieved for the Contact page.
app.post('/api',(req,res)=>{

  console.log(req.body);

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USERNAME, 
      pass: process.env.PASSWORD, 
    }
  })

  // send mail with defined transport object
  const mailOptions = {
    from: req.body.email , // sender address
    to: 'mukulhooda2002@gmail.com', // list of receivers
    subject: 'Message from ' + req.body.email + ': ' + req.body.subject, // Subject line
    text: req.body.message // plain text body
  }


    transporter.sendMail(mailOptions, (error, mailOptions)=>{
      if(error){
        console.log(error)
        res.send('error');
      }else{
        console.log('Email Sent Successfully.')
        res.send('success')
      }
    })

})


  



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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


module.exports = app;

