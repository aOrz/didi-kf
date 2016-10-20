var glob = require('glob');
var fs = require('fs');
var curPath = process.cwd();
var log = require('./log.js');

var pagesPath = curPath + '/css/pages';
var modulePath = curPath + '/css/module';
var jsPath = curPath + '/js';
var htmlPath = curPath + '/'
module.exports = {
  /**
   * 检查目录
   * @Author   Wang.Zhen
   * @DateTime 2016-10-20T07:50:13+0800
   * @param    {[type]}                 name 新文件名字
   * @param    {[type]}                 arr  文件集合
   * @return   {[type]}                      [description]
   */
checkFiles:function (name,arr,force) {
  var fsExists = fs.existsSync(pagesPath) + fs.existsSync(modulePath) + fs.existsSync(jsPath);
  if (fsExists != 3) {
    log.error('亲！是不是用错目录了哦！');
  }
  if (arr instanceof Array && !force) {
    if (arr.indexof('html') > -1) {
      var files = glob.sync(htmlPath + '/' + name + '.html');
      if (files.length > 0) {
        log.error('html 文件已存在，起个其他的名字吧！');
      }
    }
    if (arr.indexof('css') > -1) {
      var pages = glob.sync(pagesPath + '/' + name + '.css');
      var module = glob.sync(modulePath + '/' + name + '.css');
      if (files.length > 0) {
        log.error('css 文件已存在，起个其他的名字吧！');
      }
    }

    if (arr.indexof('js') > -1) {
      var files = glob.sync(jsPath + '/' + name + '.js');
      if (files.length > 0) {
        log.error('js 文件已存在，起个其他的名字吧！');
      }
    }
  }
},
copyFile:function () {
  
}
};
