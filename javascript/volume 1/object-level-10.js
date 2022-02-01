// Array : full things to know

// An array is a high-level object ! 

// So get ready to face multiples challenges accross the road of the array

// Description of an array in general

// Array can change and adapt to all situations

// Neither the length of a JavaScript array
// nor the types of its elements are fixed

// An array is like water !

// Be water my friend !

// Let's start with a simple array

// Easy job and Easy level : start in beginner mode

// This is an empty array to start with
let array_of_something_easy = [];
console.log(array_of_something_easy);

// Get the length of that array
console.log(array_of_something_easy.length);

// Since the array is empty, the length is zero : 0, not null, not undefined

// Let's add something at the beginning of this array
let add_something_at_the_beginning = array_of_something_easy.unshift("Use unshift() method to add something at the begginng of the array");
console.log(add_something_at_the_beginning);

// Let's see the final result of the unshift() method
console.log(array_of_something_easy);

// Let's add something at the end of this array
let add_something_at_the_end = array_of_something_easy.push("Use push() method to add something at the end of the array");
console.log(add_something_at_the_end);

// Let's see the final result of the push() method
console.log(array_of_something_easy);

// Let's access an array item using the index position
let array_index_position = array_of_something_easy[0];
console.log(array_index_position);

// The index position is starting from 0

// Let's access the last item in an array using the length - 1
let last_item_in_the_array = array_of_something_easy[array_of_something_easy.length - 1];
console.log(last_item_in_the_array);

// The array for now
console.log(array_of_something_easy);

// Let's loop over an array : with forEach() method solution
array_of_something_easy.forEach(inside_element => {
    console.log(inside_element);
    // The value of inside_element is not an index number
    // The value of inside_element is directly the value in the array for each index
});

// Let's remove something at the beginning of this array
let remove_something_at_the_beginning = array_of_something_easy.shift();
console.log(array_of_something_easy);

// Let's see the thing removed from the beginning
console.log(remove_something_at_the_beginning);

// Let's remove something at the end of this array
let remove_something_at_the_end = array_of_something_easy.pop();
console.log(array_of_something_easy);

// Let's see the thing removed from the end
console.log(remove_something_at_the_end);

// This is amazing !

// Let's learn more !
console.log(array_of_something_easy);

// Let's add something for the demonstration
array_of_something_easy.unshift("poire");
array_of_something_easy.push("pomme");

// Check the inside of the array
console.log(array_of_something_easy);

// Find the index of an item in the array
let find_index_in_the_array = array_of_something_easy.indexOf("pomme");
console.log(find_index_in_the_array);

// Check the array after operation
console.log(array_of_something_easy)
// This is interesting !
// In the console, there is the array with full value
// But, when open the array, only the remaining value is inside

// Terrifying ! 
// --- --- ---

// What is the type of the index in the array.indexOf() method
console.log(typeof find_index_in_the_array);
// It returns a number as an index for the position in the array

// Let's remove something with the index position in the array
let remove_something_by_index = array_of_something_easy.splice(find_index_in_the_array, 1);
console.log(array_of_something_easy);

// Let's see the content removed
console.log(remove_something_by_index);
// This is interesting
// The content removed is an array with the value removed
// Do not expect to have only the value as a string or a number

// What is the type of the removed item
console.log(typeof remove_something_by_index);
// This is an object
// Remember an array is an object
// Here, do not expect to get a string or a number

// This is cool !

