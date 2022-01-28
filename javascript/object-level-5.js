// For loop
// 1 . for in loop

// This is simple object
let pikachu = {
    name : "Pikachu",
    type : "Electric",
    number : 25,
    color : "Yellow",
    rare : false,
    level : 20,
    catched : true
};

console.log(pikachu);

// Do this kind of loop for retrieving all keys from an object
for (let info in pikachu) {
    console.log(info);
};

// Do this kind of loop with the right syntax to get all keys and values from an object
for (let info in pikachu) {
    console.log(`${info} value is ${pikachu[info]}`);
}

// Do this kind of loop with this syntax to get all keys with the dotted syntax and values from an object
for (let info in pikachu) {
    console.log(`pikachu.${info} has the value : ${pikachu[info]}`);
}

if (pikachu.hasOwnProperty("name")) {
    console.log(pikachu.name);
}

// Another demo with hasOwnProperty method for object

for (let info in pikachu) {
    console.log(info + " ==> what is this ?")
    console.log(typeof info);
    if (pikachu.hasOwnProperty(info)) {
        console.log("the info is : " + info)
        console.log(`pikachu.${info} ==> ${pikachu[info]}`);
        console.log("--- ---")
    }
}

// Try to for in loop for an array object

// This is a simple array object

let pikachu_array = [
    "Pikachu",
    "Electric",
    25,
    "Yellow",
    false,
    20,
    true
];

console.log(pikachu_array);

for (let info in pikachu_array) {
    console.log("value in info : " + info);
    console.log(pikachu_array[info]);
}

// 2. for of loop

// DO NOT WORK WITH OBJECT : simple object is not working

// For of : Do Not Work With Simple Object !

let squirtle = {
    name : "Squirtle",
    type : "Water",
    attack : "Hydro Pump"
};

console.log(squirtle);
// Use "for in" instead of "for of" for object
for (let info in squirtle) {
    console.log(`squirtle.${info} has the value of ${squirtle[info]}`);
}

// Create an array in order to use : for of loop

let squirtle_array = [
    "Squirtle",
    "Water",
    "Hydro Pump"
];

console.log(squirtle_array);

// Use this loop for an array
for (let info of squirtle_array) {
    console.log(`${info} is the value of squirtle_array`);
}

// Things are getting more and more interesting

// Look at what happen when use "for in" in a string

let message = "This is a message";

for (let letter in message) {
    console.log(letter);
}

// To conclude : for in ==> returns a position number such as 1,2,3,...

// Look at what happen when use "for of" in a string

for (let letter of message) {
    console.log(letter);
}

// To conclude : for of ==> returns a letter for each number position such as t,h,i,s, empty space, i,s, ...
// Yes, the empty space is an empty charactere

// This is so cool, isn't it ?



// When facing an array, there is another solution : forEach()

let charizard = [
    "Charizard",
    "Fire",
    "Flamethrower"
];

console.log(charizard);

charizard.forEach( function (info, index) {
    console.log(info);
    console.log(index);
});

charizard.forEach( (info, index) => {
    console.log(`${info} is at index : ${index}`);
});

// This is another new thing to do and test
// Use Object.keys()

Object.keys(charizard).forEach( function (info, index) {
    console.log("this type is : " + typeof info );
    console.log(`this type is : ${typeof index}`);
    console.log(charizard[info]);
    console.log(charizard[index]);
});



// Otherwise, there is a classic and simple loop for

let bulbasaur = {
    name : "Bulbasaur",
    type : "Grass",
    attack : "Solar Beam"
};

console.log(bulbasaur);

for (let index = 0; index < Object.keys(bulbasaur).length; index++) {
    // This is something very interesting
    // How to get the length of an object if the object is not an array
    // Well, this is actually pretty cool
    // Use Object.keys() method to get all keys from an Object
    // Then use length property for an array
    // Finally, it is possible to get a length for any object
    console.log(index);
    // Since this is an array
    console.log(Object.keys(bulbasaur));
    // Therefore, get all the array items
    console.log(Object.keys(bulbasaur)[index]);

};


// Let use a for loop in an array

// To conclude this demo

let charmander = [
    "Charmender",
    "Fire",
    "Red",
    20,
    4
];

console.log(charmander);

for (let position = 0; position < charmander.length; position++) {
    //console.log(position);
    console.log(`This is the content : ${charmander[position]}`);
}

// This is the end for now
