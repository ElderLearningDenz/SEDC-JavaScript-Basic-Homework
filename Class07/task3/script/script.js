let myCar = {
  model: "Honda",
  color: "Black",
  year: 2015,
  fuel: "diesel",
  fuelConsumption() {
    let oneKm = +prompt("How much gas we need for one kilometer");
    let distance = +prompt("How much distance are we going to travel?");
    let sum = oneKm * distance;
    alert(`We are going to need ${sum} litre fuel to reach our destinantion.`);
  },
};

myCar.fuelConsumption();
