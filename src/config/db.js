const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('database');

const db = lowdb(adapter);

db.defaults({ user: [], log: [] }).write();

module.exports = db;
