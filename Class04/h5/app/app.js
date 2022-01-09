let numArray = [10,20,33,42,100];

function findValues(arrayInput){
  console.log(`Min value: ${Math.min(...arrayInput)}, max value: ${Math.max(...arrayInput)}, sum of min + max: ${Math.min(...arrayInput)+Math.max(...arrayInput)}`);
}

findValues(numArray);