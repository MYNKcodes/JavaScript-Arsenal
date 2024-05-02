const multipleOfTwo = [2,4,6,8,10,12,14,16,20];
// multipleOfTwo.forEach( (even) => console.log(even) );  //without using curly braces in calling function

// multipleOfTwo.forEach( (numb) => {                //using curly braces,return function,in diff line.
//     console.log(numb);
//     return numb;
// });






const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 const newNums = myNums.filter( (num) =>  num > 4) ;        //by not using return and braces
 console.log(newNums);                                      //single line functions return automatically



const hisNums = [3,6,9,12,15,18];
const newerNums = hisNums.filter( (his) => {       //same things by using multi-line and return,braces
    return his >10
} );
console.log(newerNums);





//                              five table



/*
(i) make an empty array
(ii) push the new array in it by using conditionals
*/


const multipleOfFive = [5,10,15,20,25,30,35,40,45,50];

let newArr = [];

multipleOfFive.forEach( (element) => {
    if(element >20){
        newArr.push(element)
    }
})
console.log(newArr);




//                                      LIBRARY PROJECT








const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let oldBooks = books.filter( (bk => {
        return bk.publish <= 1999 && bk.genre === 'Fiction'
  }))
  console.log(oldBooks);