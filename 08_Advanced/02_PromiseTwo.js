const PromiseOne = new Promise ((resolve, reject)=> {
    setTimeout( () => {
        let fault = false;
        if (!fault) {
            resolve({username:'mayank', gender:'purush'})
        } else
            reject("Something went wrong")
    },1000)        
    
})
PromiseOne.then( (user) => {
    console.log(user);
    return user.username
})
.then( (username) => {
    console.log(username);
})
.catch( (error) => {
    console.log(error)
})
.finally( () => {
    console.log("All operations performed succesfully")
})