#!/usr/bin/env node

var Http = require('http'),
    Stack = require('stack'),
    TopCube = require('../lib/index');
  var express = require('express');
var app = express();

app.use(express.static(__dirname + "/www", "index.html"));
app.listen(7569)
var client = TopCube({
	  u: 'http://localhost:7569',
	  n: 'My webapp',
	  w: 1280,
	  h: 1024
	});
