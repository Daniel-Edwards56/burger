const connection = require("./connection.js");
function objToSql(ob) {
  const arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (let key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = `' ${value} '`;
      }

      arr.push(`${key}=${value}`);
    }
  }
  return arr.toString();
}

const orm = {
  selectAll: function (tableName, cb) {
    connection.query("select * from ??", [tableName], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function (burger_name, devoured, cb) {
    const queryString = "INSERT INTO burgers";

    queryString += " (burger_name, devoured) ";
    queryString += "values(?, ?)";
    connection.query(
      queryString,
      [burger_name, devoured],
      function (err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  },
  updateOne: function (tableName, eaten, condition, cb) {
    console.log(eaten);
    const queryString = "UPDATE " + tableName;
    queryString += " SET devoured = " + eaten;
    queryString += " WHERE ";
    queryString += condition;
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
