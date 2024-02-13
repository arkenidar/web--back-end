// http://localhost:3000/

//var createError = require('http-errors');
import createError from "http-errors";

//var express = require('express');
import express from "express";

//var path = require('path');
import path from "path";

//var cookieParser = require('cookie-parser');
import cookieParser from "cookie-parser";

//var logger = require('morgan');
import logger from "morgan";


//var indexRouter = require('./routes/index');
import indexRouter from "./routes/index.js";

//var usersRouter = require('./routes/users');
import usersRouter from "./routes/users.js";

let app = express();
export default app

// for : __dirname
///import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // !!! https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//====================================================

//import { pg_passwd } from "./secrets.js"

var mysql = {}
mysql.client = 'mysql'
mysql.version = '2.18'
mysql.user = "root"
mysql.password = "password"

var postgresql = {}
postgresql.client = "pg"
postgresql.version = "8.11"
postgresql.user = "postgres"
postgresql.password = "postgres"

var db = mysql // mysql or postgresql

import knex_module from "knex"
const knex = knex_module({
  client: db.client, version: db.version,
  connection: {
    host: '127.0.0.1',
    user: db.user,
    password: db.password,
    database: 'knex_test'
  }
})

app.set("knex", knex)

//====================================================

//export default app;
