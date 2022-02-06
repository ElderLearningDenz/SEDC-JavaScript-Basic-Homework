let myPet = {
    name: "Barksalot",
    species: "Dog",
    bark(){
      alert("Woof, aham...Hey Dejan, stop petting me im not a puppy!")
    }
  };
  
  let mySecondPet = new Object();
  
  let petName = prompt("What is the name of your pet?");
  mySecondPet.petName = petName;
  
  let species = prompt("What species is your pet");
  mySecondPet.species = species;
  
  mySecondPet.meow = function(){alert("Meow...what? I can talk, just don't wanna.")};
  
  console.log(mySecondPet);
  
  mySecondPet.meow();