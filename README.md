# didi-kf

> 滴滴在线客服-前端命令行工具

## 介绍

滴滴在线客服前端命令行工具，解决的问题：我们在新建页面时需要创建html文件、复制粘贴基础代码、创建js文件、创建 css pages 文件、创建 css 文件、在 pages 里面引用 css、在 html 中引用 css，js 文件
过程复杂。

现在你只需要一行命令 `kf init pageName` 即可完成以上所有工作。

## 你需要了解

window 平台**请使用** `git bash` 等来代替`cmd`

**命令执行目录为** `kf-optimus/src/main/webapp/static`

## 安装

`npm install -g didi-kf`

## 帮助文档

```
 $ kf -h
Usage: kf [options]

命令：
  init  初始化工作文件

选项：
  --title, -t  html 文件标题                       [字符串] [默认值: "客服中心"]
  -h, --help   显示帮助信息                                               [布尔]

示例：
  kf init pageName -t 客服中心  
```