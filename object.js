// In JavaScript
// Object is something very important

// 1. First, let's begin with : 

function lookup_for_something(argument_in_param) {
    let result = "nothing";
    console.log(">>> result is : " + result + " >>> before the operation");

    // Let's create an object with properties and its values
    const list_of_elements = {
        "name" : "Dracaufeu",
        type : "fire",
        level : 123,
        "catched" : true
    };

    // Notice that it is possible to write the property with and without the ""
    // "double quote" and 'simple quote'
    // `backtick` is not possible in an object : it will involve error

    console.log(list_of_elements);

    // It is possible to retrieve object value with this bracket notation
    // Remember ! 
    result = list_of_elements[argument_in_param];

    // Look at the inside of the result
    console.log(result);




    return `This is the argument used to get the result : ${argument_in_param}`;
}


// Set some test data for fun

let text_argument = "Hello this is a test !";
let result_undefined = lookup_for_something(text_argument);
// This will only if there is a RETURN keyword in the function
// Otherwise, it won't work as expected
console.log(result_undefined);

// Here, the result is undefined because the argument does not exist in the original object


let name_pokemon = lookup_for_something("name");
console.log(name_pokemon);

let type_pokemon = lookup_for_something("type");
console.log(type_pokemon);

let level_pokemon = lookup_for_something("level");
console.log(level_pokemon);


let catched_pokemon = lookup_for_something("catched");
console.log(catched_pokemon);

