#!/usr/bin/env node
var path = require('path');
var curPath = process.cwd();
var colors = require('colors');
var kf = require('../src/index.js');
var log = require('../src/log.js');

var yas = require('yargs')
    .usage('Usage: kf [options]')
    .example('kf init pageName -t 客服中心','创建文件')
    .option('title', {
      alias : 't',
      demand: false,
      default: '客服中心',
      describe: 'html 文件标题',
      type: 'string'
    })
    .help('h')
    .alias('h', 'help')
    .command('init', '初始化工作文件', function (yargs) {
       var argv = yargs
       .reset()
       .default({t: '客服中心'})
       .alias('t', 'title')
       .argv;
      if (!argv._[1]) {
        log.error('请输入文件名哦！');
      }
      kf.init(argv._[1], null, false, {
        title:argv.title
      });
      kf.checkFiles();
      kf.copyFile()
    })
    .argv;