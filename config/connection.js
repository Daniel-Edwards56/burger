// Node Dependency
var mysql = require("mysql");
const dotenv = require("dotenv");
var connection;
// Call dotenv configuration
dotenv.config();

// For Heroku Deployment vs. Local MySQL Database
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASS,
    database: "burgers_db"
  });
}

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// Export the Connection
module.exports = connection;
