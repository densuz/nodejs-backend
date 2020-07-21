var mysql = require('mysql');

//Membuat koneksi  ke database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_gulajahe'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql terkoneksi');
});

module.exports = conn;