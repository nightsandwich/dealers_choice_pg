const pg = require('pg');
const client = new pg.Client('postgres://localhost/foosers');

client.connect();

module.exports = client;