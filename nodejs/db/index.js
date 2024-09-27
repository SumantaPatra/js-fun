const {Client} = require('pg');

const connection = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"1234",
    database:"demo"
})

module.exports = connection;