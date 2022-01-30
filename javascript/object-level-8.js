console.log(">>> >>> >>>");
console.log("object level 8");

// Let's perfect the for loop topic

// This is the object for the experimentation

let object_cookie = {
    name : "cookie",
    color : "brown",
    price : 3,
    size : "extra large"
};

console.log(object_cookie);

// This is the array for the experimentation

let array_cookie = [
    "cookie", "mint-chocolate", 3, "extra large"
];

console.log(array_cookie);

// Method 1 : for something in something

// for in object
for (let object_value in object_cookie) {
    console.log(`The ${object_value} is in cookie.${object_value} \nand returns ${object_cookie[object_value]}`);
};

// for in array
for (let array_value in array_cookie) {
    console.log(`The index is ${array_value} \nand the value is ${array_cookie[array_value]}`);
}

// It is like retrieving something from an array with the array[index] syntax
// but here it is an object, not an array
// according to the definition, an array is an object in JavaScript

// Common knowledge about object in JavaScript

// Object

let object_thing = {name : "object is object"};
console.log(typeof object_thing);
console.log(object_thing.name);

// Array

let array_thing = ["object is array"];
console.log(typeof array_thing);
console.log(array_thing[0]);

// Use this method to get only the property without the prototype that might be in the object properties list

// Object
for (const object_value in object_cookie) {
    if (object_cookie.hasOwnProperty(object_value)) {
        console.log(`The ${object_value} is from cookie.${object_value} \nand the value inside is ${object_cookie[object_value]}`);
    }
};

// Array
for (const array_value in array_cookie) {
    if (array_cookie.hasOwnProperty(array_value)) {
        console.log(`The index number is : ${array_value} \nand the value is : --- ${array_cookie[array_value]} ---`);
    }
};

// Here is for fun : using another syntax
// Use backslash + n ==> \n ==> in order to break a line

// Object
for (let object_inside in object_cookie) {
    console.log("This is the property : --- " + object_inside + " --- \nThis is the content : --- "  + object_cookie[object_inside] + " ---" + "\nThis is from : object_cookie[" + object_inside + "]");
};

// Array
for (let array_inside in array_cookie) {
    console.log("This is the index : " + array_inside + " ---\nThis is the content : --- " + array_cookie[array_inside] + " --- " + "\nThis is from : array_cookie[" + array_inside + "]" );
};

// --- --- Cookie Mint Chocolate is so tasty --- ---

// Method 2 : Object.keys(object for experimentation)
// This method returns an array of all properties and values according to will
// Use array.forEach( create a function inside )

// --- --- Object --- ---
let object_cookie_keys = Object.keys(object_cookie);
console.log(object_cookie_keys);

// object_cookie_keys is an array
// Use forEach() method to loop through the array

// Use classic syntax for function as callback
object_cookie_keys.forEach(function (keys_inside) {
    console.log(`From object_cookie.${keys_inside} \nget the property : ${keys_inside} \nand get the value from objet_cookie["${keys_inside}"] : ${object_cookie[keys_inside]}`);
});

// --- --- Array --- --- 
let array_cookie_keys = Object.keys(array_cookie);
console.log(array_cookie_keys);

// array_cookie_keys is an array
// Use forEach() method to loop through the array

// Create a function outside of the forEach() for experimentation
function do_something_inside(object_inside_param,keys_inside_param) {
    console.log(`From array_cookie[${keys_inside_param}] get the value : ${object_inside_param[keys_inside_param]}`);
};

// Use the ARROW FUNCTION SYNTAX for fun (ES6)
array_cookie_keys.forEach( (keys_inside) => {
    do_something_inside(array_cookie,keys_inside);    
});

// --- There are many ways to create a function --- This is disturbing ! --- But fun ---

// Method 3 : Object.values(object for experimentation)
// This method returns an array of all values from the properties inside an object

// Object
let object_cookie_values = Object.values(object_cookie);
console.log(object_cookie_values);

// This method returns an array of values from the object
// Use forEach() to loop through the array of values

object_cookie_values.forEach( values => {
    console.log(`This is the value : --- ${values} --- from the object_cookie \nThere is no way to get the property`);
});

// Array
let array_cookie_values = Object.values(array_cookie);
console.log(array_cookie_values);

// This method returns an array of values from the array
// Use forEach() to loop through the array of values

array_cookie_values.forEach( values => {
    console.log(`This is the value : --- ${values} --- from the array_cookie \nThere is no way to get the property`);
});

// --- It's time to take a cookie break ---

// Method 4 : Object.entries() method for traversing an array
// This method outputs an array of arrays
// The inner array has two elements : the property and the value

const object_cookie_entries = Object.entries(object_cookie);
console.log(object_cookie_entries);

