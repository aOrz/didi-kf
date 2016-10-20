var colors = require('colors');
var log = {
error:function (info) {
  console.log(colors.red(info));
  process.exit(0);
},
info:function (info) {
  console.log(colors.info(info));
}
}

module.exports = log;