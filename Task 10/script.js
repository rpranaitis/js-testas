/* ------------------------------ TASK 10 ----------------------------------------------------------------
Sukurkite klasę "BankAccount" ir jos išvestines klases "SavingsAccount" ir "CheckingAccount" (naudokite ES6).

Klasė "BankAccount":
Savybės: accountNumber, ownerName, balance
Metodai: deposit(amount), withdraw(amount), getBalance()

Klasė "SavingsAccount" (išplėčia "BankAccount"):
Papildoma savybė: interestRate
Metodai: addInterest() - prideda palūkanas prie balanso pagal interestRate

Klasė "CheckingAccount" (išplėčia "BankAccount"):
Papildoma savybė: overdraftLimit
Metodai: withdraw(amount) - leidžia neigiamą balansą iki nurodyto overdraftLimit

------------------------------------------------------------------------------------ */

// Test
const savings = new SavingsAccount('12345', 'John Doe', 1000, 5);
const checking = new CheckingAccount('67890', 'Jane Doe', 500, 200);

savings.addInterest();
console.log(savings.getBalance()); // Rezultatas: 1050

checking.withdraw(600);
console.log(checking.getBalance()); // Rezultatas: -100