//var express = require('express');
//var router = express.Router();
import express from "express";
let router = express.Router();
export default router

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

router.get('/', async function (req, res, next) {
  const output_rows = await knex
    .from('newtable')
    .select('column1', 'column2')
  res.render('index', { items: output_rows, title: 'Express nel corso NodeJS !!! restart 2' })
});

/*
CREATE TABLE public.newtable (
    column1 character varying,
    column2 character varying
);
*/

/*
INSERT INTO public.newtable(
  column1, column2)
  VALUES ('PostgreSQL (BSD licensed)', 'database server system');

INSERT INTO public.newtable(
  column1, column2)
  VALUES ('ExpressJS (from OpenJS foundation)', 'HTTP server that is programmable by JavaScript');

INSERT INTO newtable (column1, column2)
VALUES (
    'column1:character varying',
    'column2:character varying'
  );
*/
/*
async function main_rows() {
  const rows = await knex
    .from('newtable')
    .select('column1', 'column2')
  //console.log(rows)

  //let ejs = require('ejs');
  //import {render as ejs_render} from "ejs";
  //
  //let people = ['geddy', 'neil', 'alex'];
  //let html = ejs_render('<%= people.join(", "); %>', { people: people });
  //console.log(html);

  let template = `<ul>
  <% for(let item of items) { %>
    <li>
      <strong><%= item.column1 %></strong>: <%= item.column2 %>
    </li>
  <% } %>
</ul>`
  //console.log(ejs_render(template, { items: rows }))

  await knex.destroy()

  //return ejs_render(template, { items: rows });

  return rows

}
*/

/*
// old answer // FROM: https://stackoverflow.com/questions/34094806/return-from-a-promise-then
function justTesting() {
  return promise.then(function(output) {
    return output + 1;
  });
}
*/

/*
function rows_from_knex(){
  // let rows = await main_rows();
  return knex
    .from('newtable')
    .select('column1', 'column2')
    //.then(function(output) { return output; });
}
*/

/* GET home page. */
/*
router.get('/', function (req, res, next) {
  // // http://localhost:3000/

  /--
  let items = [
    { column1: "column1", column2: "column2" },
    {
      column1: "ExpressJS (from OpenJS foundation)",
      column2: "HTTP server that is programmable by JavaScript"
    },
    {
      column1: "PostgreSQL (BSD licensed)",
      column2: "database server system"
    },
  ]
  --/
  ///-
  ////let rows = await main_rows();
  let rows = rows_from_knex();
  ////res.render('index', { items: rows, title: 'Express nel corso NodeJS !!! restart 2' });
  rows.then(function(output_rows){
    res.render('index', { items: output_rows, title: 'Express nel corso NodeJS !!! restart 2' });
  });
  //-/
  knex
    .from('newtable')
    .select('column1', 'column2')
    .then(function(output_rows){
      res.render('index', { items: output_rows, title: 'Express nel corso NodeJS !!! restart 2' })
    })
});
*/

//export default router;
