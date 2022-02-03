// Reverse function

function reverse_something (str) {
    let list = "";
    for (i = 0; i < str.length; i++) {
        let letter = str[str.length - (i+1)];
        list = list + letter;
    }
    
    console.log(list);
    return list;
}

let something = "hello kitty";
reverse_something(something);



// -=- -=- -=- -=- -=- -=- -=- -=- -=- -=-



// This is the reverse prototype in MDN

let array_mewtwo = ["mewtwo", "mew", "two"];
console.log(array_mewtwo);


// It's time to reverse

let reverse_array_mewtwo = array_mewtwo.reverse();
console.log(reverse_array_mewtwo);

// Let's see the original array
console.log(array_mewtwo);

// The original array have been changed !

// The array.reverse() method is destructive !



/// -=- -=- -=- -=- -=- -=- -=- -=- -=- -=-



// Let's see what happen if the object is not an array

let not_an_array = {
    0 : "pikachu",
    1 : "raichu",
    2 : "pichu",
    length : 3
};
console.log("This is the original object :");
console.log(not_an_array);

// Let's reverse the object
let reverse_not_an_array = Array.prototype.reverse.call(not_an_array);
console.log("This is the reversed object : ");
console.log(reverse_not_an_array);



// -----------------------------------------------



// In this case the array.reverse() won't work

let anti_reverse_item = {
    name : "mango",
    prefix : "man",
    suffix : "go",
    length : 3
};
console.log("This is the anti_reverse_item : ");
console.log(anti_reverse_item);


// Let's reverse the anti_reverse_item
let try_to_reverse = Array.prototype.reverse.apply(anti_reverse_item);
console.log("This is not working : ");
console.log(try_to_reverse);


// Conclusion ==> when the object property is not a number, like a string, then the array.reverse() method has no effect




// = = = = =




// Here 