function girlsBoys(x, y){
    if(x <= 9 && y<= 9){ 
        console.log("There are 0" + x + " Girls and 0" + y + " Boys in our team."); 
    }
    else if(x || y >9){ 
        console.log(`There are ${x} Girls and ${y} Boys in our team!`); 
    }else
    { 
        console.log(`No one's home, go away!`); 
    } 
}
girlsBoys(10,1);

