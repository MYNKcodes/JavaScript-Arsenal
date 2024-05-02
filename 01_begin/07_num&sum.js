const myNum = 1000000
// console.log(myNum);
// console.log(myNum.toString().length);
const balance = new Number (69.756);
// console.log(balance.toString().length);
// console.log(balance.toPrecision(4));
// console.log(myNum.toLocaleString('en-IN'));


// +++++++++++++++++MATHS+++++++++++++++++++++++


    // console.log(Math.abs(-56));
    // console.log(Math.round(4.7));
    // console.log(Math.ceil(4.2));        //round offs to the upper digit i.e 4
    // console.log(Math.floor(4.2));       //round off ralted to after decimal digit
    // console.log(Math.min(4,6,45,12,3));
    // console.log(Math.max(4,6,45,12,3));


    // console.log(Math.random());         //prints random number betweeb 0 to 1
    // console.log(Math.random()*10);      //prints number from 0 to 9
    // console.log((Math.random()*10)+1);      //prints number from 1 to 9
    // console.log(Math.floor(Math.random()*10));


    const min = 10;
    const max = 20;

    console.log(Math.random()*(max-min+1));
    console.log(Math.floor(Math.random()*(max-min+1)+min));
