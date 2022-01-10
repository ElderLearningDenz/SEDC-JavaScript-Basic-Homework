let firstName = ["Dejan","Jelena","Alek","Mila"];
let lastName = ["Kostenarov","Spasovska","Petrovski","Makarenova"];

function listOfNames(first,last){
  let innerArray = [];
  for(i=0;i<first.length;i++){
    let position = +i + 1
    innerArray[i] = `${position}. ${first[i]} ${last[i]}`;
  }
  return innerArray
}

let fullName = console.log(listOfNames(firstName,lastName));

