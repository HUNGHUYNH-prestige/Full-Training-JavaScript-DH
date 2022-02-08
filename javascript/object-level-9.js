// The power of recursive instead of for loop

// The forbidden technic : recursion

// Use Recursion to Create a Range of Numbers


// Work in progress
// Still thinking on solution

function range (startNum, endNum) {
    let array = [];

    for (let ok = startNum; ok <= endNum; ok++) {
        if (ok < 0 || endNum < 0) {
            console.log(array);
            return array;
            
        }
        array.push(ok);
        //console.log(ok);
        //array.concat(ok);
    }
    console.log(array);
};
  
 // Correct cases 
range(1, 5);
range(6,9);
range(4,4);
range(0,0);

// Incorrect cases
range(-1,0);
range(-10,-1000);
range(0, -1);


// -- -- -- -- --













let array_something = [1,2,3];
console.log(array_something);

let concat_something = [10, 20, 30];
array_something.concat(concat_something);

console.log(concat_something);

console.log(array_something);

// Nohting is happening ?! 
//       eh...!!!           O_o  _______oh!

// When use array.concat() method
// Any array is changed
// Everything is stable and nothing changes


let array_1 = [11,22,33];
console.log(array_1);

let concat_new_array = [99, 88, 77];
console.log(concat_new_array);
// This is the result of concatenating the new array with the original array
let fusion = array_1.concat(concat_new_array);
console.log("This is the fusion array with the concat method :");
console.log(fusion);


// This is unchanged array
console.log("Unchanged array :");
console.log(array_1);
// This is unchanged concat new array
console.log("Unchanged concat new array :");
console.log(concat_new_array);



// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// Let's play with concat
console.log(`--- --- --- --- ---`);
console.log(`It's time to concat`);
console.log(`--- --- --- --- ---`);


function concatenate_something(start, end) {

    let result_response = [];

    // Incorrect cases and situations
    if (start > end) {
        //console.log("Attention : \nstart ==> { " + start + " } <== \nis bigger \nthan end ==> { " + end + " } <==");
        return result_response;
    }
    else if (start < 0 ) {
        //console.log("Attention : start is negative " + "\nThe value is : " + start);
        return result_response;
    }
    else if (end < 0) {
        //console.log(`Attention ! The value of end is ${end}`);
        return result_response;
    }

    // Correct cases and situations
    else if (start == end) {
        console.log(`The start is ${start} \nand \nthe end is ${end}`);
        return result_response = [start];
    }
    else {
        //console.log(`Here is correct !`);
        console.log(`The start is ${start} \nand the end is ${end}`);
        result_response = result_response.concat(concatenate_something(start + 1, end));
        return result_response.concat(start);

    }
}

// Correct cases
console.log(concatenate_something(1,5));
console.log(concatenate_something(0,0));

// Incorrect cases
console.log(concatenate_something(-1,0));
console.log(concatenate_something(1,-1));
console.log(concatenate_something(-1,-2));
console.log(concatenate_something(10,1));

/*
let content = concatenate_something(2,5);
console.log(content);
*/




// == == == == == == == == == == == == == == == == ==



const omega = ["o", "m", "e", "g", "a"];
console.log(omega);

const omega_concat = ["c", "o", "n", "c", "a", "t"];
console.log(omega_concat);

const final_omega_concat = omega.concat("- space -", omega_concat, "something else");
console.log(final_omega_concat);



// == == == == == == == == == == == == == == == == ==




















// Some more exercise


function hard_work(inside){
    let array_thing = [];
    if (inside < 0){
        console.log(`inside = ${inside} and is negative`);
        return array_thing.concat("END of recursive !");
    }

    if (inside >= 10){
        console.log(`inside = ${inside} and is positive but exceed`);
        return array_thing.concat(inside);
    }

    
    if (inside == 0){
        console.log(`inside = ${inside} and is zero`);
        return array_thing.concat(inside);
    }
    
    if (inside > 0){
        console.log(`This is inside : ${inside}`);
        array_thing = array_thing.concat(inside);
        return array_thing.concat(hard_work(inside +1));
    }
    return array_thing;
};

console.log(hard_work(-1));
console.log(hard_work(0));
console.log(hard_work(100));
console.log(hard_work(5));




console.log(`






`);

// --- --- --- --- --- --- --- --- --- --- --- --- ---






// More fun


function legendary (mew, mewtwo){

    if (mew < 0 || mewtwo < 0) {
        if (mew < 0) {
            console.log(`INCORRECT ! mew is ${mew}`);
        }
        else {
            console.log(`INCORRECT ! mewtwo is ${mewtwo}`);
        }
        //console.log(`INCORRECT ! Negative value !`);
    }

    else if (mew == 0 || mewtwo == 0) {
        if (mew == 0) {
            console.log(`mew is zero ==> ${mew}`);
        }
        else {
            console.log(`mewtwo is zero ==> ${mewtwo}`);
        }
    }


};


// Good cases
legendary(1, 5);
legendary(1,1);
legendary(0,0);

// Bad cases
legendary(-1, -1);
legendary(10, -100);
legendary(-100, 10);

