var path = require('path');
var curPath = process.cwd();

var xtpl = require('xtpl');

xtpl.renderFile(path.resolve(curPath,'x.tpl'),{
    title:1
},function(error,content){
  console.log(content);
  console.log(error);
});