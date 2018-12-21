const DB = require('./mysql.dao');
const sql = 'insert into student (Sno) values(?)';
const options = ['18'];
DB(sql,options);