const mysql = require('mysql');
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'sincera124',
    database: 'my_db_01'
});

// db.query('SELECT 1', (err, result) => {
//     if (err) return console.log(err.message);
//     console.log(result);
// });

// const sqlStr = 'select * from users';
// db.query(sqlStr, (err, result) => {
//     if (err) return console.log(err.message);
//     console.log(result);
// });

// const user = {
//     username: 'SpiderMan',
//     password: 'pcc123'
// };
//
// const sqlStr = 'INSERT INTO users (username, password) values (?, ?)';
// db.query(sqlStr, [user.username, user.password], (err, result) => {
//     if (err) return console.log(err.message);
//     if (result.affectedRows === 1) return console.log('插入数据成功...');
// });

// const user = {
//     username: 'SpiderMan2',
//     password: 'pcc12345'
// };
// const sqlStr = 'INSERT INTO users SET ?';
//
// db.query(sqlStr, user, (err, result) => {
//     if (err) return console.log(err.message);
//     if (result.affectedRows === 1) return console.log('插入数据成功...');
// });

// const user = {
//     id: 6,
//     username: 'bbbbb',
//     password: '22222222'
// };
// const sqlStr = 'update users set ? where id=?';
//
// db.query(sqlStr, [user,user.id], (err, result) => {
//     if (err) return console.log(err.message);
//     if (result.affectedRows === 1) return console.log('更新数据成功...');
// });

const sqlStr = 'delete from users where id=?';

db.query(sqlStr, 6, (err, result) => {
    if (err) return console.log(err.message);
    if (result.affectedRows === 1) return console.log('删除数据成功...');
});