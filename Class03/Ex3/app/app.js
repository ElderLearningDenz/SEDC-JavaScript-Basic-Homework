let chooseAnimal = prompt("What type of animal are you(human/dog)?");
let whatAge = +prompt("How old are you?");
let convRateD = whatAge - 7;
let convRateH = whatAge *= 7;
function raceAgeConvertor(){
  switch(chooseAnimal){
    case "human":
      alert(`Your age is ${convRateD} in dog years.`);
      break;
      case "dog":
      alert(`Your age is ${convRateH} in human years.`);
      break;
  }
}

raceAgeConvertor();


//Cisto da napomenam deka sum epten dupka matematika i sigurno vaka ne e konverzijata pomegu razlika vo godini, megutoa me interesira dali barem sustinata na zadacata ja pogodiv, bidejki iskreno natamu ja nasociv celta poznavajki si gi moite math skills koi so ne se mrdnati od 4to... sad i know :) 