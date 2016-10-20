#!/usr/bin/env node
var path = require('path');
var curPath = process.cwd();
var colors = require('colors');
var yas = require('yargs').argv;
var kf = require('../src/index.js');
console.log(process.argv)
kf.init('aA', null, false, {
  title:'sssss'
});
console.log(__dirname)
kf.checkFiles();
kf.copyFile()