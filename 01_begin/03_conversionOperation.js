// we will learn about conversion from one data type to another

let value = 442
let converted = String(value)
// console.log(converted);
// console.log(typeof converted);
let inbool = Boolean(value)
// console.log(inbool);
// console.log(typeof inbool);

//for string to number

let word = "123abc"
let converted2 = Number(word)
// console.log(typeof converted2);
// console.log(converted2);
let forbool = Boolean(word)
// console.log(typeof forbool);
// console.log(forbool);

//if we convert a string which is'nt a number, then after conversion, it will be termed as NaN(Not a Number)



// "132" => 123
// "123abc" => NaN
// true => 1; false => 0



// ***************************************************************************Operations**************************************************************************

let test = 45
let negative = -test
// console.log(negative);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%3);

let str1 = "mynk ", str2 = "hehe"
let str3 = str1 + str2;
console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+3);
// console.log(1+2+"3");
// console.log(1+"2"+3);

let gamecounter=100, tokens = 100
gamecounter++;
let anotherWay = ++tokens
console.log(gamecounter);
console.log(anotherWay);