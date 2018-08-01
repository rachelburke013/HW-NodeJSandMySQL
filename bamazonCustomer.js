var mysql = require("mysql");
var prompt = require("prompt");

var connection = mysql.createConnection({
    host : "localhost",
    port: 3306,
    user : "root",
    password : "root",
    database : "bamazon"
});

connection.connect(function(err){
    if(err){
    console.log('Error connecting to database');
    return;
    }
    console.log('Connection established');

var transaction = {
     properties: {
        ID: {
        message: "Please enter the ID of the product you would like to buy.",
        pattern: /^[0-9][0-9]$|^[0-9]$/,
        required: true },

        howMany: {
        message: "Please enter how many you would like to buy.",
        pattern: /^[0-9][0-9]$|^[0-9][0-9][0-9]$/,
        required: true }
    }
};

// Launch the App
var startApp = function(){
    connection.query("SELECT * FROM products", function(err, result) {
        if (err) throw err;
        return (displayProducts(result));
      
      });
}

    // Display the products table
    var displayProducts = function (products){
        console.log("Check out our product listing:");
        for (var i = 0; i < products.length; i++) {
            var productsResults = "\r\n"+
            "Item ID: " + products[i].item_id+"\r\n"+
            "Product: " + products[i].product_name+"\r\n"+
            "Department: " + products[i].department_name+"\r\n"+
            "Price: $ "+ products[i].price+"\r\n"+
            "Quantity In Stock" + products[i].stock_quantity;
            console.log(productsResults);
        }
        enterID();
    }

    // Begin the Transaction- ask for item ID and quantity
    var enterID = function(){
        prompt.start();
        console.log("Please enter the Item ID of the product you would like to buy.");

        prompt.get(transaction, function (err, result) {
            if (err){
                console.log(err)
            }
            console.log(result);
            var enterID = parseInt(result.ID);
            var userChoiceHowMany = parseInt(result.howMany);
            console.log("id=" + enterID + " how many=" + userChoiceHowMany);

            // Check inventory
            var checkInventory = function(){
                connection.query('SELECT * FROM products WHERE item_id =' + enterID, function(err, result) {
                    if (err) throw err;
                    console.log(result);

                    var userWantsToBuy = userChoiceHowMany;
                    var productInventory = result[0].stock_quantity;
                    var productsPrice = result[0].price;
                    var isInStock = productInventory - userWantsToBuy;
                    var totalCost= productsPrice * userWantsToBuy;

                    if (userWantsToBuy > productInventory || productInventory === 0){
                        console.log("We're sorry. We don't have sufficent inventory to fulfill your order. Please reduce item quantity and try again."+"\r\n"+"\r\n");
                        enterID();
                    } else {
                        console.log("There are "+result[0].stock_quantity+" of "+result[0].product_name);
                        console.log("You are purchasing "+ userWantsToBuy +" "+result[0].product_name+"s at $"+ result[0].price+" per item.");
                        console.log("Your total is $"+totalCost);
                        connection.query('UPDATE Products SET stock_quantity = '+isInStock+' WHERE item_id ='+enterID, function(err, result){
                        if (err) throw err;
                            connection.query('SELECT item_id, product_name, department_name, price, stock_quantity FROM products WHERE item_id ='+enterID, function(err, result){
                                console.log(result);
                            }); 
                        });
                    }
                  });
            };
            checkInventory();
        });
    }

// Start the app again
startApp();
});