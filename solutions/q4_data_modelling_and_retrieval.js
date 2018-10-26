// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

var fruitArray = [
    {name:'Apple', color:'Red', ppk:100},
    {name:'Mango', color:'Yellow', ppk:200},
    {name:'Banana', color:'Yellow', ppk:300},
    {name:'Kiwi', color:'Green', ppk:400},
    {name:'Orange', color:'Orange', ppk:500},
];

console.log(fruitArray.find(fruit => fruit.name === 'Kiwi')); //{ name: 'Kiwi', color: 'Green', ppk: 400 }
