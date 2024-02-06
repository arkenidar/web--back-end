
//var express = require('express');
import express from "express";

let router = express.Router();
export default router

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

//export default router;
