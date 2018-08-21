const mysql = require("mysql");
// const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "PASSWORD",
    database: "bamazon"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    let query = "SELECT * FROM products";
    connection.query(query, function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(
                "\nItem ID: " + res[i].item_id + 
                "\nProduct Name: " + res[i].product_name + 
                "\nDepartment Name: " + res[i].department_name + 
                "\nPrice: " + "$" + res[i].price + "\n*~*~*~*~*~*~*~\n")
          }
    })
  });