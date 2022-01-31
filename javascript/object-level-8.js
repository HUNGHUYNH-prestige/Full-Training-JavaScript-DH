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

// --- --- Object --- --- method 2
let object_cookie_keys = Object.keys(object_cookie);
console.log(object_cookie_keys);

// object_cookie_keys is an array
// Use forEach() method to loop through the array

// Use classic syntax for function as callback
object_cookie_keys.forEach(function (keys_inside) {
    console.log(`From object_cookie.${keys_inside} \nget the property : ${keys_inside} \nand get the value from objet_cookie["${keys_inside}"] : ${object_cookie[keys_inside]}`);
});

// --- --- Array --- --- method 2
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

// Object === === method 3
let object_cookie_values = Object.values(object_cookie);
console.log(object_cookie_values);

// This method returns an array of values from the object
// Use forEach() to loop through the array of values

object_cookie_values.forEach( values => {
    console.log(`This is the value : --- ${values} --- from the object_cookie \nThere is no way to get the property`);
});

// Array === === method 3
let array_cookie_values = Object.values(array_cookie);
console.log(array_cookie_values);

// This method returns an array of values from the array
// Use forEach() to loop through the array of values

array_cookie_values.forEach( values => {
    console.log(`This is the value : --- ${values} --- from the array_cookie \nThere is no way to get the property`);
});

// Here is some extra === for loop ===
// Use for something of something => work with Array but not wit Object
for (const value of array_cookie_values) {
    console.log(`The value of array_cookie_values is >>> ${value} >>>`);
};

// --- It's time to take a cookie break ---

// Method 4 : Object.entries() method for traversing an array
// This method outputs an array of arrays
// The inner array has two elements : the property and the value

// Object --- >>> method 4

const object_cookie_entries = Object.entries(object_cookie);
console.log(object_cookie_entries);

// When facing an array, do not be afraid of the choice of for loop method

// Use array.forEach( --- define a callback function here --- )
// Or
// Use the for of loop

// for something of something
// Use for of to return values and properties
for (let [object_cookie_key, object_cookie_value] of object_cookie_entries) {
    console.log(`${object_cookie_key} => ${object_cookie_value}`);
    console.log(`The value is : --- ---> ${object_cookie[object_cookie_key]}`);
    console.log(`The property as key is : --- --- ---> object_cookie["${object_cookie_key}"]`)
};

// for fun as always, let's do it with forEach()
// Use forEach() to return properties and values
object_cookie_entries.forEach( function ([object_cookie_key, object_cookie_value]) {
    console.log(`${object_cookie_key} => => ${object_cookie_value}`);
});

// Notice that : when use Object.entries() it must have an array as variable to store the data from the Object.entries() method

// Array --- >>> method 4

const array_cookie_entries = Object.entries(array_cookie);
console.log(array_cookie_entries);

for (const [array_cookie_key, array_cookie_value] of array_cookie_entries) {
    console.log(`The index is : --- ${array_cookie_key} ---  \nThe value is : --- ${array_cookie_value} --- \nThe property is : --- array_cookie_entries[${array_cookie_key}] ---`);
    console.log(`${array_cookie_entries[array_cookie_key]}`);
};

// Notice that : there is no property in an array, so it Object.entries(array object) returns an array of index position

// --- After so much work, take a rest, eat a cookie, drink some milk ---

// Method 5 : for something of something

// Object
// Here !! There is an error
// Type-error: object_cookie is not iterable with for of
// Because for of works with enumerable properties

/*
for (let object_cookie_item of object_cookie) {
    console.log(object_cookie_item);
};
*/

// for of can be used with an array

// The topic for is enumerable property is a real topic
// Later something will be done on this subject

// --- --- Not now --- ---

// === === === WHAT HAPPEN IF THE ITEM IS NEITHER AN OBJECT NOR AN ARRAY ? === === ===

// Something interesing to do for fun and practice
// Just in case one day if needed

let string_of_word = "This is a string";

// It returs i as a list of index number such as 1,2,3, ... and since this is an array, so use array[index] to get the value inside this array
for (let i in string_of_word) {
    //console.log(i);
    console.log(`The value of the array according to the index { ${i} } is ${string_of_word[i]}`);
};

// It returns a list of letter in the string such as a,b,c, ...
for (let i of string_of_word) {
    console.log(`The letter is : ${i} and the item is "${string_of_word[i]}" `);
    // the item is undefined since there is nothing to display / return
    // the string_of_word returns a string
};

// This is not an array so forEach() does not work
/*
string_of_word.forEach( function (item_inside_string) {
    console.log(item_inside_string);
});
*/

// Use Object.keys() method
let string_keys = Object.keys(string_of_word);
console.log(string_keys);

for (let number = 0; number < string_keys.length; number++) {
    // string
    //console.log(typeof `${number}`);
    // number
    //console.log(typeof number);

    console.log(`${string_keys[number]}`);
}

// Use Object.values() method
let string_values = Object.values(string_of_word);
console.log(string_values);

for (let number in string_values) {
    console.log(`The number is : { ${number} } and the letter is : --> ${string_values[number]}`);
};

// Use Object.entries() method
let string_entries = Object.entries(string_of_word);
console.log(string_entries);

let number, letter, other;
let array_for_data_reception = [number, letter, other];

for (let array_for_data_reception of string_entries) {
    console.log(array_for_data_reception);
    for (let inside_position = 0; inside_position < array_for_data_reception.length; inside_position++) {
        console.log(array_for_data_reception[inside_position]);
    }
};


// Do for loop

// Object ---

// The trick is to use a method to transform the object into something array like in order to get the length property

// Magic trick 1 : Object.getOwnPropertyNames(object as object) method

let object_cookie_property_names = Object.getOwnPropertyNames(object_cookie);
console.log(object_cookie_property_names);

// for in : position = 1,2,3, ...
for (let position in object_cookie_property_names) {
    console.log(object_cookie_property_names);
    console.log(`The property of object_cookie_property_names is --- ${object_cookie_property_names[position]} --- \nfor the index position : { ${position} }`);
    //console.log(object_cookie);
    console.log(`This is the value : ${object_cookie[object_cookie_property_names[position]]}`);
};

// for of : position = property1, property2, property3, ...
for (let position of object_cookie_property_names) {
    console.log(object_cookie_property_names);
    console.log(`The property of object_cookie_property_names is --- ${position} --- \nfor the property position : { ${position} }`);
    console.log(`Here is the property of object_cookie_property_names.${position} ==> the value is : ${object_cookie[position]}`);
};

// forEach() : index_of_cookie returns the property names, this is a string
object_cookie_property_names.forEach((index_of_cookie) => {
    //console.log(typeof index_of_cookie);
    console.log("--- " + "object_cookie[\"" + index_of_cookie + "\"] ---");
    console.log("--- " + object_cookie[index_of_cookie] + " ---");
    console.log(`The value is  : --- ${object_cookie[index_of_cookie]} --- \nThe property is : --- ${index_of_cookie} ---`);
});

// for loop with incrementation
for (let position = 0; position < object_cookie_property_names.length; position++) {
    console.log(`The property object_cookie_property_names[${position}] : ${object_cookie_property_names[position]}
    \nThe value of ${object_cookie_property_names[position]} : ${object_cookie[object_cookie_property_names[position]]}
    \nThe position : { ${position} }`);
};

// for in 
for (let inside_object_cookie in object_cookie) {
    console.log(
        "The property is : " + inside_object_cookie + " ---" +
        " The value is : " + object_cookie[inside_object_cookie]
        );
};


// Use other method from other level
// Then do the same thing to an array to test and practice the for loop

// Array ---

for (let index = 0; index < array_cookie.length; index++) {
    console.log(index);
};
