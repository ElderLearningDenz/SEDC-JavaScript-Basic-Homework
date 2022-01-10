let someArray = [1,2,3,4,5,6,7,8,9,10];
let someOtherArray = [33,45,55,77,8,92];
let anotherArray = [2,33,45];

function checkNumValue(type,arr){
  let odd = [];
  let even = [];
  for(let i=0;i<arr.length;i++){
    if(arr[i] % 2 ==0 && type == "even"){
      even.push(arr[i]);
      console.log(`This is the result for even values: ${even}.`);
    }
    else if(arr[i] % 2 != 0 && type =="odd"){
      odd.push(arr[i]);
      console.log(`This is the result for odd values: ${odd}.`);
    }
  }
}

checkNumValue("odd",anotherArray);

/*Znam deka ne e bas vaka najtocno ama gord sum shto i ova go doterav, go mozgam use finalnoto resenie
no worries ne se predavam ama za da ne mi se trupaat domasni poso epten mi se natrupaa i trcav ko 
uspan srednoskolec za nakaj skolo poarno da gi predadam da ne bide too late. :)*/