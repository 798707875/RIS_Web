var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const cors = require('cors')
require('dotenv').config();

const adminAuth = require('./middlewares/admin-auth')
const usersRouter = require('./routes/users');
const adminAuthRouter = require('./routes/auth');
const users11Router = require('./routes/client/users');

var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 解决跨域
app.use(cors());

app.use('/users', usersRouter);
app.use('/auth', adminAuthRouter);
app.use('/client/users',adminAuth, users11Router);

module.exports = app;
