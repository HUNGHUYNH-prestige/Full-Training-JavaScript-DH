console.log('this is new --- start object level 13 ---');

let galette = "galette";
console.log(galette.concat(' des rois'));
console.log("---------------");

// -------------------------

let arrayOfThing = [];

function reverse(array_param) {
    array_param.push("cool is 1", "nice is 2");
    return array_param.reverse();
}

console.log(reverse(arrayOfThing));
console.log(arrayOfThing);
console.log('----------------');

// --------------------------------

let stringWord = "pomme de terre";

function reverseString(stringParam) {
    return stringParam;
}

console.log(reverseString(stringWord));