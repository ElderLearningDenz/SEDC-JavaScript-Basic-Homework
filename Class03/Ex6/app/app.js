
function moneyAccount(){
    let getMoney = +prompt("How much money would you like to take out?");
    let amount = 1500;
    let restOfMoney = amount - getMoney;
    if(getMoney > 1500){
        alert(`You dont have that amount of money.The total on your account is ${amount}$, please try again!`)
    }else{
        alert(`You have ${restOfMoney}$ left on you bank account.`)
    }
    
}

moneyAccount();