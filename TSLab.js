"use strict";
//Declare an array called mountains which is an array of type Mountain
const mountains = [
    {
        name: 'Kilimanjaro',
        height: 19341
    },
    {
        name: 'Everest',
        height: 29029
    },
    {
        name: 'Denali',
        height: 20310
    }
];
console.log(mountains);
// Declare a function called findNameOfTallestMountain. It takes one parameter, an
// array of Mountain objects. It returns a string, the name of the tallest mountain in the
// given array. If the array argument is empty, return an empty string ("").
//note: sadwiches
function findNameOfTallestMountain(mtns) {
    let nameOfTallestMountain = "";
    let tallest = 0;
    for (const mtn of mtns) {
        if (mtn.height > tallest) {
            tallest = mtn.height;
            nameOfTallestMountain = mtn.name;
        }
        ;
    }
    ;
    return nameOfTallestMountain;
    //  let tallest : number = 0;
    //  mountains.forEach(function(object){
    //      let tallest : number = object.height;
    //      if(tallest === 0 || (object.height > object.height)){
    //          tallest = object;
    //      };
    //      console.log(tallest);
    //      return tallest;
    //  });
}
;
let tallestMountain = findNameOfTallestMountain(mountains);
console.log("Tallest Mountain is " + tallestMountain);
;
// Declare an array called products which is an array of type Product.
// Fill the array with a few products of your own choosing.
const products = [
    {
        name: 'Tent',
        price: 120
    },
    {
        name: 'Kayak',
        price: 500
    },
    {
        name: 'Rations',
        price: 50
    },
    {
        name: 'Tools',
        price: 50
    },
    {
        name: 'boots',
        price: 100
    },
];
// Declare a function called calcAverageProductPrice. It takes one parameter, an array
// of Product objects. It returns a number, the average price of all the products provided
// as an argument. If the array argument is empty, return 0.
function calcAverageProductPrice(products) {
    let price = 0;
    for (const product of products) {
        for (let i = 0; i < products.length; i++) {
            price += product.price;
        }
    }
    let avgPrice = price / products.length;
    console.log(avgPrice);
    return avgPrice;
}
;
// Call calcAverageProductPrice, passing it your products array as an argument.
// Store the result of the function call (the return value) in a variable and then console.log
// the variable.
let averagePrice = calcAverageProductPrice(products);
console.log("Average price is " + averagePrice);
;
//Declare an array called inventory which is an array of type InventoryItem. Fill the array.
const inventory = [
    {
        product, : .name, 'motor': ,
        product, : .price, 10.00: ,
        quantity: 10,
    },
    {
        product, : .name, 'sensor': ,
        product, : .price, 12.50: ,
        quantity: 4,
    },
    {
        product, : .name, 'LED': ,
        product, : .price, 1.00: ,
        quantity: 20
    },
];
//Declare a function called calcInventoryValue. It takes one parameter, an array of
// InventoryItem objects. It returns a number, the total value of all the products in the
// inventory array provided as an argument. If the array argument is empty, return 0.
// ○ This is calculated as follows: For each InventoryItem take the product price times
// the quantity. Add these together for all the items. For the above data, the total
// will be 10.00 x 10 + 12.5 x 4 + 1.00 * 20 = 170
function calcInventoryValue(items) {
    let totalValue = 0;
    for (const inventories of inventory) {
        for (let i = 0; i < inventory.length; i++) {
            totalValue += (inventory.product.price * inventory.quantity);
        }
    }
    console.log(totalValue);
    return totalValue;
}
//Call calcInventoryValue, passing it your products array as an argument.
// ● Store the result of the function call (the return value) in a variable and then console.log
// the variable. (Hint: It prints 170).
