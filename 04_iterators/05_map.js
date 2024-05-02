//                                                  MAP

const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNums.map( (num) => num+2);
const till100 = myNums.map( (num) => {return  num*10 })     //using return and curly braces
console.log(newNums,till100);



//                          CHAINING IN JAVASCRIPT

//We can use multiple methods within a single statement,
// the value of previous method will continue to the next method in chain



const multipleOfTwo = [2,4,6,8,10,12,14,16,18,20];
let newElements = multipleOfTwo.map( (numb) => numb/2 ).map( (numb) => numb*10)
.filter( (num)=> {return num > 30});
console.log(newElements);