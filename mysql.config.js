/**
 * @time  2018/12/20 19:56
 * @author  Bill Wang <vuejs@vip.qq.com>
 * @desc  MySql连接池
 */

const mysql = require('mysql');
//创建连接池
/**
 * MySql配置相关
 * host：主机名
 * user：用户名
 * password：密码
 * port：端口号
 * database：目标数据库
 */
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1826001146',
    port: 3306,
    database: 'student'
});
module.exports = connection;
