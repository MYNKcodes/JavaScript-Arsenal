//for...in   loopp


const lang = {
    c: "C Language",
    cpp: "C++",
    js: "JavaScript",
    py: "python"
};

for (const abbrevation in lang) {
    console.log(abbrevation);
    //above prints only the key items, not its  values
    console.log(lang[abbrevation]);
    //above prints the values of the key
    console.log(`the abbrevation for ${lang[abbrevation]} is ${abbrevation}`);
};


//using FOR...IN in arrays

const games = ['GOW','COD','PUBG','NFS'];
for (const gameName in games) {
    console.log(games[gameName]);

}