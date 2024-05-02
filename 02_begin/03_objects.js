// Object by Method 1:  by using Literals



const chabhi = Symbol('chabhihu');
const user = {
    name : "mayank",
    "full name" : "mayank shukla",
    degree : "bachelors",
    contact : 9179555647,
    [chabhi] : "deadpool",
    isLoggedIn : false,
    city : "rewa"
};
// console.log(user['name']);
// console.log(user["full name"]);
// console.log(user['degree']);
// console.log(user['contact']);
// console.log(user[chabhi]);
// console.log(user['city']);
// console.log(user);
// Object.freeze(user);
// user.contact = 8871500910;
// user.name = "shukla"
// console.log(user);
// console.log(user["contact"]);


// swaagat

user.swaagat = function(){
    return "yo yo userji";
}
console.log(user.swaagat());

user.swaagatNaam = function(){
//here  THIS means that i am reffering to this object only.
    return `kya baat hai ${this.name} ji, aap yahan?`;  
}
console.log(user.swaagatNaam());