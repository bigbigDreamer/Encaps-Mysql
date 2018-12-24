# NodeJS中对于Mysql数据库进行简要封装


[![](https://img.shields.io/appveyor/ci/gruntjs/grunt.svg?style=popout)](https://github.com/bigbigDreamer/Encaps-Mysql)
![](https://img.shields.io/github/size/webcaetano/craft/build/phaser-craft.min.js.svg)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badge/)    

#### install dependencies

```bash
npm install
```

#### Use modules

```javascript
const DB = require('./mysql.dao');
```

#### Write your SQL and options

```javascript
const sql = 'insert into student (Sno) values(?)';
const options = ['18'];
DB(sql,options);
```
### 说明

>在连接模块使用了连接池操作，方便多处共享连接。

### mysql.config.js

>用来存放mysql数据库配置以及连接信息

```javascript
/**
 * MySql配置相关
 * host：主机名
 * user：用户名
 * password：密码
 * port：端口号
 * database：目标数据库
 */
```

### mysql.dao.js

>封装对于sql与数据库交互内容

>使用Promise方案解决异步回调问题，避免陷入回调地狱

>配合Node.JS中的CommonJS规范，对模块进行管理

### 结束语

>如果你觉得写的还可以的话，可以简单的给一颗Star，如果还可以改进，可以PR。

### License
>[MIT](https://github.com/bigbigDreamer/Encaps-Mysql/blob/master/LICENSE ).Copyright (c) 2018 Bill Wang