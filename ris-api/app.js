var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const cors = require('cors')
require('dotenv').config();

var usersRouter = require('./routes/users');
const adminAuthRouter = require('./routes/auth');

var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 解决跨域
app.use(cors());

app.use('/users', usersRouter);
app.use('/auth', adminAuthRouter);


module.exports = app;
