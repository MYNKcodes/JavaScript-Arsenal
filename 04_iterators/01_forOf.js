const array = ["mayank","shashank","anurag","abhinav"];
for (const contents of array) {
    // console.log(contents);
}

const swaagat = "Hello World!";
for (const shabd of swaagat) {
    // console.log(`the letter is:- ${shabd}`);
}

//Maps

//initialise a map with a variable
 
let map = new Map();
map.set('mynk','Web 3.0');
map.set('Abhinav','Python');
map.set('Shashank','Flutter');
map.set('Anurag','Web-dev');
console.log(map);

//extracting keys and values from the map separately

for (const [keys,values] of map) {
    console.log(keys,":- ",values);
    
}

//we cannot iterate in objects using FOR..OF loop, there is another method to do so.

//for objects we use FOR..IN loop.

///but let us give it a try

const myObj ={
    name : "mayank",
    field : "Web3.0"
};
for (const [keys,values] of myObj) {
    //it will show that the object is not iteratable.
    console.log(keys,values);  
}