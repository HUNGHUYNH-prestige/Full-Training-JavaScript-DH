// For loop
// 1 . for in loop
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
for (info in pikachu) {
    console.log(info);
};

// Do this kind of loop with the right syntax to get all keys and values from an object
for (info in pikachu) {
    console.log(`${info} value is ${pikachu[info]}`);
}

// Do this kind of loop with this syntax to get all keys with the dotted syntax and values from an object
for (info in pikachu) {
    console.log(`pikachu.${info} has the value : ${pikachu[info]}`);
}

