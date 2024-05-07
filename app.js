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
app.use(function (request, response, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
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
mysql.client = 'mysql2'
mysql.user = "username"
mysql.password = "password"
mysql.database = "express_backend"

var postgresql = {}
postgresql.client = "pg"
postgresql.version = "8.11"
postgresql.user = "postgres"
postgresql.password = "postgres"
postgresql.database = "express_backend"

var db = mysql // mysql or postgresql

import knex_module from "knex"
const knex = knex_module({
  client: db.client, version: db.version,
  connection: {
    host: "127.0.0.1",
    user: db.user,
    password: db.password,
    database: db.database
  }
})

app.set("knex", knex)

await knex.schema.hasTable("chat_messages").then(function (exists) {

  if (exists) return

  return knex.schema.createTable('chat_messages', function (table) {
    table.increments('id').primary()
    table.string('message_text').notNullable()
    table.string('sender').notNullable()
    table.timestamp('creation_timestamp').defaultTo(knex.fn.now())
  })
})

// http://localhost:3000/

//====================================================

//export default app;
