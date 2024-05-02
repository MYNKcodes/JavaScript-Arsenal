const string1 = 'hello';
const string2 = 'world';
// console.log(string1+string2+ ' from mayank');  not preferrd / recommended

// console.log(`I want to say ${string1} to the ${string2}`);


const studentName = new String("Abhinav_Dhar")
// console.log(studentName.length);            finding the length of the string
// console.log(studentName.toLowerCase());     convcert string to lowercase
// console.log(studentName.toUpperCase());     convert string to uppercase
// console.log(studentName.charAt(3));     for pointing character from the given index
// console.log(studentName.indexOf('n'));  for pointing out position of character

const updated_name = studentName.substring(1,4);        //prints the string upto the given range-1
console.log(updated_name);
const new_update = studentName.slice(-8,4);
console.log(new_update);

const space =("   mynk    ");
const check_space = space.trim();
console.log(space);
console.log(check_space); 

const url = "https://www.youtube.com/%20maktec%20zone/";
console.log(url.replace('%20','-'));   //to replace one time
console.log(url.replaceAll('%20','-'));   //to replace all matching outcomes
console.log(url.includes('mak'));       //check if it contains it or not
console.log(url.includes('sukkla'));
console.log(studentName.split('_'));       //makes and array after splitting
