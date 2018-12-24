const connection = require('./mysql.config');

/**
 * @time  2018/12/20 23:33
 * @author  Bill Wang <vuejs@vip.qq.com>
 * @desc  利用Promise回调来控制连接池执行顺序
 */

module.exports = function (sql, options) {
    new Promise((resolve, reject) => {
        connection.getConnection((err, pool) => {
            if (err) {
                reject(err);
            }
            resolve(pool);
        });
    })
        .then((pool) => {
            pool.query(sql, options);
            pool.release();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            console.log('执行成功!');
        });


}
