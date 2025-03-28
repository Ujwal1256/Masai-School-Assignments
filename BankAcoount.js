function createBankAccount (initialAmount){
  let balance = initialAmount;
  
  function deposit(amount){
    balance += amount;
    return balance;
  }
  
  function withdraw(amount){
     balance = Math.abs(balance - amount)
    return balance;
  }
  
  function getBalance(){
    return balance;
  }
  
  return {deposit,withdraw,getBalance}
}



const account = createBankAccount(100);

console.log(account.deposit(50)); // Output: 150

console.log(account.withdraw(30)); // Output: 120

console.log(account.getBalance()); // Output: 120
