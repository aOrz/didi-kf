var glob = require('glob');
var path = require('path')
var fs = require('fs');
var curPath = process.cwd();
var log = require('./log.js');
var xtpl = require('xtpl');

var pagesPath = curPath + '/css/pages';
var modulePath = curPath + '/css/module';
var jsPath = curPath + '/js';
var htmlPath = curPath;
module.exports = {
  /**
   * 检查目录
   * @Author   Wang.Zhen
   * @DateTime 2016-10-20T07:50:13+0800
   * @param    {[type]}                 name 新文件名字
   * @param    {[type]}                 arr  文件集合
   * @return   {[type]}                      [description]
   */
  init:function (name,kind,force,data) {
    var self = this;
    self.humpName = name;
    self.name = name.replace(/([A-Z])/g,'-$1').toLowerCase();
    // console.log(self.name)
    // process.exit(0);
    if (kind == null || kind == undefined) {
      kind = ['html','css','js'];
    }
    self.data = data;
    self.data.name = self.name;
    self.arr = kind;
    self.force = force;
  },
  checkFiles:function () {
    var self = this;
    var fsExists = fs.existsSync(pagesPath) + fs.existsSync(modulePath) + fs.existsSync(jsPath);
    if (fsExists != 3) {
      log.error('亲！是不是用错目录了哦！');
    }
    if (self.arr instanceof Array && !self.force) {
      if (self.arr.indexOf('html') > -1) {
        var files = glob.sync(htmlPath + '/' + self.humpName + '.html');
        if (files.length > 0) {
          log.error('html 文件已存在，起个其他的名字吧！');
        }
      }
      if (self.arr.indexOf('css') > -1) {
        var pages = glob.sync(pagesPath + '/' + self.name + '-pages.css');
        var module = glob.sync(modulePath + '/' + self.name + '.css');
        if (pages.length > 0) {
          log.error('css pages 文件已存在，起个其他的名字吧！');
        }
        if (module.length > 0) {
          log.error('css module 文件已存在，起个其他的名字吧！');
        }
      }

      if (self.arr.indexOf('js') > -1) {
        var files = glob.sync(jsPath + '/' + self.name + '.js');
        if (files.length > 0) {
          log.error('js 文件已存在，起个其他的名字吧！');
        }
      }
    }
  },
  copyFile:function () {
    var self = this;
    if (self.arr instanceof Array && !self.force) {
      if (self.arr.indexOf('html') > -1) {
        xtpl.renderFile(path.resolve(__dirname, '..', 'template/index.html'),{
          title: self.data.title,
          name: self.data.name
        },function(error,content){
          fs.writeFile(curPath + '/' + self.humpName + '.html', content, function (error) {
            if (!error) {
              log.info(self.humpName + '.html 创建完成。');
            }else {
              log.error(error);
            }
          })
          if (error) {
            log.error(error);
          }
        });
      }
      if (self.arr.indexOf('css') > -1) {
        xtpl.renderFile(path.resolve(__dirname, '..', 'template/css/pages/index.css'),{
          title: self.data.title,
          name: self.data.name
        },function(error,content){
          fs.writeFile(pagesPath + '/' + self.name + '-pages.css' , content, function (error) {
            if (!error) {
              log.info(self.name + '-pages.css 创建完成');
            }else {
              log.error(error);
            }
          });
          if (error) {
            log.error(error);
          }
        });

        var readable = fs.createReadStream(path.resolve(__dirname, '..', 'template/css/module/index.css'));
        // 创建写入流
        var writable = fs.createWriteStream(modulePath + '/' + self.name + '.css');   
        // 通过管道来传输流
        readable.pipe(writable);
        log.info(self.name + '.css 创建完成。');
      }

      if (self.arr.indexOf('js') > -1) {
        readable = fs.createReadStream(path.resolve(__dirname , '..', 'template/js/index.js'));
        // 创建写入流
        writable = fs.createWriteStream(jsPath + '/' + self.name + '.js');   
        // 通过管道来传输流
        readable.pipe(writable);
        log.info(self.name + '.js 创建完成。');
      }
    }
  }
};
