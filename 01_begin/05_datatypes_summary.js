// there are 2 datatypes

// #primitive : number, boolean, string, bigInt, null, undefined, symbol

//#non-primituve: arrays, function, objects

const ank = 30;
const isLogged = true;
let vakya = "hello ji";
let acharya = 13351322156126266526584512946496n;
let temp = null;    //it is termed as object in datatype because it is nothing
let bhavishya;
let uniqueRahega = Symbol("8520");
let dekh_lo = Symbol("8520");

console.table([typeof ank,typeof vakya,typeof acharya,typeof temp,typeof bhavishya]);
console.log(uniqueRahega==dekh_lo);  //symbol datatype makes everything unique, can check with this query


// non-primitive datatype


let marvel = ["superman", "hara laalten", "haatim"];

let car ={
    color : "black",
    transmission:"manual",
    drive:"RWD"

};

const isfunction=function () {
    console.log("function ke andar hu mai");
}

console.table([typeof marvel,typeof car, typeof isfunction]);
