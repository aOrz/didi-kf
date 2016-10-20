var path = require('path');
var curPath = process.cwd();
var colors = require('colors');
var xtpl = require('xtpl');
var yargs = require('yargs');
var glob = require('glob');
var kf = require('../src/index.js');

glob('*',{nodir: false},function (error,files) {
  console.log(files)
})
xtpl.renderFile(path.resolve(curPath,'x.tpl'),{
    title:1
},function(error,content){
  console.log(content);
  console.log(error);
});