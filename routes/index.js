var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // // http://localhost:3000/

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
  res.render('index', { items, title: 'Express nel corso NodeJS !!! restart 2' });
});

module.exports = router;
