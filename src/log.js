var colors = require('colors');

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

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