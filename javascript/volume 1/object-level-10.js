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
console.log(array_of_something_easy[0]);
console.log(array_of_something_easy[1]);
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

// Here is more

// You want more
// You'll get more

// Let's remove items from an index position

let pokemon = ["Pikachu", "Mewtwo", "Charizard", "Latios", "Rattata", "Alakazam", "Nothing"];
console.log(pokemon);

// Let's set the position to start with
let position_start = 2;

// Let's set the position to end with
let number_of_element_inside_in_the_array = 3;

// Let's remove a list of items
let remove_item = pokemon.splice(position_start, number_of_element_inside_in_the_array);
console.log(remove_item);

// This method removes an array of values in the original array
// Therefore, the value in remove_item is : ["Charizard", "Latios", "Rattata"]
// This the value from array[2] to array[4]
// Another way to understand that is to consider : from array[2] remove 3 items

// Let's see the final result
console.log(pokemon);

// As expected, the final result does not have the removed values

// The method array.splice() can be used to cut through the array and it removes items


// Here is the formula of splice() function
/*

splice(starting_position_in_the_array, number_of_items_to_remove, "replacing value if needed")

number_of_items_to_remove is optionnal
"replacing value if needed" is also optionnal

*/



// === === Definition and explanation === ===

// A function in an object is called method
// Therefore, array.splice() is a method



// Let's play with array.splice() method to manage the data in an array

// --- --- case 1 :  remove 0 item from index position 1 --- ---
let array_fire_pokemon = ["Charizard", "Moltres", "Vulpix", "Ponyta", "Magmar"];
console.log(array_fire_pokemon);

let remove_nothing = array_fire_pokemon.splice(1,0);
console.log(array_fire_pokemon);

// The value removed is :
console.log(remove_nothing);
// The result is an empty array

// (*__*) The removed value is stored in an array [*__*]

// --- --- case 1 : conclusion ==> nothing happen, 0 change



// --- --- case 2 : remove 1 item from index position 1 --- ---
let remove_one_item = array_fire_pokemon.splice(1,1);
console.log(array_fire_pokemon);

// The removed value is :
console.log(remove_one_item);
// As expected, the value is removed and stored in an array

// --- --- case 2 : conclusion ==> 1 item at index 1 has been removed from the array




// How to manage data inside the array with the splice() method ?

// --->>> case 3 : adding a new item <<<---

// Using the same array
let moltres_shiny = array_fire_pokemon.splice(1,0, "Moltres shiny");
console.log(array_fire_pokemon);

// Let's see the value alone
console.log(moltres_shiny);
// This is an empty array

// --->>> case 3 : conclusion ==> adding 1 item at index 1 and remove 0 item from the array





// ===> case 4 : replacing an item by another one <===

// Using the same array
let vulpix_evolve = array_fire_pokemon.splice(2, 1, "Ninetails");
console.log(array_fire_pokemon);

// This is nice !

// Vulpix has evolved into Ninetails !

// Let's see the vulpix_evolve content :
console.log(vulpix_evolve);
// This array contains the value "Vulpix" as expected
// Everything is working so fine !

// ===> case 4 : conclusion ==> data management : replacing is a success



// -- -- -- case 5 : what happen if there is no param in the splice() ?

// Using the same array
let nothing_in_param = array_fire_pokemon.splice();
console.log(nothing_in_param);
// It returns an empty array, since nothing is done

console.log(array_fire_pokemon);
// The original array is looking fine : 0 change

// -- -- -- case 5 : conclusion ==> nothing is happening !






// - -- - -- - -- case 6 : add multiples values - -- - -- - --
let add_multiple_values = array_fire_pokemon.splice(array_fire_pokemon.length, 0, "Arcanine", "Flareon", "Ho-oh");

// Let's see the final result
console.log(array_fire_pokemon);

// - -- - -- - -- case 6 : conclusion ==> successfully adding some new fire type

// Gotta catch 'em all !




// -==- -==- -==- case 7 : negative number and index -==- -==- -==-

// What happen if the number and the index are negatives ?

// Who can save us from here ? --- --- ---

// Let's save ourselves and save yourself !

let negative_index = array_fire_pokemon.splice(-2);
console.log(array_fire_pokemon);

// Oh no ! It seems to count from the end of the array and then the 2 last items have been removed !




let negative_position = array_fire_pokemon.splice(-2, -2);
console.log(array_fire_pokemon);

// It seems that nothing happen from here




let negative_index_and_position = array_fire_pokemon.splice(-2, 0, "something");
console.log(array_fire_pokemon);

// This is terrible ! It seems that something has been added at index -2

// When the index is negative
// Then the start of the array is from the end of the array
// Like a reverse world !

// When the number of removed items is negative or equal to zero
// Then nothing happen

// If the number of removed items is positive
// Then the number of removed items is applied

// Let's say the number of removed items is 3
// Then, do not be surprised if there are 3 items removed from the array at the index position

// -==- -==- -==- case 7 : conclusion ==> do not use negative number or index
// Or use it with caution : this might be dangerous and cause unexpected result








// -\\- -\\- -\\- case 8 : splice() with only 1 parameter -\\- -\\- -\\-
let remove_something_unexpected = array_fire_pokemon.splice(4);
console.log(array_fire_pokemon);

// This is very impresssing, but expected
// With only one parameter in the splice()
// From the index position, everything after this index has been removed

// -\\- -\\- -\\- case 8 : conclusion ==> this is convenient when a lot of datas in the array must be removed





// FINAL AND LAST WORD FOR THE SPLICE(start, number, data)
// 1. start ==> this is the beginning position in the array, also known as the index
// 2. number ==> this is number of items to remove from the index position in the array
// 3. data ==> this is the data to add in the array from the index position



// --- --- --- --- ---

console.log("--- --- --- Have a break, have a cake --- --- ---");





// It's time to practice a special jutsu

// Cloning !

// Let's do a copy of our array


let shadow_clone = [...array_fire_pokemon];
console.log(shadow_clone);

// This returns a list of values from the array
console.log(...array_fire_pokemon);

// This type is : an object
console.log(typeof [...array_fire_pokemon]);

// Let's see the cloning thing
console.log(shadow_clone);







// --- --- ---



