const mysql = require('mysql');

const connection = mysql.createConnection({
  database: 'harrySQL_menu',
  user: 'root',
  host: '172.17.0.4',
  port: '3306',
});

connection.connect((err) => {
  if (err) {
    console.log('db connection error: ', err);
  } else {
    console.log('Connected: MySQL Started!');
  }
});

module.exports = connection;
