console.log(">>> >>> >>>");
console.log("Object level 6");
console.log("For loop testing");

// For loop

// Here is the object to be tested

let chocolate = {
    color : "Black",
    country : "Africa",
    price : 500
};

// NOTICE : that the property can have single or double quote, even any quote !

let chocolate_quote = {
    'color' : "Black",
    'country' : "Africa",
    'price' : 500
};

// The result is the same
console.log(chocolate);
console.log(chocolate_quote);

// 1. For in : working

for (let feature in chocolate) {
    console.log(`chocolate.${feature} has the property ${feature} and the value is ${chocolate[feature]}`);
}

// 2. For of : not working because the object is not iterable
/*
for (let feature of chocolate) {
    console.log(feature);
}
*/

// 3. In order to use for loop, the object should have an array form, or array like
for (let i = 0; i < Object.keys(chocolate).length; i++) {
    console.log(`This chocolate has the property ${Object.keys(chocolate)[i]} and the chocolate.${Object.keys(chocolate)[i]} returns ${chocolate[Object.keys(chocolate)[i]]}`);
};

// 4. Another method to use in order to get an array from an object which is not an array at the beginning
for (let i = 0; i < Object.getOwnPropertyNames(chocolate).length; i++) {
    console.log(`This chocolate has the property ${Object.getOwnPropertyNames(chocolate)[i]} and the chocolate.${Object.getOwnPropertyNames(chocolate)[i]} returns ${chocolate[Object.getOwnPropertyNames(chocolate)[i]]}`);
};

// 5. When some properties should be checked before the for loop
for (const key in chocolate) {
    if (chocolate.hasOwnProperty(key)) {
        console.log(`This property "${key}" exists in the chocolate object and the value is called from chocolate.${key} which returns the value of : ${chocolate[key]}`);
        console.log(chocolate[key]);
    }
};

