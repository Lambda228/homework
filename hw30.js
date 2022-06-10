'use strict'
let productsList = [{name: 'coconut', quantity: 1, isBought: true, price: 2, sum: 0}, {name: 'pineapple', quantity: 3, isBought: false, price: 4, sum: 0}, {name: 'chocolate', quantity: 5, isBought: true, price: 3, sum: 0} ];

function sumProduct (a) {
    a.sum = a.quantity*a.price;

 };

 for(let i = 0; i < productsList.length; i++){
 sumProduct(productsList[i]);
 };



productsList.sort (function (a, b){
    if (a.isBought < b.isBought) {
return -1}});

function Buy(name){
    productsList.forEach(function (product) {
        if ((product.name == name) && (product.isBought != true))
            {product.isBought = true}})};
  
//Buy('pineapple');
console.log(productsList);


function notBought(a) {
    return a.isBought == false;
};

let toBuyList = productsList.filter(notBought);

console.log(toBuyList);