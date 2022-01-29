// Object.getOwnPropertyNames()
// This is a method to get all keys names from an object
// The result is an array : a list of all keys names

// This is a simple object, not an array
let computer = {
    name : "Asus",
    type : "Gaming",
    color : "Black",
    price : 1500
};

console.log(computer);

// Here, the object method returns an array
let final_result = Object.getOwnPropertyNames(computer);
console.log(final_result);

// use forEach() for an array
final_result.forEach((response) => {
    console.log(`Here is the content : ${computer[response]}`);
    console.log(`Here is the origine : computer.${response}`);

});


// Here is an array with for loop
for (let i = 0; i < final_result.length; i++) {
    console.log(`${final_result[i]} is ${computer[final_result[i]]}`);
    console.log('--- --- ---');
    console.log(`computer.${final_result[i]} is ${computer[final_result[i]]}`);
    console.log('--- --- ---');
};

// Here is an object, not an array : use for in loop
for (let inside in computer) {
    //console.log(computer)
    console.log("the inside is : " + inside);
    console.log(`the value of inside is : ${computer[inside]}`);
    console.log("Here is the value : --- " + computer[inside] + " ---");
};

// For of is not working with an object such a real object
/*
for (let something of computer) {
    console.log(something);
};
*/

