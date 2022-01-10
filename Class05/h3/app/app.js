let numberArray = [1,1,1,2,3,32,3,4,44,5,65,6,77,7,7,8,9];

function findValue(num, arr){
  let counter = 0;
  for(i=0;i<arr.length;i++){
    if(num == arr[i]){
    counter++  
    }
  }
  console.log(`In this array the value ${num} occurs ${counter} times`);
}

findValue(1,numberArray);