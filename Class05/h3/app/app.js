let numbersArr = [1,2,3,4,5,6,7,1,1,5,8,9,4,3,2,1];
countNum = 0;

function countValues(array, countItem) {
  array.forEach(item => {
    if (item == countItem) countNum++;
  });
  console.log(`The value ${countItem} is found ${countNum} times`);
}
countValues(numbersArr, 3);


/*Ovaa solucija ja najdov na net i mi pomogna dosta za da skontam odredeni stvari koi ne mi bea jasni,
 iako znam deka ne treba da koristime nesto sto go nemame pominato na cas...*/