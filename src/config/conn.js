const mysql = require('mysql2');
require('dotenv').config();
const pool = mysql.createPool({
    host: process.env.HOST,
    user:,
    password:,
    database:,
    port:,
    connectionLimit:,
    waitForConnections:,
    queueLimit:,
});