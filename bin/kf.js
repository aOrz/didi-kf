#!/usr/bin/env node
var path = require('path');
var curPath = process.cwd();
var colors = require('colors');
var kf = require('../src/index.js');
var log = require('../src/log.js');

var yas = require('yargs')
    .command('init', '文件创建中....', function (yargs) {
       var argv = yargs.reset().argv;
      if (!argv._[1]) {
        log.error('请输入文件名哦！');
      }
      kf.init(argv._[1], null, false, {
        title:'sssss'
      });
      kf.checkFiles();
      kf.copyFile()
    })
    .argv;