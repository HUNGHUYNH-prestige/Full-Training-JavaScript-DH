// START SOMETHING NEW HERE

// It is all about the recursion


// This is the recursion method
// Use this method instead of for loop
// but be careful
// you might never end


// test 1
console.log("--- --- --- test 1 --- start --- --- ---");

function chocolate(sugarless) {
  
  if (sugarless <= 0 ) {
    console.log("sugarless is negative or equal to zero : " + sugarless);
    return "nothing";
  }
  else {
    chocolate(sugarless - 1);
    console.log("console.log of the function ==> " + sugarless);
    return sugarless + "g of sugar";
  }
}

// No console.log()
// if the parameter sugarless = 10
// The result is correct
// 1 2 3 4 5 6 7 8 9 10
console.log("Parameter = 10");
chocolate(10);

// if the parameter sugarless = 0
// go if statement
console.log("Parameter = 0");
chocolate(0);

// if the parameter sugarless = -1
// go if statement
console.log("Parameter = -1");
chocolate(-1);

console.log("*** --- console --- ***")

// With the console.log() for all

// The result is the return content
console.log("if the parameter is correct +++ +++");
console.log(chocolate(1));

// The result is the if statement return content
console.log("if the parameter is zero *** ***");
console.log(chocolate(0) + " ==> zero");

// The result is the if statement return content
console.log("if the parameter is negative --- ---")
console.log(chocolate(-1) + " ==> negative");


console.log("--- --- --- test 1 --- end --- --- ---");


// ------------------------------------------











// test 2
console.log("--- --- --- test 2 --- start --- --- ---");

function factorial(number) {
  // define the base case
  if (number === 0 || number < 0) {
    console.log("Here is base case");
    return 1;
  }
  // in the else
  // this is the recursion case
  else {
    console.log(number + " before function");
    let result = number * factorial(number - 1);
    console.log(number + " after function");
    console.log("result content is : " + result);
    // the final result will be in the return statement
    return result;
  }
}

let negative = factorial(-10);
console.log(negative);
console.log("--- --- stop --- ---");

let zero = factorial(0);
console.log(zero);
console.log("--- --- stop --- ---");

let one = factorial(1);
console.log(one);
console.log("--- --- stop --- ---");

let five = factorial(5);
console.log(five);
console.log("--- --- stop --- ---");



// To conclude
// The order of console.log() is very important


console.log("--- --- --- test 2 --- end --- --- ---");


// ------------------------------------------------













// test 3
console.log("--- --- --- test 3 --- start --- --- ---");

function doSomething(ok) {
  let result = [];
  if (ok <= 0) {
    return result;
  }
  else {
    return doSomething(ok - 1).concat(ok);
  }
}

console.log("--- --- --- case 1 --- --- ---");
console.log(doSomething(0));

console.log("--- --- --- case 2 --- --- ---");
console.log(doSomething(-1));

console.log("--- --- --- case 3 --- --- ---");
console.log(doSomething(3));

console.log("--- --- --- test 3 --- end --- --- ---");















// test 4

console.log("--- --- --- test 4 --- start --- --- ---");

function tryToPush (something) {
  
  if (something <= 0) {
    let result = [];
    return result;
  }
  else {
    let list = tryToPush(something - 1);
    //console.log(list);
    list.push(something);
    return list;
  }
}


console.log("--- <<< test 0 >>> ---");
console.log(tryToPush(0));


console.log("--- <<< test -1 >>> ---");
console.log(tryToPush(-1));


console.log("--- <<< test 10 >>> ---");
console.log(tryToPush(10));


console.log("--- --- --- test 4 --- end --- --- ---");










// test 5


console.log("--- --- --- test 5 --- start --- --- ---");

// Something is weird for me
// Can't explain correctly

function count_up (n) {
  //console.log(n);
  let response1 = "response : " + n;
  if (n <= 0) {
    // the response1 can be created and initialized here
    return response1;
  }
  else {
    response1 = count_up(n-1).concat(n);
    // console.log(response1);
    // return response;
  }
  
  // nothing happen here because the return is after another return
  // First Return In
  // --------------- First Return Out
  return response1;
}

console.log(count_up(10));
console.log(count_up(0));
console.log(count_up(-1));

console.log("--- --- --- test 5 --- end --- --- ---");

















// test 6

// -----------------------------------------
// ---   recursion is strange sometimes  ---
// -----------------------------------------


console.log("--- --- --- 😄 --- 🧨 --- --- ---");

// ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨
// ✨✨✨   when using push in recursion   ✨✨✨
// ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨

// DO NOT FORGET TO USE THE ARRAY IN THE IF CONDITION
// Otherwise, not working !! 😎

function push_something (n) {
  // console.log(n);
  // let result = [];
  if (n <= 0) {
    let result = [];
    // console.log(n + "ok");
    return result;
  }
  else {
    let result = [];
    // console.log(n + "positif");
    // 🏐🏐🏐🏐🏐🏐🏐🏐🏐🏐🏐🏐🏐🏐
    // Secret Formula for RECURSION
    let recursion = push_something(n-1);
    recursion.push(n);    
    return recursion;
  }
  // return n;
}

// testing cases
console.log(push_something(10));
console.log(push_something(0));
console.log(push_something(-1));

console.log("--- --- --- 😄 --- 🧨 --- --- ---");

// -----------------------------------------------

// 🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁












// test 7


// 🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔
// 🍔🍔🍔        when using concat        🍔🍔🍔
// 🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔
console.log("🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔");
// recursion with concat 
// ready ?
// go !

function concat_something (n) {
  // console.log(n);
  let box = [];
  if (n <= 0) {
    // let box = [];
    // console.log(n + " neg");
    return box;
  }
  // AFTER THE ⚜ if ⚜ either use ⚜ else ⚜ or use nothing
  // Because after the ⚜ if ⚜ automatically the rest of the code will run
  else {
    // console.log(n + " positif");
    let concat_base = box.concat(n);
    // console.log(concat_base);
    let recursion = concat_base.concat(concat_something(n-1));
    return recursion;
  }
}

// testing cases
console.log(concat_something(10));
console.log(concat_something(0));
console.log(concat_something(-1));
console.log("🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔");
// 🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁
// ----------------------------------------------------




















// test 8 
console.log("🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍");

function unshift_something(n) {
  // console.log(n);
  let box = [];
  // -------------------
  if (n <= 0) {
    // console.log(n);
    return [];
  }
  else {
    let unshift_method = unshift_something(n-1);
    unshift_method.unshift(n);
    // console.log(unshift_method);
    return unshift_method;
  }
  return "this return will never display";
}

// test cases
console.log(unshift_something(10));
console.log(unshift_something(0));
console.log(unshift_something(-1));
console.log("🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍");
// -------------------------------------------------














// test 9

console.log("--------- <<< test 9 >>> -----------------");
function splice_method (n) {
  if (n<=0) {
    return [];
  }
  else {
    let splice_something = splice_method(n-1);
    splice_something.splice(0,0,n);
    
    // let mewtwo = splice_something.splice(0,0,n);
    // console.log(mewtwo);
    return splice_something;
    // return mewtwo;
  }
}

// test cases
console.log(splice_method(10));
console.log(splice_method(0));
console.log(splice_method(-1));

// --------------------------------------



// test 10
// ternary condition, use ?

function condition_method (n) {
  return n <= 0 ? [] : [n].concat(condition_method(n-1));
}


// test cases
console.log(condition_method(50));



// ------------------------------------------

















// **************************************************
// ***       playing with the array syntax        ***
// **************************************************
console.log("************ test 10 ****************");

function pommeDeTerre (pomme) {
  return pomme <= 0 ? [] : [pomme].concat(pommeDeTerre(pomme - 1));
}

console.log(pommeDeTerre(100));















// *************************************
// ***     testing is important      ***
// *************************************
let box_of_thing = ["pomme de terre"];

// add the agrume in the array boxçof_thing easily with concat() method for array
console.log(box_of_thing.concat("agrume"));












// ----------------------------------------------
// test 11
// another ternary condition
console.log("-------------------------------");

function ternary_condition(n) {
  return n <= 0 ? [] : [n, ...ternary_condition(n-1)];
}

// test cases
console.log(ternary_condition(10));

console.log("-------------------------------");
// ------------------------------------




















// ----------------------------------------------------
// -----       testing the ternary condition      -----
// ----------------------------------------------------
console.log("================================");
function using_ternary (n) {
  // console.log(n);
  return n <= 0 ? [] : [n, ...using_ternary(n-1)];
}

console.log(using_ternary(10));

console.log("================================");
// ----------------------------------------------














// ----------------------------------------------

let pikachu = ["Thunder", "Quick attack", "Hyper beam", "Surf"];

// the concat method add something to the existing array easily and simply at the end of the array
console.log(pikachu.concat("pokeball"));

let add_something = ["pomme de terre", ...pikachu];
console.log(add_something);

// When use the Spread Operator, the content of the array becomes simple data without the array structure
console.log(...pikachu);

console.log(typeof (pikachu + [, "rare"]));


// ---------------------------------------------------







//  start something new here
