const mysql = require('mysql2');
require('dotenv').config()

// Create the connection pool. The pool-specific settings are the defaults
const connect = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// For pool initialization, see above
connect.getConnection(function (err, conn) {
    // Do something with the connection
    connect.query('SELECT * FROM users', function (err, rows) {
        if (err) {
            console.log('ERRORR connected database',err)
        }

        console.log('Connected database successfully')
    });

    // Don't forget to release the connection when finished!
    connect.releaseConnection(conn);
});

module.exports = connect