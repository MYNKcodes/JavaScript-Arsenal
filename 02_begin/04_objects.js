//Method 2 of defining objects: Singleton Method

const insta = new Object;
insta.user = "drunkard_007"
insta.gender = "male"
insta.loggedIn = true;
// console.log(insta);


//we prefer objects by literals method more


const facebook = {
    email : "mynk@biotcoin.com",
    fullname : {
        wholename : {
            firstname : "mayank",
            lastname : "shukla"
         }
    },
    age : 24
    
};

//we can make as many objects in one objects. and following is the method to access it.

// console.log(facebook.fullname.wholename);


            //adding objects

const obj1 = {1:'a', 2:'b'};
const obj2 = {3:'c',4:'d'};
const obj3 = {5:'e',6:'f'};

//for adding objects we use "Object.assign method and equate it with new variable because it stores value"


//here we used empty curly braces to show that all the items should be in a object
// const obj4 = Object.assign({},obj1,obj2,obj3);
// console.log(obj4);

// another methopd for adding object is to use it like that of array by using {...arrName, ...arr2}

const obj5 = {...obj1,...obj2,...obj3};
// console.log(obj5);




const grahak = [
    {
        id : 1,
        email : "sooklahu@pandit.com"
    },
    {
        id :2,
        email:"hehbeb@gymail.com"
    },
    {
        id:3,
        email:"huhu@dmail.com"
    }

]


// console.log(grahak[1].email);    


// we can get all the object's keys and values stored within an array   LIKE: 

// console.log(Object.keys(obj5));
// console.log(Object.values(obj5));
// console.log(Object.keys(insta));
// console.log(Object.values(insta));


// Object.entries make all the keys with their values in a separate array. which is enclosed in a bigger array.
console.log(Object.entries(facebook));