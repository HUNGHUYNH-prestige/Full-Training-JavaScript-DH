console.log("Object Level 2");

console.log(">>> >>> >>>");

console.log("HOW TO CORRECTLY DEFINE A FUNCTION ?");

console.log("<<< <<< <<<");

// --- --- --- --- --- ---

// Create a function which use one parameter to work

function chercher_avec_un_parametre (un_parametre) {

    return `Voici le parametre saisie : ${un_parametre}`;    
};

// Example of utilisation
let ananas = "ananas";
let fruit = chercher_avec_un_parametre(ananas);
console.log(fruit);

// Look here : with function keyword
console.log(chercher_avec_un_parametre("pomme"));
// Return something correct with correct value

// --- --- --- --- --- ---


// Creation of external object

const list_of_elements = {
    "Name" : "Pikachu",
    "Type" : "Electric",
    "Number" : 25,
    "Catched" : true 
};
console.log(list_of_elements);

// Carefull with the CAP or not : because the case is sensitive !
console.log(list_of_elements.Name);


// Here is the use of ARROW FUNCTION DEFINITION STYLE
const list_search = (something, propriete) => {
    console.log(something);
    let valeur = something[propriete];
    return valeur;
};

// Look here : without function keyword
console.log(list_search(list_of_elements, "Name"));
// Return something correct with correct value


// Create a new function for getting something from an object with its property
// in order to get the value of that property
function get_something (objet, propriete){
    console.log(objet);
    let valeur = objet[propriete];
    return valeur;
};

// Let's create something interesting for fun
const got_something = get_something(list_of_elements, "Name");
console.log(got_something);


// Conclusion
// The object can be inside of the function
// Or 
// The object can be outside of the function

// End of statement

console.log("END OF OBJECT LEVEL 2");
console.log(">>> >>> >>> >>> >>> >>>")

