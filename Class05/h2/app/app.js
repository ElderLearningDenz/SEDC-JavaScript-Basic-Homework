let firstName = ["Dejan","Jelena","Alek","Mila"];
let lastName = ["Kostenarov","Spasovska","Kostenarov","Doe"];

function fullName(fName,lName){
  for(let i in fName,lName){
    let position = +i + 1;
    console.log(`${position}. ${fName[i]} ${lName[i]}`)
  }
}

let fullN = fullName(firstName,lastName);


/* Ne uspeav da ja resam do kraj nekako me buni kako da iskreiram nov array vnatre vo funkcijata,
zatoa bi ve zamolil za nekakva nasoka makar sajt kade mozam podetalno da gi razgledam stvarive poso si bara vreme za zdravo sednuvanje i ucenje,
nesto koe za zal ne go imam vo momentov ama baby steps ideme nataka :)*/