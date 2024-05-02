

const apps = ['yt','inta','fb'];

//by arrow function

// apps.forEach((naamBolo) => {
//     console.log(naamBolo);
// });


// //by normal function

// apps.forEach(function (val) {
//     console.log(`by second method ${val}`);
// })

(cheez) => {
    console.log(cheez);
}

apps.forEach( (cheez,numb,arr) => {
    console.log(cheez,numb,arr);
});


const bhasha = [
    {
        langName: 'python',
        langSym: 'py' 
    },
    {
        langName: 'java',
        langSym: 'java' 
    },
    {
        langName: 'c',
        langSym: 'c' 
    }
]

bhasha.forEach( (item) => {
    console.log(item.langSym);
})