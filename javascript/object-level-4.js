// Start something new here
console.log(">>> >>> This is object Level 4");

// Let's work with hasOwnProperty
// This is a prototype for Object in JavaScript

// It returns a boolean : true or false
// true when the property exists for that object
// false when the property does not exist for that object

let panier_de_fruits = {};

console.log(panier_de_fruits);

panier_de_fruits.pomme = "pomme rouge";

console.log(panier_de_fruits);

if (panier_de_fruits.hasOwnProperty("pomme")) {
    console.log("This is so tasty !");
    console.log(panier_de_fruits.hasOwnProperty("pomme"));
}
else {
    console.log("Please go buy some");
}

// Work within a function

function item_check_property (item, prop) {
    if (item.hasOwnProperty(prop)) {
        return "Verification correct";
    }
    else {
        return "Verification incorrect";
    }
}

let item_for_check = {power : "maximum"};
let prop_for_check = "power";

let result = item_check_property(item_for_check, prop_for_check);

console.log(result);


// What happen if the property does not exist

let another_item = {};

if (another_item.hasOwnProperty("something")) {
    console.log("Everything is right");
}
else {
    console.log("Error occurs, please check again !");
    console.log(another_item.hasOwnProperty("something"));
}


// And more interesting is coming

let burger = new Object();
console.log(burger);

burger.salade = "salade";
console.log(burger);

burger.tomate = "tomate";
burger.steak = "steak";

console.log(burger);

// For in loop 
// To list all property in an object

for (let thing in burger) {
    console.log(thing);
    if (burger.hasOwnProperty(thing)) {
        console.log(`In this burger,${thing} is present, you like ${burger[thing]}`);
    }
    else {
        console.log("Please give us a call for more information");
    }
}


// This part is for challenger only !
let special_object = {}.hasOwnProperty.call("something");
console.log(special_object);

console.log({});

// Or something else special
let ghost_property = ({}).hasOwnProperty("something");
console.log(ghost_property);

// From here, please be careful, keep going at your own risk !

// Nothing is real from now on

// Fusion of all strange things

// All undefined
let unknown = ({})["ghost_property"];
console.log(unknown);
console.log(({})["ghost_property"]);

({})["ghost_property"] = "from undefined to defined as something";
console.log(({})["ghost_property"]);
// undefined after a definition, what is happening ?

({}).cool = "something cool is coming";
console.log(({}).cool);
// Cannot see in the console

({}).ghost_property = "nothing here youhou !";
console.log(({}).ghost_property);
// nOtHiNg hEhE eItHeR


// A terrible error occurs here, who knows why ?
//console.log(unknown.hasOwnProperty("ghost_property"));

console.log(({})["ghost_property"] = "nothing here either");
// nothing here really ?

// but
console.log(({}).ghost_property);
// undefined, the text disappears suddendly

unknown = "nothing here, maybe ghost ?";
console.log(unknown);
// simple text


// JavaScript : Ghost in the code ! 👻
