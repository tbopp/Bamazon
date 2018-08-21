// Initializing global variables
const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "PASSWORD",
    database: "bamazon"
  });

  // Initial function to run upon app execution
  connection.connect(function(err) {
    if (err) throw err;
   runSale();
  });

  // Function to display all objects
  function showProducts() {
    const query = "SELECT * FROM products";
    connection.query(query, function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(
                "\nItem ID: " + res[i].item_id + 
                "\nProduct Name: " + res[i].product_name + 
                "\nPrice: " + "$" + res[i].price + "\n*~*~*~*~*~*~*~\n")
          }
    })
  };

  function runSale() {
    // Displays all products in the store  
    showProducts();
    console.log("WELCOME TO BAMAZON!")
    inquirer.prompt([
        {
          name: "item",
          type: "input",
          message: "Enter an Item ID to begin your purchase: ",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        },
        {
          name: "quantity",
          type: "input",
          message: "Enter an item quantity: ",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }
      ])
      .then(function(answer) {
        const queryItem = "SELECT item_id, product_name, price, stock_quantity FROM products WHERE item_id=?";
        
        connection.query(queryItem, answer.item, function(err, res) {
            if (err) throw err;
          for (var i = 0; i < res.length; i++) {
            console.log(
              "\nItem ID: " +
                res[i].item_id +
                "\nProduct Name: " +
                res[i].product_name +
                " || Artist: " +
                res[i].artist +
                " || Year: " +
                res[i].year
            );
          }
          ();
        });
      });
  }