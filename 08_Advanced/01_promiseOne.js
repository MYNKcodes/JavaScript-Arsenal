const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(() => {
       console.log("Printing first"); 
       resolve()
    }, 1000);

})
promiseOne.then(()=>{
    console.log("promise one consumed");
})


new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('TAsk 2 is under Progress')
        resolve();
    },1000)
}).then( () =>{
    console.log("Task 2 finished");
})

const PromiseTwo = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve({username: 'mayank', password:'hehehaha123', email:'shuklaji@bubumail.com'})
    },1000)
})
PromiseTwo.then( (Details) => {
    console.log(Details);
})