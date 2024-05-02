const promiseThree = new Promise( (resolve, reject) => {
    setTimeout( () => {
        let error = false;
        if (!error) {
            resolve({username: "abhinav", designation: "CTO"})
        } else {
            reject("There is some fault in our end")
        }
    },1000)
})



// promiseOne.then( (details) => {
//     console.log(details);
//     return details.username;
// })
// .then( (name) => {
//     console.log(name);
// })
// .catch( (error) => {
//     console.log(error);
// })
// .finally(() => {
//     console.log("All tasks performed correctly");
// })


async function consumePromiseThree() {
    try {
        const responseOne = await promiseThree;
        console.log(responseOne);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseThree();



async function getAllUser() {
    try {
        const responseTwo = await fetch('https://jsonplaceholder.typicode.com/users')
        const cleanedData = await responseTwo.json();
        console.log(cleanedData);
    } catch (error) {
        console.log("E: ",error);
    }
}

// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then( (responseThree) => {
    return responseThree.json();
})
.then( (data) => {
    console.log(data);
})
.catch( (error) => {
    console.log("E: ",error);
})
.finally(() => {
    console.log("All of the operation are done");
})
