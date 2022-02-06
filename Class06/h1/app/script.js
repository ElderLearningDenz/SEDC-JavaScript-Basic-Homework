let gangOfNumbers = [2,3,4,6,];

let myTitle = document.getElementById("title");
let myContent = document.getElementById("content");

function print(arr,contentElement){
  sum = 0;
  contentElement.innerHTML += "<h3>Your list with the final result is:</h3>";
  contentElement.innerHTML += "<ul>";
  for(let i=0;i<arr.length;i++){
    sum += arr[i];
    contentElement.innerHTML += `<li>${arr[i]}</li>`;
  }
  contentElement.innerHTML += "</ul>";
  contentElement.innerHTML += `${arr[0]} + ${arr[1]} + ${arr[2]} + ${arr[3]}<br>`;
  contentElement.innerHTML += `"The final score is ${sum}"`;
}

print(gangOfNumbers,myContent);