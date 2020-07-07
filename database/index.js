const mysql = require('mysql');

const db_config = {
  database: 'harrySQL_menu',
  user: 'root',
  host: '172.17.0.3',
  port: '3306',
};

let connection;

function handleDisconnect() {
  connection = mysql.createConnection(db_config);
  connection.connect((err) => {
    if (err) {
      console.log('db connection error: ', err);
      setTimeout(handleDisconnect, 2000);
    } else {
      console.log('Connected: MySQL Started!');
    }
  });
  connection.on('error', (err) => {
    console.log('db error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

module.exports = connection;

// const pool = mysql.createPool({
//   connectionLimit: 10,
//   database: 'harrySQL_menu',
//   user: 'root',
//   host: '172.17.0.3',
//   port: '3306',
// });
