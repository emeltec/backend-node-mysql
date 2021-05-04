const mysql = require('mysql');

const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "apirest_db"
});

conexion.connect(function(err) {
  if (err) throw console.log("Connection failed") + err;
  console.log("Connected!");
});


module.exports = conexion;