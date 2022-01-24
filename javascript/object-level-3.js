// start with :
const text = 'This is object level 3 coding challenge';
console.log(text);
console.log('algo problem');
console.log("challenge");
console.log('>>> >>> >>> >>> >>>');

// Setup the object

const recordCollection = {
    2548 : {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

console.log(recordCollection);

// function to do something inside the object
// object manipulation

function updateRecords(records, id, prop, value) {

    let item = records[id];

    // 1. if the prop isn't tracks : done with hasOwnProperty()
    // 2. value is not an empty string
    if (prop != "tracks" && value != "") {
        item[prop] = value;
    }

    // 3. if props is tracks : checked
    // 4. if tracks is not in the object property : create an empty array and add the value to it
    if (prop == " tracks" && !item.hasOwnProperty("tracks")) {
        item[prop] = [];
        item[prop].push(value);
    }


    // 5. if props is tracks : checked
    // 6. if value isn't an empty string : add the value to the end of the existing tracks array
    if (prop == "tracks" && value != "") {
        item[prop].push(value);
    }

    // 7. if value is an empty string : delete the given prop
    if (value != "") {
        delete item[prop];
    }

    // always return the full object
    return records;
    //return "return the full object at the end";
}



// Test normal condition : case 1
let result_case1 = updateRecords(recordCollection, 5439, 'artist', 'ABBA');
console.log(result_case1);



// Test normal condition : case 2
let result_case2 = updateRecords(recordCollection, 5439, 'artist', 'test');
console.log(result_case2);



// Test string empty : nothing inside
let empty = "";
let result_empty_string = updateRecords(recordCollection, 5439, 'artist', empty);
console.log(result_empty_string);



// testing the limit of console.log in the console for fun
let pomme = 'pomme';
console.log(pomme);
let poire = 'poire';
console.log(pomme, poire);
let banane = 'banane';
console.log(pomme, banane, poire);

// END OF OBJECT LEVEL 3
console.log("END OF OBJECT LEVEL 3");
console.log('>>> >>> >>> >>> >>>');
